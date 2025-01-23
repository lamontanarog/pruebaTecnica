import React, { useEffect, useState } from "react"
import { Typography, Box, Container, Grid, Button, useTheme, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"
import { getTests } from "../services/api"
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const TestList = () => {
  const [tests, setTests] = useState([])
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    getTests()
      .then((response) => {
        setTests(response.data)
      })
      .catch((error) => {
        console.error("Error fetching tests", error)
      })
  }, [])

  return (
    <Box
      sx={{
        minHeight: "25vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{  mx: "auto", textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h1" gutterBottom>
                RECRUITMENT INTELIGENTE
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                sx={{
                  mb: 4,
                  maxWidth: "100%",
                }}
              >
                Optimiza tiempos en el filtro, creación, corrección y feedback en pruebas técnicas de los candidatos.
              </Typography>
              <Button
                component={Link}
                to="/list"
                variant="contained"
                size={isMobile ? "medium" : "large"}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  display: "inline-block",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Te lo enseñamos <RocketLaunchOutlinedIcon sx={{ width: 20, height: 20}}/>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              component="img"
              src="https://www.workero.com/wp-content/uploads/2022/10/01_Hero-18-300x200.jpg"
              alt="Recruitment"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 600,
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TestList

