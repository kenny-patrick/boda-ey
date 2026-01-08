import { Box, Grid, Typography } from "@mui/material";

export default function Parents() {
  return (
    <Box sx={{ flexGrow: 1 }} paddingBottom="24px">
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h6">Padres del novio</Typography>
          <Typography variant="body1">Antonio Pérez Morales</Typography>
          <Typography variant="body1">Maria luz Abarca Guillen</Typography>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h6">Padres de la novia</Typography>
          <Typography>Leonardo Solorzano</Typography>
          <Typography marginBottom="12px">Zoila Ramos Pérez</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h6">Padrinos</Typography>
          <Typography variant="body1">Sr. Ramiro Pérez Solorzano</Typography>
          <Typography variant="body1">Sra. Socorro Aguilar Garcia</Typography>
          <Typography>-</Typography>
          <Typography variant="body1">Sr. Austreberto Pérez Morales</Typography>
          <Typography variant="body1">Sra. Oralia Méndez Cruz</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
