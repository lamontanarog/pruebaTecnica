import React, { useEffect, useState } from "react"
import { Typography, List, ListItem, ListItemButton, ListItemText, Paper, Box, CircularProgress } from "@mui/material"
import { Link } from "react-router-dom"
import { getTests } from "../services/api"

const TestList = () => {
  const [tests, setTests] = useState([])

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
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Evaluación técnica inteligente
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Optimiza tiempos en el filtro, creación, corrección y feedback en pruebas técnicas de los candidatos.
      </Typography>
      <Paper elevation={0} sx={{ mt: 4 }}>
        <List>
          {(!tests || tests.length === 0 ? ( <CircularProgress />) : tests.map((test) => (
            <ListItem key={test._id} disablePadding>
              <ListItemButton component={Link} to={`/test/${test._id}`}>
                <ListItemText primary={test.question} />
              </ListItemButton>
            </ListItem>
          )))}
        </List>
      </Paper>
    </Box>
  )
}

export default TestList

