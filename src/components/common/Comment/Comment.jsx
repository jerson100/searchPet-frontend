import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Avatar, Box, Grid, Link, Skeleton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getTweetPublicationDate } from "../../../utils/date";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { motion } from "framer-motion";
import { useState } from "react";
import Map from "../Map";
import { useMemo } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transformOrigin: "center top",
    transition: {
      duration: 0.4,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Comment = ({
  user,
  _id,
  description,
  createdAt,
  animate,
  handleDelete,
  locations,
  loading = false,
}) => {
  const [laodingDeleteComment, setlaodingDeleteComment] = useState(false);

  const _handleDelete = async () => {
    if (!laodingDeleteComment) {
      setlaodingDeleteComment(true);
      await handleDelete(_id);
      setlaodingDeleteComment(false);
    }
  };

  const { user: userAuth } = useAuthContext();
  if (loading) return <LoadingComment />;
  return (
    <Grid
      border="solid 1px"
      borderColor="divider"
      container
      p={2}
      flexWrap={"nowrap"}
      mb={2}
      borderRadius="5px"
      sx={{ backgroundColor: "rgb(243, 242, 239)" }}
      component={motion.div}
      initial={"hidden"}
      animate={"show"}
      variants={animate && variants}
    >
      <Grid item pr={2}>
        <Link component={LinkRouter} to={`/users/${user._id}`}>
          <Avatar alt={user.username} src={user.urlImageProfile} />
        </Link>
      </Grid>
      <Grid item container flexDirection={"column"}>
        <Grid item mb={1} container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="body1" component="p">
              <Link
                component={LinkRouter}
                to={`/users/${user._id}`}
                underline="hover"
                color="text.primary"
              >
                {user.username}
              </Link>
            </Typography>
            <Typography component="span" variant="caption">
              {getTweetPublicationDate(new Date(createdAt))}
            </Typography>
          </Grid>
          {userAuth?.user._id === user._id && (
            <Grid item>
              <MoreVertIcon cursor="pointer" onClick={() => _handleDelete()} />
            </Grid>
          )}
        </Grid>
        <Grid item>
          <Typography variant="body2">{description}</Typography>
        </Grid>
        {locations?.length > 0 && (
          <Grid item mt={2}>
            <ReferenceMap locations={locations} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

const ReferenceMap = ({ locations }) => {
  const locationsMemo = useMemo(() => {
    return locations?.map(({ coordinates: [lng, lat], _id }) => (
      <Marker
        key={_id}
        position={[lat, lng]}
        icon={
          new L.Icon({
            iconUrl: "/animalMark.png",
            iconRetinaUrl: "/animalMark.png",
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            iconSize: new L.Point(40, 40),
          })
        }
      ></Marker>
    ));
  }, [locations]);

  const coordinates = useMemo(() => {
    return locations?.map(({ coordinates: [lng, lat] }) => [lat, lng]);
  }, [locations]);

  return (
    <Box
      sx={{
        height: "150px",
        border: (props) => `solid 1px ${props.palette.divider}`,
      }}
    >
      <Map
        center={[-11.1167582, -77.3009863]}
        zoom={9}
        fullscreenControl={false}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
      >
        {locationsMemo}
        <Map.AnimatePoints points={coordinates} />
      </Map>
    </Box>
  );
};

const LoadingComment = () => {
  return (
    <Grid
      border="solid 1px"
      borderColor="divider"
      container
      p={2}
      flexWrap={"nowrap"}
      mb={2}
      borderRadius="5px"
      sx={{ backgroundColor: "rgb(243, 242, 239)" }}
    >
      <Grid item pr={2}>
        <Skeleton variant="circular" height="40px" width="40px" />
      </Grid>
      <Grid item container flexDirection={"column"}>
        <Grid item mb={1} container justifyContent={"space-between"}>
          <Grid item>
            <Skeleton variant="text" height="30px" width="60px" />
            <Skeleton variant="text" height="30px" width="40px" />
          </Grid>
        </Grid>
        <Grid item>
          <Skeleton variant="text" height="30px" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Comment);
