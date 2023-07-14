const useForm = ({
  inputsIsValid: {
    enteredFirstNameIsValid,
    enteredLastNameIsValid,
    enteredEmailIsValid,
  },
}) => {
  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  return { formIsValid };
};

export default useForm;
