import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  Grid,
  Box,
  Alert,
  CircularProgress,
  Snackbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);
  const [resumePreviewVisible, setResumePreviewVisible] = useState(false);

  const handleChange = (event) => {
    const { files } = event.target;
    setResume(files[0] || null);
    setAlert({
      open: true,
      message: "File selected!",
      severity: "info",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!resume) {
      setAlert({
        open: true,
        message: "Please select a file before uploading.",
        severity: "error",
      });
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("resume", resume);

    try {
      await axios.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlert({
        open: true,
        message: "Resume uploaded successfully!",
        severity: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: "Error uploading resume.",
        severity: "error",
      });
    }
    setLoading(false);
  };

  const previewResume = resume ? (
    <Box mt={2}>
      <Typography variant="body1">Resume Preview:</Typography>
      <Paper elevation={3} sx={{ mt: 2, p: 2, textAlign: "center" }}>
        {resume.type === "application/pdf" ? (
          <embed
            src={URL.createObjectURL(resume)}
            type="application/pdf"
            width="100%"
            height="500px"
            style={{ border: "none" }}
          />
        ) : (
          <a href={URL.createObjectURL(resume)} download>
            {resume.name}
          </a>
        )}
      </Paper>
    </Box>
  ) : null;

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h6">Upload Resume</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".doc,.docx,.pdf"
            onChange={handleChange}
            style={{ display: "none" }}
            id="resume-upload"
          />
          <label htmlFor="resume-upload">
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
            {loading ? <CircularProgress size={24} /> : "Upload Resume"}
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        {resume && (
          <Box mt={2} textAlign="center">
            <Typography variant="body1">Selected File:</Typography>
            <List sx={{ display: "inline-block", textAlign: "left", mb: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={resume.name} />
              </ListItem>
            </List>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setResumePreviewVisible(!resumePreviewVisible)}
              startIcon={
                resumePreviewVisible ? <VisibilityIcon /> : <VisibilityIcon />
              }
              sx={{ mt: 2 }}
            >
              {resumePreviewVisible ? "Hide Preview" : "Preview Resume"}
            </Button>
            {resumePreviewVisible && previewResume}
          </Box>
        )}
      </Grid>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        action={
          <Button
            color="inherit"
            onClick={() => setAlert((prev) => ({ ...prev, open: false }))}
          >
            Close
          </Button>
        }
      >
        <Alert
          severity={alert.severity}
          onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ResumeUpload;
