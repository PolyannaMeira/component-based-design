import { useState } from 'react';
import "./attendanceForm.css";
import Button from './Button.jsx';

const AttendanceForm = ({ onAddAttendance }) => {
  const [name, setName] = useState('');

  const handleAddAttendance = () => {
    if (name.trim() !== '') {
      onAddAttendance(name);
      setName('');
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Write your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleAddAttendance}>Confirm</Button>
    </div>
  );
};

export default AttendanceForm;
