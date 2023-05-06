import { Box, CircularProgress, Typography } from "@mui/material";
import theme from "../../../theme/theme";

function Loading() {
  return (
    <Box data-testid="loading">
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px" }}>
      <CircularProgress size={64} color="primary" />
      <Typography variant="h5" component="h2" mt={2} textAlign="center" color={theme.palette.primary.contrastText}>
        Loading...
      </Typography>
    </div>
    </Box>
  );
}

export default Loading;