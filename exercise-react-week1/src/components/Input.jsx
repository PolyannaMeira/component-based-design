
import './input.css';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="InputField"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
