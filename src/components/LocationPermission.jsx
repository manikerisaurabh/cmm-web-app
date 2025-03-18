"use client"

import { useState, useEffect } from "react"
import { Box, Typography, Button, Paper, CircularProgress, Alert, AlertTitle } from "@mui/material"
import { MyLocation, ArrowBack } from "@mui/icons-material"

export default function LocationPermission({ onPermissionChange, onBack }) {
  const [status, setStatus] = useState("idle") // idle, requesting, success, error
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      setStatus("error")
      setError("Geolocation is not supported by your browser")
      onPermissionChange(false, null)
    }
  }, [onPermissionChange])

  const requestLocation = () => {
    setStatus("requesting")

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
        setStatus("success")
        onPermissionChange(true, locationData)
      },
      (error) => {
        setStatus("error")

        let errorMessage = "Failed to get your location"
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "You denied the request for location access"
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable"
            break
          case error.TIMEOUT:
            errorMessage = "The request to get your location timed out"
            break
          case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred"
            break
        }

        setError(errorMessage)
        onPermissionChange(false, null)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    )
  }

  return (
    <Paper elevation={2} sx={{ p: 4, maxWidth: 600, mx: "auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Location Access Required
      </Typography>

      <Typography variant="body1" paragraph>
        To find stores near you that offer products in your selected category, we need access to your location.
      </Typography>

      {status === "error" && (
        <Alert severity="error" sx={{ mb: 3 }}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      {status === "success" && (
        <Alert severity="success" sx={{ mb: 3 }}>
          <AlertTitle>Success</AlertTitle>
          Location access granted! Finding stores near you...
        </Alert>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="outlined" startIcon={<ArrowBack />} onClick={onBack}>
          Go Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={status === "requesting" ? <CircularProgress size={20} color="inherit" /> : <MyLocation />}
          onClick={requestLocation}
          disabled={status === "requesting" || status === "success"}
        >
          {status === "requesting" ? "Requesting..." : "Allow Location Access"}
        </Button>
      </Box>
    </Paper>
  )
}

