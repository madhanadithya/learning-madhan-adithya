import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  IconButton,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  CircularProgress,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    let timer;
    if (alert.open) {
      timer = setTimeout(() => {
        setAlert(prevAlert => ({ ...prevAlert, open: false }));
      }, 6000); 
    }
    return () => clearTimeout(timer);
  }, [alert.open]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(prevImages => [...prevImages, ...files]);
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prevUrls => [...prevUrls, ...newPreviewUrls]);
    setAlert({
      open: true,
      message: 'Images selected!',
      severity: 'info',
    });
  };

  const handleRemoveImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    setPreviewUrls(prevUrls => prevUrls.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    images.forEach(image => {
      formData.append('images', image);
    });
    try {
      await axios.post('/profile/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setAlert({
        open: true,
        message: 'Images uploaded successfully!',
        severity: 'success',
      });
    } catch (error) {
      setAlert({
        open: true,
        message: 'Error uploading images.',
        severity: 'error',
      });
    }
    setLoading(false);
  };

  const handleImageClick = (url) => {
    setCurrentImage(url);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <Typography variant="h6">Upload Images</Typography>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.gif"
            onChange={handleChange}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button variant="contained" component="span" startIcon={<UploadIcon />}>
              Select Files
            </Button>
          </label>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Upload Images'}
          </Button>
        </form>
        <Box mt={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {previewUrls.map((url, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <img
                src={url}
                alt={`Preview ${index}`}
                style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 4, cursor: 'pointer' }}
                onClick={() => handleImageClick(url)}
              />
              <IconButton
                size="small"
                sx={{ position: 'absolute', top: 0, right: 0 }}
                onClick={() => handleRemoveImage(index)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>

        {alert.open && (
          <Box
            sx={{
              position: 'fixed',
              top: 16,
              right: 16,
              zIndex: 1200, 
            }}
          >
            <Alert
              severity={alert.severity}
              onClose={() => setAlert(prevAlert => ({ ...prevAlert, open: false }))}
            >
              {alert.message}
            </Alert>
          </Box>
        )}

        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Image Preview</DialogTitle>
          <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={currentImage}
                alt="Current Preview"
                style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                }}
                href={currentImage}
                download
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default ImageUpload;
