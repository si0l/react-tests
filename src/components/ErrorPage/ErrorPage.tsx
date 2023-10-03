import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router";
import { RoutePath } from "../../navigation/router/RoutePath";
const ErrorPage = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "blue",
      }}
    >
      {error.code === "ERR_BAD_REQUEST" && (
        <Typography variant="h6" style={{ color: "white" }}>
          Error Code: 404
        </Typography>
      )}
      <Typography variant="h4" style={{ color: "white" }}>
        Error Message: {error.message}
      </Typography>
      <Box className="flex gap-2">
        <Button variant="contained" onClick={resetErrorBoundary}>
          Reload Page
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate(RoutePath.HOME);
            navigate(0);
          }}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
