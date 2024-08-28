import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  IconButton,
  Snackbar,
  Typography,
  Grid,
  Box,
  Alert,
  CircularProgress,
  Paper,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setVideoPreviewUrl(URL.createObjectURL(file));
    setAlert({
      open: true,
      message: "File selected!",
      severity: "info",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) {
      setAlert({
        open: true,
        message: "Please select a video file.",
        severity: "error",
      });
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("video", videoFile);
    try {
      await axios.post("/video/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlert({
        open: true,
        message: "Video uploaded successfully!",
        severity: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: "Error uploading video.",
        severity: "error",
      });
    }
    setLoading(false);
  };

  const handleClose = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h6">Upload Video</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".mp4,.wmv"
            onChange={handleChange}
            style={{ display: "none" }}
            id="video-upload"
          />
          <label htmlFor="video-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<UploadIcon />}
            >
              Select File
            </Button>
          </label>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Upload Video"}
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        {videoFile && (
          <Box mt={2} textAlign="center">
            <Typography variant="body1">Video Preview:</Typography>
            <Paper
              elevation={3}
              sx={{
                mt: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <video
                controls
                src={videoPreviewUrl}
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: "8px",
                }}
              />
              <Typography variant="body2" mt={1}>
                {videoFile.name}
              </Typography>
            </Paper>
          </Box>
        )}
      </Grid>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          severity={alert.severity}
          onClose={handleClose}
          sx={{
            backgroundColor:
              alert.severity === "success" ? "#4caf50" : "#f44336",
            color: "white",
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default VideoUpload;
