const InputFiled = ({
  label,
  type = "text",
  id,
  name,
  handleChange,
  handleBlur,
  errorMessage,
  hasError,
  inputClasses,
  value,
}) => {
  return (
    <div className={inputClasses}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {hasError ? <p className="error-text">{errorMessage}</p> : ""}
    </div>
  );
};

export default InputFiled;
