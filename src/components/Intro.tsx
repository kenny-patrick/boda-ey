import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

export default function Intro() {
  const ourWeddingFont = createTheme({
    typography: {
      fontFamily: ["Playfair Display Variable", "serif"].join(","),
      h4: {
        fontWeight: 600,
        color: "#acc077"
      }
    }
  });

  const mainText = "#acc077";
  const namesFont = createTheme({
    typography: {
      fontFamily: ["Norican", "sans-serif"].join(","),
      h2: {
        color: mainText
      }
    }
  });

  return (
    <Box
      paddingTop="24px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingLeft="12px"
      paddingRight="12px"
      paddingBottom="24px"
    >
      <ThemeProvider theme={ourWeddingFont}>
        <Typography variant="h4">Nuestra Boda</Typography>
      </ThemeProvider>

      <ThemeProvider theme={namesFont}>
        <Typography variant="h2">Eleazar</Typography>
        <Typography variant="h2">&</Typography>
        <Typography variant="h2">Yesi</Typography>
      </ThemeProvider>

      <Box
        component="img"
        paddingTop="12px"
        sx={{ maxWidth: { xs: 300, md: 500 } }}
        alt="Pareja tomandose las manos"
        src="/boda-ey/img/hands.jpeg"
      />
    </Box>
  );
}
