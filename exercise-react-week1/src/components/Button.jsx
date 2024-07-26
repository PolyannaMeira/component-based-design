

import './button.css';

const Button = ({ children, onClick, style }) => {
  return (
    <button className="Button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
