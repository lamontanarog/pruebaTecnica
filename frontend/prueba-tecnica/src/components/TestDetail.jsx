import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Typography, Paper, Box, Container, Skeleton, Button } from "@mui/material"
import { getTestById } from "../services/api"

const TestDetail = () => {
  const { id } = useParams()
  const [test, setTest] = useState(null)

  useEffect(() => {
    getTestById(id)
      .then((response) => {
        setTest(response.data)
      })
      .catch((error) => {
        console.error("Error fetching test", error)
      })
  }, [id])

  if (!test) {
    return (
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Skeleton variant="text" height={60} />
        <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} />
      </Container>
    )
  }

  return (
    <>
    <Button component={Link} to="/list" variant="contained">Volver</Button>
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h2" gutterBottom>
        {test.question}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 4 },
          mt: 4,
          border: "1px solid #eee",
        }}
      >
        <Typography variant="body1">{test.solution}</Typography>

        <Typography variant="subtitle2" mt={2} sx={{ color: "text.secondary" }}>Esta prueba fue creada: {test.createAt.slice(0, 10)}</Typography>
      </Paper>
    </Container>
    </>
  )
}

export default TestDetail

