import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from "axios-hooks";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyRegisterAccountToken = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [{ error, loading }] = useAxios(
    {
      url: "auth/login/token",
      method: "POST",
      data: {
        token: params.get("token"),
      },
    },
    {
      useCache: false,
    }
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexGrow: 1,
      }}
      p={2}
    >
      {loading ? (
        <Typography paragraph mb={2}>
          Espere un momento...
        </Typography>
      ) : (
        <>
          <Alert severity="success" sx={{ marginBottom: "1rem" }}>
            <AlertTitle>Sucess</AlertTitle>
            Cuenta verificada
          </Alert>
          <Button
            type="button"
            size="medium"
            color="primary"
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            Ir al login
          </Button>
        </>
      )}
    </Box>
  );
};

export default VerifyRegisterAccountToken;
