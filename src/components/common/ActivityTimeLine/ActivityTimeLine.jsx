import React, { useMemo } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Box, ListItemButton, Skeleton, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CommentIcon from "@mui/icons-material/Comment";
import PetsIcon from "@mui/icons-material/Pets";
import { getDate } from "../../../assets/js/date";

const ActivityTimeLine = ({ activities }) => {
  return (
    <Timeline position="alternate" sx={{ p: 0 }}>
      {activities?.map(
        ({ _id, action, doc, createdAt, model, status, description }) => (
          <ActivityItem
            key={_id}
            _id={_id}
            action={action}
            doc={doc}
            createdAt={createdAt}
            model={model}
            status={status}
            description={description}
          />
        )
      )}
    </Timeline>
  );
};

const ActivityItem = ({
  _id,
  action,
  doc,
  createdAt,
  model,
  status,
  description,
}) => {
  let to;
  switch (model) {
    case "LostPetComment":
      to = `/pets/lost/${doc.lostPet._id}`;
      break;
    case "Pet":
      to = `/pets/${doc._id}`;
      break;
    default:
      to = "";
  }
  const formatedDate = useMemo(() => {
    if (!doc.createdAt) return;
    const { day, month, year } = getDate(doc.createdAt);
    return `${day} de ${month} del ${year}`;
  }, [doc.createdAt]);
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {formatedDate}
      </TimelineOppositeContent>
      <TimelineSeparator>
        {model === "LostPetComment" && (
          <TimelineDot>
            <CommentIcon />
          </TimelineDot>
        )}
        {model === "Pet" && (
          <TimelineDot>
            <PetsIcon />
          </TimelineDot>
        )}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px" }}>
        <ListItemButton
          component={LinkRouter}
          to={to}
          sx={{ flexDirection: "column", alignItems: "flex-start", p: 1 }}
        >
          <Typography variant="body2" component="p">
            {model === "LostPetComment" && (
              <>
                {`${description} en la publicación de `}
                <Box component="span" fontWeight={"600"}>
                  {doc.lostPet.user.username}
                </Box>
              </>
            )}
            {model === "Pet" && (
              <>
                {description}{" "}
                <Box component="span" fontWeight={"600"}>
                  {doc.name}
                </Box>
              </>
            )}
          </Typography>
          {doc?.description && (
            <Typography variant="caption" color={"text.secondary"}>
              {doc?.description}
            </Typography>
          )}
        </ListItemButton>
      </TimelineContent>
    </TimelineItem>
  );
};

const Loading = ({ width = "150px", height = "30px" }) => {
  return (
    <Box mb={2} display="flex" alignItems="center" justifyContent="center">
      <Skeleton variant="text" width={width} height={height} />
      <Skeleton variant="text" width={width} height={height} />
    </Box>
  );
};

ActivityTimeLine.Loading = Loading;

export default ActivityTimeLine;
