import { type FC } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Header: FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 4,
        backgroundColor: "background.paper",
        boxShadow: "0 16px 40px rgba(17, 24, 39, 0.06)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 56,
              height: 56,
              fontWeight: 700,
            }}
          >
            HT
          </Avatar>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Good morning
            </Typography>
            <Typography variant="h5">Your Habits</Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            May 16
          </Typography>
          <Avatar sx={{ width: 44, height: 44, bgcolor: "secondary.main" }}>
            A
          </Avatar>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Header;
