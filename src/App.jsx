import Input from './components/Input';
import Button from './components/Button/Button';
import { useState } from 'react';
import moment from 'moment';
import './App.css';
function App() {
  const [input, setInput] = useState('');
  const [checkvalue, setCheckValue] = useState('');
  const [value, setValue] = useState([]);
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  };
  const onClick = () => {
    setValue([
      ...value,
      {
        content: input,
        isChecked: false,
        startingDate: startingDate,
        endingDate: endingDate,
      },
    ]);
    setInput('');
    setStartingDate('');
    setEndingDate('');
  };

  const onKeyDown = e => {
    // console.log(e);
    if (e.key == 'Enter') {
      setValue([...value, { content: input, isChecked: false }]);
      setInput('');
    }
  };
  const checkBtn = (e, i) => {
    const newToDo = [...value];
    newToDo[i].isChecked = e.target.checked;
    setCheckValue(e.target.checked);
    console.log(checkvalue);
    setValue(newToDo);
  };

  const onDelete = () => {
    const removedItems = value.filter(item => {
      return !item.isChecked;
    });
    setValue(removedItems);
  };

  const startigDateFun = e => {
    // console.log(e.target.value);
    setStartingDate(e.target.value);
  };

  const endingDateFun = e => {
    // console.log(e.target.value);
    setEndingDate(e.target.value);
  };

  // console.log(value);
  return (
    <div className="d-flex">
      <div className="border">
        <h1>TO DO LIST</h1>
        <div className="d-flex">
          <Input onChange={onChange} onKeyDown={onKeyDown} value={input} />
        </div>
        <div className="d-flex date">
          <div className="d-flex date-head">
            <h3>Starting Date</h3>
            <Input
              onChange={startigDateFun}
              // onKeyDown={onKeyDown}
              value={startingDate}
              type="date"
            />
          </div>
          <div className="d-flex date-head">
            <h3>Ending Date</h3>
            <Input
              onChange={endingDateFun}
              // onKeyDown={onKeyDown}
              value={endingDate}
              type="date"
            />
          </div>
        </div>
        <div className="d-flex">
          <Button onClick={onClick} text="ADD" />
          <Button onClick={onDelete} text="Delete" />
        </div>
        {value.map((item, i) => {
          return (
            <div key={i} className="d-flex">
              <div className="label d-flex">
                <Input
                  onChange={e => {
                    checkBtn(e, i);
                  }}
                  className="checkbox"
                  type="checkbox"
                  checked={item.isChecked}
                />
                <h1 className={item.isChecked ? 'checked' : ''}>
                  {item.content}
                </h1>
                <h1 className={item.isChecked ? 'checked' : ''}>
                  {moment(item.startingDate).format('DD MMM YYYY')}
                </h1>
                <h1 className={item.isChecked ? 'checked' : ''}>
                  {moment(item.endingDate).format('DD MMM YYYY')}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
