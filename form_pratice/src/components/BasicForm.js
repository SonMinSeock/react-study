import useForm from "../hooks/use-form";
import useInput from "../hooks/use-input";
import InputFiled from "./UI/InputFiled";

const BasicForm = () => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    valueChangeHnadler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    valueChangeHnadler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHnadler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const { formIsValid: formValid } = useForm({
    inputsIsValid: {
      enteredFirstNameIsValid,
      enteredLastNameIsValid,
      enteredEmailIsValid,
    },
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredEmailIsValid
    )
      return;

    console.log("FirstName : ", enteredFirstName);
    console.log("LastName : ", enteredLastName);
    console.log("E-Mail : ", enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <InputFiled
          label="First Name"
          name="firstName"
          id="firstName"
          inputClasses={firstNameInputClasses}
          value={enteredFirstName}
          handleChange={firstNameChangeHandler}
          handleBlur={firstNameBlurHandler}
          errorMessage="FirstName must not be empty."
          hasError={firstNameInputHasError}
        />
        <InputFiled
          label="Last Name"
          name="lastName"
          id="lastName"
          inputClasses={lastNameInputClasses}
          value={enteredLastName}
          handleChange={lastNameChangeHandler}
          handleBlur={lastNameBlurHandler}
          errorMessage="LastName must not be empty."
          hasError={lastNameInputHasError}
        />
        <InputFiled
          label="E-Mail"
          name="email"
          id="email"
          inputClasses={emailInputClasses}
          value={enteredEmail}
          handleChange={emailChangeHandler}
          handleBlur={emailBlurHandler}
          errorMessage="It is not an email format."
          hasError={emailInputHasError}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
