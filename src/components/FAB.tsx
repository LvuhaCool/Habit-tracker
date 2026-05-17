import { type FC } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  onClick?: () => void;
};

const FAB: FC<Props> = ({ onClick }) => {
  return (
    <Fab
      onClick={onClick}
      color="secondary"
      aria-label="Add habit"
      sx={{
        position: "fixed",
        right: { xs: "50%", md: 24 },
        bottom: 92,
        transform: { xs: "translateX(50%)", md: "none" },
        zIndex: 20,
        width: 64,
        height: 64,
        boxShadow: "0 18px 36px rgba(124, 58, 237, 0.24)",
      }}
    >
      <AddIcon sx={{ fontSize: 28 }} />
    </Fab>
  );
};

export default FAB;
