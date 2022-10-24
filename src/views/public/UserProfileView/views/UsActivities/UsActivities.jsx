import React from "react";
import JeSection from "../../../../../components/common/JeSection";
import useAxios from "axios-hooks";
import { useOutletContext } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivityTimeLine from "../../../../../components/common/ActivityTimeLine";

const UsActivities = () => {
  const { idUser } = useOutletContext();
  const [{ data, error, loading }] = useAxios(
    {
      url: `users/${idUser}/activities`,
      method: "GET",
    },
    {
      useCache: true,
    }
  );
  return (
    <Box>
      <JeSection.Title textAlign="left" variant="h5">
        Actividad
      </JeSection.Title>
      {loading ? (
        <>
          <ActivityTimeLine.Loading />
          <ActivityTimeLine.Loading width="180px" />
          <ActivityTimeLine.Loading width="130px" />
          <ActivityTimeLine.Loading width="190px" />
          <ActivityTimeLine.Loading width="100px" />
        </>
      ) : !error ? (
        <ActivityTimeLine activities={data} />
      ) : (
        // <List>
        //   {data.map(
        //     ({ _id, action, doc, createdAt, model, status, description }) => (
        //       <Activity
        //         component="li"
        //         key={_id}
        //         model={model}
        //         action={action}
        //         doc={doc}
        //         status={status}
        //         createdAt={createdAt}
        //         description={description}
        //       />
        //     )
        //   )}
        // </List>
        <Typography paragraph>
          Ocurrió un error, vuelva a intentarlo nuevamente más tarde
        </Typography>
      )}
    </Box>
  );
};

export default UsActivities;
