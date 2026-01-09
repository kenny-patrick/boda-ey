import { Box, Typography } from "@mui/material";

export default function Message() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      gap="12px"
    >
      <Box
        component="img"
        sx={{ maxWidth: "50%" }}
        alt="Logo with A & E initials"
        src="/boda-ey/img/rama.JPG"
      />
      <Typography variant="body1">
        Con mucha ilusión queremos vivir este momento rodeados de personas que
        han formado parte de nuestra historia. Será un honor contar con tu
        presencia.
      </Typography>
      <Box
        component="img"
        sx={{ maxWidth: "50%" }}
        alt="Logo with A & E initials"
        src="/boda-ey/img/logo.PNG"
      />
      <Typography variant="h5">¡Te esperamos!</Typography>

      <Box
        component="img"
        paddingTop="12px"
        sx={{ maxWidth: { xs: 300, md: 500 } }}
        alt="Pareja tomandose las manos"
        src="/boda-ey/img/esperamos.jpeg"
      />
    </Box>
  );
}
