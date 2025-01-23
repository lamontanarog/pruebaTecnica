import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.aquaBlue", p: 8, my: { xs: 4, md: 4, minHeight: "20vh"} }}>
        <Typography variant="h4" fontFamily={"serif"} align="center" sx={{ mt: 4 }}>
            Evaluacion tecnica inteligente
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            &copy; 2023 SPARRING. All rights reserved.
          </Typography>
        </Box>
  )
}

export default Footer