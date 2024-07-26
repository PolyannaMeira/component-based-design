import { useState } from 'react';
import './App.css';
import AttendanceForm from './components/AttendanceForm.jsx';
import AttendanceList from './components/AttendanceList.jsx';


function App() {
  const [attendanceList, setAttendanceList] = useState([]);

  const handleAddAttendance = (name) => {
    setAttendanceList((prevList) => [...prevList, name]);
  };

  const handleDeleteAttendance = (index) => {
    setAttendanceList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div>
      
      <h1> Let's go? </h1>
      <div className="content-container">
        <AttendanceForm onAddAttendance={handleAddAttendance} />
        <AttendanceList
          attendanceList={attendanceList}
          onDeleteAttendance={handleDeleteAttendance}
        />
      </div>
    </div>
  );
}

export default App;
