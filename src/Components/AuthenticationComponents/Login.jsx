import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, adduseremail, adduserId } from "../../store/userSlice";

const Login = () => {

  const baseURL = import.meta.env.VITE_API_BASE_URL
  const [login, setlogin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()





  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, " :: " + value);
    setlogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleToggle = () => {
    setToggle(!toggle);
    console.log("Toggle state:", !toggle);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams({ email: login.email, password: login.password }).toString(); // Convert user object to query string
      console.log("queryParams", queryParams);
      const response = await fetch(`${baseURL}/login?${queryParams}`, { method: "GET" });
      // const response = await fetch(`http://localhost:3000/login?${queryParams}`, { method: "GET" });
      // const response = await fetch(`https://suprithstudiobe.onrender.com/login?${queryParams}`, { method: "GET" });
      console.log("response", response);
      const data = await response.json();
      console.log("login response" + JSON.stringify(response));
      console.log("data", data);
      if (data.status == 200) {
        // console.log("login successfull :", data)
        alert("Login Successfull " + data.data.name + " " + data.data._id);
        dispatch(adduser(data.data.name))
        dispatch(adduserId(data.data._id))
        dispatch(adduseremail(data.data.email))
        setlogin({})
        navigate("/homepage");
      } else {
        alert(JSON.stringify(data.error));
      }
    } catch (error) {
      console.log("error", error);
      alert("server not   running" + error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const queryParams = {
        name: login.name,
        email: login.email,
        password: login.password,
        confirmPassword: login.confirmPassword,
        phone: login.phone,
      };
      const response = await fetch(`${baseURL}/signup`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(queryParams) });
      // const response = await fetch("https://suprithstudiobe.onrender.com/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(queryParams) });
      const data = await response.json();

      console.log("signup response" + JSON.stringify(response))
      if (data.status == 200) {
        // console.log("signup successfull :", data)

        alert("Sign Up Successfull ", +data.data.name + " " + data.data._id);
        dispatch(adduser(data.data.name))
        dispatch(adduserId(data.data._id))
        dispatch(adduseremail(data.data.email))

        setlogin({})

        navigate("/homepage");
      } else {
        alert(JSON.stringify(data.error));
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="w-96">
      <div className="px-5 border-2 rounded-lg">
        <div className="text-center font-bold text-3xl font-serif py-4">
          {toggle ? "Sign Up" : "Login"}
        </div>

        {toggle && (
          <>
            <label
              id="name"
              className="block text-gray-700 text-sm font-semibold"
            >
              Name :{login.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={login.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full mb-4"
            />
          </>
        )}

        <label id="email" className="block text-blue-700 text-sm font-semibold">
          Email :{login.email} <i className="text-green-500">suprithcd@gmail.com</i> 
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={login.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />

        <label
          id="password"
          className="block text-blue-700 text-sm font-semibold"
        >
          Password :{login.password} <i className="text-green-500">1234</i> 
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />

        {toggle && (
          <>
            <label
              id="confirmpassword"
              className="block text-gray-700 text-sm font-semibold"
            >
              Confirm Password :{login.confirmPassword}
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="confirmPassword"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full mb-4"
            />
          </>
        )}

        {toggle && (
          <>
            <label
              id="phone"
              className="block text-gray-700 text-sm font-semibold"
            >
              Phone :{login.phone}
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={login.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded w-full mb-4"
            />
          </>
        )}

        <div className="flex justify-center  text-center text-white p-2 rounded ">
          {toggle ? (
            <div
              className="w-20 bg-blue-500 hover:bg-blue-950 px-2 py-2 rounded cursor-pointer"
              onClick={handleSignUp}
            >
              Sign Up
            </div>
          ) : (
            <div
              className="w-20 bg-blue-500 hover:bg-blue-950 px-2 py-2 rounded cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-1">
        <div
          onClick={handleToggle}
          className="text-blue-500 cursor-pointer hover:text-cyan-700"
        >
          {toggle ? "Already have an account Login ->" : "Create an account"}
        </div>
      </div>
      <div className="text-center mt-4">
        <div className="text-sm text-gray-600">
          Forgot your password?{" "}
          <a href="/reset-password" className="text-blue-500 hover:underline">
            Reset Password
          </a>
        </div>
      </div>

      <div className="text-center mb-16">
        <p className="text-sm text-gray-600">
          By logging in, you agree to our{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
