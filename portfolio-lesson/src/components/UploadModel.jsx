import React from 'react';
import './UploadModal.css'; // Ensure you have this CSS file for modal styling.

function UploadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Upload Document</h3>

        <label>Document Name</label>
        <select className="form-control">
          <option>Select</option>
          <option>Loan Agreement</option>
          <option>Identity Proof</option>
        </select>

        <label>Document Type</label>
        <select className="form-control">
          <option>Select</option>
          <option>PDF</option>
          <option>Image</option>
        </select>

        <label>Document Remarks</label>
        <input type="text" className="form-control" placeholder="Type" />

        <label>Select File</label>
        <input type="file" className="form-control" />

        <button className="btn btn-primary mt-3">Submit</button>
      </div>
    </div>
  );
}

export default UploadModal;
