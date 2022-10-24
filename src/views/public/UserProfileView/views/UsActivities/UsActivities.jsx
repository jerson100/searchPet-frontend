import React from "react";
import JeSection from "../../../../../components/common/JeSection";
import useAxios from "axios-hooks";
import { useOutletContext } from "react-router-dom";
import { List, Typography } from "@mui/material";
import Activity from "../../../../../components/common/Activity/Activity";
import { Box } from "@mui/system";

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
          <Activity.Loading />
          <Activity.Loading width="180px" />
          <Activity.Loading width="130px" />
          <Activity.Loading width="190px" />
          <Activity.Loading width="100px" />
        </>
      ) : !error ? (
        <List>
          {data.map(({ _id, action, doc, createdAt, model, status }) => (
            <Activity
              component="li"
              key={_id}
              model={model}
              action={action}
              doc={doc}
              status={status}
              createdAt={createdAt}
            />
          ))}
        </List>
      ) : (
        <Typography paragraph>
          Ocurrió un error, vuelva a intentarlo nuevamente más tarde
        </Typography>
      )}
    </Box>
  );
};

export default UsActivities;
