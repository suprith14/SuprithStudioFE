import React from "react";

export default function Popup({ isOpen, onClose, onSave, rowData, setRowData }) {
  if (!isOpen || !rowData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRowData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Edit Job Application</h2>

        <div className="space-y-3">
          <input
            name="jobTitle"
            value={rowData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-2 border rounded"
          />
          <input
            name="company"
            value={rowData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full p-2 border rounded"
          />
          <input
            name="dateApplied"
            value={rowData.dateApplied}
            onChange={handleChange}
            placeholder="Date Applied"
            className="w-full p-2 border rounded"
          />
          <input
            name="appliedVia"
            value={rowData.appliedVia}
            onChange={handleChange}
            placeholder="Applied Via"
            className="w-full p-2 border rounded"
          />
          <input
            name="status"
            value={rowData.status}
            onChange={handleChange}
            placeholder="Status"
            className="w-full p-2 border rounded"
          />
          <input
            name="link"
            value={rowData.link}
            onChange={handleChange}
            placeholder="Link"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
