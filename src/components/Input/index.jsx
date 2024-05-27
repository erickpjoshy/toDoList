import './input.css';

const Input = props => {
  return (
    <input
      type={props.type}
      key={props.key}
      onKeyDown={props.onKeyDown}
      checked={props.checked}
      onChange={props.onChange}
      value={props.value}
      className={`input ${props.className}`}
    />
  );
};

export default Input;
