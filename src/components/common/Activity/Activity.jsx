import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";
import CommentIcon from "@mui/icons-material/Comment";
import PetsIcon from "@mui/icons-material/Pets";

import { useMemo } from "react";
import { getDate } from "../../../assets/js/date";
import { Box } from "@mui/system";

const ACTIONS = {
  c: "Agregó",
  u: "Actualizó",
  d: "Eliminó",
};

const Activity = ({
  component = "div",
  _id,
  action,
  doc,
  createdAt,
  model,
  status,
}) => {
  const formatedDate = useMemo(() => {
    if (!doc.createdAt) return;
    const { day, month, year } = getDate(doc.createdAt);
    return `${day} de ${month} del ${year}`;
  }, [doc.createdAt]);
  return (
    <ListItem component={component} disablePadding>
      {model === "LostPetComment" && (
        <ActivityWrapper
          Icon={<CommentIcon />}
          Header={
            <Typography paragraph mb={0}>
              {ACTIONS[action]} un comentario en la publicación de{" "}
              <Box component="span" fontWeight={"600"}>
                {doc.lostPet.user.username}
              </Box>{" "}
              el {formatedDate}
            </Typography>
          }
          to={`/pets/lost/${doc.lostPet._id}`}
          description={doc.description}
        />
      )}
      {model === "Pet" && (
        <ActivityWrapper
          Icon={<PetsIcon />}
          Header={
            <Typography paragraph mb={0}>
              {ACTIONS[action]} una nueva mascota{" "}
              <Box component="span" fontWeight={"600"}>
                {doc.name}
              </Box>{" "}
              el {formatedDate}
            </Typography>
          }
          to={`/pets/${doc._id}`}
        />
      )}
    </ListItem>
  );
};

const ActivityWrapper = ({ Icon, Header, description, to }) => {
  return (
    <ListItemButton component={LinkRouter} to={to || ""}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText
        primary={Header}
        secondary={
          description && (
            <Typography variant="caption" color={"text.secondary"}>
              <LinesEllipsis maxLine={2} text={`${description}`} />
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

const Loading = ({ width = "150px", height = "30px" }) => {
  return (
    <Box mb={2} display="flex" alignItems="center">
      <Skeleton
        variant="rectangular"
        width="20px"
        height="20px"
        sx={{ mr: 1 }}
      />
      <Box>
        <Skeleton variant="text" width={width} height={height} />
        <Skeleton variant="text" width={width} height={height} />
      </Box>
    </Box>
  );
};

Activity.Loading = Loading;

export default Activity;
