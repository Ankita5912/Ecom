import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router-dom";

function Email() {
  return (
    <>
      <div className="mt-0 mb-1">
        <label className="mb-0 ml-2 align-middle">Email</label>
        <input
          type="email"
          required
          className="w-[300px] justify-self-center  mt-0 border border-black h-8 border-0.5 rounded m-2 align-middle"
          placeholder="Email"
        ></input>
      </div>
    </>
  );
}

export { Email };

function Password() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  //setPasswordVisible is a function or variable used to change the passwordVisible variable

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="grid mb-1">
        <label className="mb-0 ml-2 align-middle ">Password</label>
        <div className="flex border border-1 border-black w-[300px] h-8 rounded m-2 mt-0 align-middle mb-2  p-1 justify-self-center">
          <input
            type={passwordVisible ? "text" : "password"}
            required
            className="w-[270px] mt-0  mb-0 align-middle justify-self-center"
            placeholder="password"
          />
          <button onClick={togglePasswordVisible}>
            {passwordVisible ? <RxEyeOpen /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
    </>
  );
}

export { Password };

function Login() {
  const [formValues, setFormValues] = useState({
    Email: "",
    Password: "",
  });

  const [isFormValidate, setIsFormValidate] = useState(false);
  const [errorObject, setErrorObject] = useState({});

  const CheckValidation = () => {
    let isValid = true;
    let errorText = {};

    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formValues.Email.trim() === "") {
      errorText.Email = "Email is required";
      isValid = false;
    } else if (!emailFormat.test(formValues.Email)) {
      errorText.Email = "Enter a valid email";
      isValid = false;
    }

    if (formValues.Password.trim() === "") {
      errorText.Password = "Password is reqired";
      isValid = false;
    } else if (formValues.Password.length < 8) {
      errorText.Password = "password should be atleast 8 characters long";
      isValid = false;
    }

    setIsFormValidate(isValid); //it is a function that set the value of isFormValid to isValid basically passes the value
    setErrorObject(errorText);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    CheckValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CheckValidation();
    if (isFormValidate) {
      console.log("Form Submitted", formValues);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  //setPasswordVisible is a function or variable used to change the passwordVisible variable

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="al bg-slate-100  min-h-screen place-content-center flex justify-center items-center">
      <div className="grid  bg-white border border-white h-50 w-96 border-1 rounded m-2 p-8 py-2">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-black my-4 text-center">
            Login
          </h1>

          <div className="mt-0 mb-1">
            <label className="mb-0 ml-2 align-middle">Email</label>
            <input
              type="email"
              required
              className="w-[300px] justify-self-center  mt-0 border border-black h-8 border-0.5 rounded m-2 align-middle"
              placeholder="Email"
              name="Email"
              value={formValues.Email}
              onChange={handleOnchange}
            ></input>
            {errorObject.Email}
          </div>

          <div className="grid mb-1">
            <label className="mb-0 ml-2 align-middle ">Password</label>
            <div className="flex border border-1 border-black w-[300px] h-8 rounded m-2 mt-0 align-middle mb-2  p-1 justify-self-center">
              <input
                type={passwordVisible ? "text" : "password"}
                required
                className="w-[270px] mt-0  mb-0 align-middle justify-self-center"
                placeholder="password"
                name="Password"
                value={formValues.Password}
                onChange={handleOnchange}
              />
              <button onClick={togglePasswordVisible}>
                {passwordVisible ? <RxEyeOpen /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errorObject.Password}
          </div>

          <div className="flex mb-1 justify-center ">
            <div className="flex flex-nowrap">
              <div className="mr-7">
                <input type="checkbox" className="mr-1"></input>
                <label>Remember me</label>
              </div>
              <div className="ml-7">
                <p>Forgot Password</p>
              </div>
            </div>
          </div>

          <button
            className="w-[300px] border bg-slate-600 text-slate-100 h-8 mt-8 mx-2 me-2 justify-self-center rounded m-2"
            type="submit"
            disabled={!isFormValidate}
          >
            Submit
          </button>

          <p className="flex justify-center my-0 gap-1">
            Not registered yet ? <Link to="/SignUp">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
