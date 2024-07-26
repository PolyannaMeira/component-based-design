
import './attendanceList.css';
import Table from './Table.jsx';
import Button from './Button.jsx';

const AttendanceList = ({ attendanceList, onDeleteAttendance }) => {
  const headers = ['Number', 'Name', 'Can t come'];
  const data = attendanceList.map((name, index) => [
    index + 1,
    name,
    <Button
      key={index}
      onClick={() => onDeleteAttendance(index)}
      style={{ backgroundColor: '#e74c3c', padding: '5px 10px', fontSize: '0.9em' }}
    >
      Delete
    </Button>,
  ]);

  return (
    <div className="list-container">
      <h2>Confirmed</h2>
      {attendanceList.length > 0 ? (
        <Table headers={headers} data={data} />
      ) : (
        <p>No one has confirmed yet</p>
      )}
    </div>
  );
};

export default AttendanceList;
