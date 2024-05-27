import './Button.css';
import Input from '../Input';

const Button = props => {
  //   return <button className="btn">{props.text}</button>;
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children ? props.children : props.text}
    </button>
  );
};

export default Button;
