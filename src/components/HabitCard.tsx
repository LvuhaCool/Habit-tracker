import { type FC } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  color?: string;
  streak: number;
  progress: number;
  completed: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

const HabitCard: FC<Props> = ({
  id,
  title,
  subtitle,
  color = "#8b5cf6",
  streak,
  progress,
  completed,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        boxShadow: "0 18px 40px rgba(17, 24, 39, 0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 20px 45px rgba(17, 24, 39, 0.1)",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: 700 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Chip
            label={completed ? "Done" : "Active"}
            color={completed ? "secondary" : "primary"}
            size="small"
          />
          <IconButton
            size="small"
            aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
            onClick={() => onToggleComplete(id)}
          >
            <TaskAltIcon color={completed ? "secondary" : "disabled"} />
          </IconButton>
          <IconButton
            size="small"
            aria-label="Remove habit"
            onClick={() => onDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center", mt: 3 }}
      >
        <Typography variant="caption" color="text.secondary">
          {streak} day streak
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {progress}% progress
        </Typography>
      </Stack>

      <Box sx={{ mt: 2 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "divider",
            "& .MuiLinearProgress-bar": {
              backgroundColor: color,
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default HabitCard;
