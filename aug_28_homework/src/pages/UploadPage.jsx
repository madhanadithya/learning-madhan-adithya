import React from "react";
import { Tabs, Tab, Box, Paper } from "@mui/material";
import ImageUpload from "../components/ImageUpload";
import ResumeUpload from "../components/ResumeUpload";
import VideoUpload from "../components/VideoUpload";

const UploadPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Paper elevation={3} sx={{ borderRadius: 2 }}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            aria-label="upload tabs"
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab label="Image Upload" />
            <Tab label="Resume Upload" />
            <Tab label="Video Upload" />
          </Tabs>
        </Paper>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && <ImageUpload />}
          {tabIndex === 1 && <ResumeUpload />}
          {tabIndex === 2 && <VideoUpload />}
        </Box>
      </Box>
    </Box>
  );
};

export default UploadPage;
