
const Select = ({label, options, name, handleChange}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <select defaultValue={""} name={name} onChange={handleChange}>
        <option value="">Seçiniz</option>
        {options.map((opt) => (
            <option value={opt} key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
