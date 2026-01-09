import { Box, Grid, Typography } from "@mui/material";

export default function BibleVerse() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      paddingBottom="24px"
    >
      <Typography>
        "Grábame como un sello sobre tu corazón; llévame como una marca sobre tu
        brazo. Fuerte es el amor, como la muerte..."
      </Typography>
      <Typography>Cantares 8:6</Typography>
      <Grid item xs={6} md={6} marginTop="12px">
        <Grid item xs={12} md={12}>
          <img
            src="/boda-ey/img/dove.png"
            alt="Event Image"
            style={{ maxWidth: "25%", height: "auto" }}
          />
        </Grid>
      </Grid>
      <Typography marginTop="12px">
        "Con la bendición de Dios y de nuestros padres."
      </Typography>
    </Box>
  );
}
