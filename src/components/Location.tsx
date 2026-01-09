import { Box, Button, Card, Typography } from "@mui/material";

export default function Location() {
  const mapsUrl = "https://maps.app.goo.gl/LaFS8h4Hru5xZSAN6";

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5">Ubicación</Typography>

      <Card
        sx={{
          padding: "12px",
          maxWidth: "400px",
          marginTop: "12px",
          marginBottom: "12px"
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Salón Imperial</Typography>
          <Typography variant="subtitle1">
            Tercera Avenida Pte. Nte. 72-70
          </Typography>
          <Typography variant="subtitle1">Cruz Grande</Typography>
          <Typography variant="subtitle1">
            Comitán de Domínguez, Chiapas, México
          </Typography>
          <Button
            onClick={() => {
              const newWindow = window.open(
                mapsUrl,
                "_blank",
                "noopener,noreferrer"
              );
              if (newWindow) newWindow.opener = null;
            }}
            variant="contained"
            sx={{ marginTop: "12px" }}
          >
            Ver Mapa
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
