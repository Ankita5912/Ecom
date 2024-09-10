import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";

function SignUp() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
  });
  const [isFormValidate, setIsFormValidate] = useState(false);
  const [error, setError] = useState({}); // error is assigned an empty object because it get the value after the validate function is performed

  const Validate = () => {
    let errorText = {};
    let isValid = true;

    if (formValues.firstName.trim() === "") {
      errorText.firstName = "First Name is required";
      isValid = false;
    }

    if (formValues.LastName.trim() === "") {
      errorText.LastName = "Last name is required";
      isValid = false;
    }

    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formValues.email.trim() === "") {
      errorText.email = "Email is required";
      isValid = false;
    } else if (!emailFormat.test(formValues.email)) {
      errorText.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formValues.password.trim() === "") {
      errorText.password = "Password is Required";
      isValid = false;
    } else if (formValues.password.length < 8) {
      errorText.password = "Password must be atleast 8 characters long";
      isValid = false;
    }

    setIsFormValidate(isValid);
    setError(errorText);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    Validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Validate();
    if (isFormValidate) {
      // Submit the form
      console.log("Form submitted", formValues);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  //setPasswordVisible is a function or variable used to change the passwordVisible variable

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className=" bg-slate-100  min-h-screen place-content-center flex justify-center items-center">
        <div className="box grid  bg-white border border-white h-50 w-96 border-1 rounded m-2 p-8 py-2">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-black my-4 text-center">
              Sign Up
            </h1>

            <div className=" grid align-middle">
              <label className="mb-0  ml-2">First Name</label>
              <input
                type="text"
                required
                name="firstName"
                value={formValues.firstName}
                placeholder="First Name"
                className="mt-0 border border-1 border-black w-[300px] h-8 rounded m-2"
                onChange={handleOnchange}
              ></input>
              {error.firstName}
            </div>

            <div className=" grid align-middle">
              <label className="mb-0  ml-2">Last Name</label>
              <input
                type="text"
                required
                name="LastName"
                value={formValues.LastName}
                placeholder="Last Name"
                className="mt-0 border border-1 border-black w-[300px] h-8 rounded m-2"
                onChange={handleOnchange}
              ></input>
              {error.LastName}
            </div>

            <div className="mt-0 mb-1">
              <label className="mb-0 ml-2 align-middle">Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                required
                className="w-[300px] justify-self-center  mt-0 border border-black h-8 border-0.5 rounded m-2 align-middle"
                placeholder="Email"
                onChange={handleOnchange}
              ></input>
              {error.email}
            </div>

            <div className="grid align-middle">
              <label className="mb-0 ml-2">Password</label>
              <div className="flex border border-1 border-black w-[300px] h-8 rounded m-2 mt-0 align-middle mb-2  p-1 justify-self-center">
                <input
                  type={passwordVisible ? "text" : "password"}
                  required
                  className="w-[270px] mt-0  mb-0 align-middle justify-self-center"
                  placeholder="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleOnchange}
                ></input>
                <button onClick={togglePasswordVisible}>
                  {passwordVisible ? <RxEyeOpen /> : <FaRegEyeSlash />}
                </button>
              </div>
              {error.password}
            </div>

            <button
              className="w-[300px] border bg-slate-600 text-slate-100 h-8 mt-8 mx-2 me-2 justify-self-center rounded m-2"
              type="submit"
              disabled={!isFormValidate}
            >
              Submit
            </button>

            <div className="text-center mb-3">
              Already have an account? <Link to="/Login">Login</Link>
            </div>

            <hr></hr>

            <button className=" w-[300px] justify-self-center flex items-center my-4 border bg-slate-600 text-slate-100 h-8 justify-center rounded m-2 ">
              <img
                src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png"
                className="w-[15px] h-[15px] mt-1 mx-1"
              ></img>
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
