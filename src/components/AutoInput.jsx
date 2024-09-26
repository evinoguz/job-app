import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store.jobReducer);
  const array = jobs.map((job) => job[name]);
  const filtredSet = new Set(array);
  const options = Array.from(filtredSet);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={name} required />
      <datalist key={name}>
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
