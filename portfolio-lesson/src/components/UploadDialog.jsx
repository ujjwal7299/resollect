import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '500px',
    padding: theme.spacing(3),
    borderRadius: '12px',
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 0 16px 0',
  fontSize: '20px',
  fontWeight: 600,
  '& .MuiIconButton-root': {
    marginRight: '-12px',
  },
});

const StyledFormControl = styled(FormControl)({
  marginBottom: '20px',
  width: '100%',
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    transform: 'translate(14px, 12px) scale(1)',
    '&.Mui-focused, &.MuiFormLabel-filled': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
  '& .MuiSelect-select, & .MuiInputBase-input': {
    fontSize: '14px',
    padding: '12px 14px',
  },
});

const FileSelectButton = styled(Button)({
  width: '100%',
  justifyContent: 'flex-start',
  textTransform: 'none',
  border: '2px dashed #e0e0e0',
  borderRadius: '8px',
  padding: '12px 16px',
  color: '#666',
  backgroundColor: '#fff',
  fontSize: '14px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    border: '2px dashed #1976d2',
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: 'white',
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

function UploadDialog({ open, onClose }) {
  const [documentName, setDocumentName] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [remarks, setRemarks] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      documentName,
      documentType,
      remarks,
      selectedFile,
    });
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <StyledDialogTitle>
        Upload Document
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>

      <DialogContent sx={{ padding: '16px 0', overflow: 'visible' }}>
        <StyledFormControl>
          <InputLabel id="document-name-label">Document Name</InputLabel>
          <Select
            labelId="document-name-label"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            label="Document Name"
          >
            <MenuItem value="doc1">Document 1</MenuItem>
            <MenuItem value="doc2">Document 2</MenuItem>
            <MenuItem value="doc3">Document 3</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel id="document-type-label">Document Type</InputLabel>
          <Select
            labelId="document-type-label"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            label="Document Type"
          >
            <MenuItem value="type1">Type 1</MenuItem>
            <MenuItem value="type2">Type 2</MenuItem>
            <MenuItem value="type3">Type 3</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl>
          <TextField
            label="Document Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Enter remarks here"
            multiline
            rows={3}
          />
        </StyledFormControl>

        <Box sx={{ mb: 2 }}>
          <input
            accept="*/*"
            id="file-input"
            type="file"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-input">
            <FileSelectButton component="span">
              {selectedFile ? selectedFile.name : 'Click to upload a file'}
            </FileSelectButton>
          </label>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: '16px 0 0 0' }}>
        <SubmitButton onClick={handleSubmit} variant="contained">
          Submit
        </SubmitButton>
      </DialogActions>
    </StyledDialog>
  );
}

export default UploadDialog; 