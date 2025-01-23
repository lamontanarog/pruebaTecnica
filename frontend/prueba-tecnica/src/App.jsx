import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material"
import { Link } from "react-router-dom"
import TestList from "./components/TestList"
import CreateTestForm from "./components/CreateTestForm"
import TestDetail from "./components/TestDetail"
import { theme } from "./theme"
import Home from "./pages/home"
import Footer from "./components/Footer"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column",minWidth: "100%" }}>
          <AppBar position="static" color="default" elevation={0}>
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                <a href="/" style={{ textDecoration: "none", color: "inherit"}}>SPARRING</a>
              </Typography>
              <Button component={Link} to="/create" variant="contained" sx={{ ml: 2 }}>
                Create Test
              </Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<TestList />} />
              <Route path="/create" element={<CreateTestForm />} />
              <Route path="/test/:id" element={<TestDetail />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
        
      </Router>
    </ThemeProvider>
  )
}

export default App

