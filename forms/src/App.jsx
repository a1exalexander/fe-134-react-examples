import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxGroup, setCheckboxGroup] = useState([]);
  const [radio, setRadio] = useState("value-1");
  const [selected, setSelected] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const passwordInputType = isPasswordVisible ? "text" : "password";

  const onTextChange = (event) => setText(event.target.value);

  const onPasswordChange = (event) => setPassword(event.target.value);

  const onPasswordToggle = () => setIsPasswordVisible(!isPasswordVisible);

  const onCheckboxChange = (event) => setCheckbox(event.target.checked);

  const onCheckboxGroupChange = (event) => {
    const { value } = event.target;
    const shallowCopy = [...checkboxGroup];
    const valueIndex = shallowCopy.findIndex((groupValue) => groupValue === value);
    if (valueIndex !== -1) {
      shallowCopy.splice(valueIndex, 1);
    } else {
      shallowCopy.push(value);
    }
    setCheckboxGroup(shallowCopy);
  };

  const onRadioChange = (event) => setRadio(event.target.value);

  const onSelect = (event) => setSelected(event.target.value);
  

  return (
    <div className="app">
      <form>
        <div className="field">
          <label htmlFor="text">Text</label>
          <input id="text" type="text" value={text} onChange={onTextChange} />
          <p>Output: {text}</p>
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={passwordInputType}
            value={password}
            onChange={onPasswordChange}
          />
          <button onClick={onPasswordToggle} type="button">
            toggle
          </button>
        </div>

        <div className="field">
          <label>Checkbox</label>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={onCheckboxChange}
          />
        </div>

        <div className="field">
          <label>Checkbox Group</label>
          <input
            type="checkbox"
            name="checkbox-group"
            value="value-1"
            checked={checkboxGroup.includes("value-1")}
            onChange={onCheckboxGroupChange}
          />
          <input
            type="checkbox"
            name="checkbox-group"
            value="value-2"
            checked={checkboxGroup.includes("value-2")}
            onChange={onCheckboxGroupChange}
          />
          <input
            type="checkbox"
            name="checkbox-group"
            value="value-3"
            checked={checkboxGroup.includes("value-3")}
            onChange={onCheckboxGroupChange}
          />
          <p>Output: [{checkboxGroup.join(', ')}]</p>
        </div>

        <div className="field">
          <label>Radio</label>
          <input
            type="radio"
            checked={radio === "value-1"}
            value="value-1"
            name="radio-group"
            onChange={onRadioChange}
          />
          <input
            type="radio"
            checked={radio === "value-2"}
            value="value-2"
            name="radio-group"
            onChange={onRadioChange}
          />
          <input
            type="radio"
            checked={radio === "value-3"}
            value="value-3"
            name="radio-group"
            onChange={onRadioChange}
          />
        </div>

        <div className="field">
          <label htmlFor="select">Select</label>
          <select value={selected} onChange={onSelect} id="select">
            <option disabled value="">Select...</option>
            <option value="value-1">Value 1</option>
            <option value="value-2">Value 2</option>
            <option value="value-3">Value 3</option>
          </select>
          <p>Output: {selected}</p>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
