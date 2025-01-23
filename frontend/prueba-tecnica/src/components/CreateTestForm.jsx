import React, { useState } from "react"
import { TextField, Button, Typography, Container, Paper, Stack, MenuItem, Snackbar, Alert } from "@mui/material"
import { createTest } from "../services/api"

const CreateTestForm = () => {
  const [test, setTest] = useState({
    type: "",
    question: "",
    solution: "",
  })

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación antes de enviar
    if (!test.type) {
      return setAlert({
        open: true,
        message: "El tipo de prueba es obligatorio.",
        type: "error",
      })
    }
    if (!test.question) {
      return setAlert({
        open: true,
        message: "La pregunta es obligatoria.",
        type: "error",
      })
    }
    if (test.type === "generacion de codigo" && !test.solution) {
      return setAlert({
        open: true,
        message: "La solución es obligatoria para el tipo 'Generación de código'.",
        type: "error",
      })
    }

    // Enviar el formulario si pasa las validaciones
    createTest(test)
      .then((response) => {
        console.log("Test created", response)
        setAlert({
          open: true,
          message: "Prueba técnica creada exitosamente",
          type: "success",
        })
        clearForm()
      })
      .catch((error) => {
        console.error("Error creating test", error)
        setAlert({
          open: true,
          message: "Error al crear la prueba técnica",
          type: "error",
        })
      })
  }

  const clearForm = () => {
    setTest({
      type: "",
      question: "",
      solution: "",
    })
  }

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false })
  }

  return (
    <Container maxWidth="md" sx={{ py: 8, mx: "auto" }}>
      <Typography variant="h2" gutterBottom align="center">
        Crear Nueva Prueba
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 4 },
          mt: 4,
          border: "1px solid #eee",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} sx={{ maxWidth: '100%', mx: "auto" }}>
            <TextField
              fullWidth
              label="Tipo de prueba"
              name="type"
              value={test.type}
              onChange={(e) => setTest({ ...test, type: e.target.value })}
              variant="outlined"
              select
              required
            >
              <MenuItem value="desarrollar">Pregunta a desarrollar</MenuItem>
              <MenuItem value="generacion de codigo">Generación de código</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Pregunta"
              name="question"
              value={test.question}
              onChange={(e) => setTest({ ...test, question: e.target.value })}
              variant="outlined"
              required
              error={!test.question}
              helperText={!test.question ? "La pregunta es obligatoria." : ""}
            />

            <TextField
              fullWidth
              label="Solución"
              name="solution"
              value={test.solution}
              onChange={(e) => setTest({ ...test, solution: e.target.value })}
              multiline
              rows={4}
              variant="outlined"
              error={test.type === "generacion de codigo" && !test.solution}
              helperText={test.type === "generacion de codigo" && !test.solution 
                ? "La solución es obligatoria para el tipo 'Generación de código'." 
                : ""}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
              }}
            >
              Crear Prueba
            </Button>
          </Stack>
        </form>
      </Paper>

      {/* Snackbar para mensajes de alerta */}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity={alert.type} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default CreateTestForm
