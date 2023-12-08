import React, { useState } from 'react';
// import './YourComponent.css'; // Import your dark mode CSS file

const CreateHighRune = ({ onSubmit, onEdit, details }) => {
  const [formData, setFormData] = useState({
    rune: '',
    zone: '',
    character: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ rune: '', zone: '', character: '' });
  };

  return (
    <div className="dark-mode-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose Rune:</label>
          <select name="rune" value={formData.rune} onChange={handleChange}>
            {['vex', 'ohm', 'Lo', 'sur', 'ber', 'jah', 'cham', 'zod'].map((rune) => (
              <option key={rune} value={rune}>
                {rune}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Zone:</label>
          <input
            type="text"
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            placeholder="Enter zone"
          />
        </div>
        <div>
          <label>Character:</label>
          <input
            type="text"
            name="character"
            value={formData.character}
            onChange={handleChange}
            placeholder="Enter character"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onEdit}>
            Edit
          </button>
          <button type="button" onClick={details}>
            Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateHighRune;
