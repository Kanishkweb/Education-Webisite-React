import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const SignUp = () => {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://green-butcher-zremp.pwskills.app:8000/api/auth/createuser',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          })
        }
      )

      if (!response.ok) {
        throw new Error("Failed to Fetch")
      }
      const json = await response.json();
      console.log(json)

      localStorage.setItem('token', json.authToken);
      history.push('/')
    } catch (error) {
      alert("Invalid Credentials try to SignUp with other")
    }
  }
  // onChange Function-------------------
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col justify-center items-center w-screen md:flex-row shadow rounded-xl max-w-7xl md:w-[50%] md:px-6 lg:px-12 py-6" style={{ maxWidth: '60%', boxShadow: '0 4px 12px rgba(255, 0, 150, 0.3)' }}>
        <div className="w-full md:w-1/2">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center md:mt-0">
            <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">Sign Up for an Account</h1>
          </div>

          {/* SignUp Form  */}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
              <div className="">
                <div className="m-1 text-lg text-gray-500 font-semibold">Full Name</div>
                <input
                  id='name'
                  name='name'
                  required
                  onChange={onChange}
                  type="text"
                  className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                />
              </div>
              <div className="">
                <div className="m-1 text-lg text-gray-500 font-semibold">Email ID</div>
                <input
                  id='email'
                  name='email'
                  minLength={8} required
                  onChange={onChange}
                  type="email"
                  className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                />
              </div>
              <div className="">
                <div className="m-1 text-lg text-gray-500 font-semibold">Password</div>
                <input
                  id='password'
                  name='password'
                  minLength={5} required
                  onChange={onChange}
                  type="password"
                  className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                />
              </div>
              <div className="">
                <div className="m-1 text-lg text-gray-500 font-semibold">Confirm Password</div>
                <input
                  id='cpassword'
                  name='cpassword'
                  minLength={5} required
                  onChange={onChange}
                  type="password"
                  className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <button type='submit' className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-pink-600 hover:bg-pink-500 font-medium m-2 mb-6">
                Sign Up
              </button>
            </div>
          </form>




        </div>
        <div className="h-full w-full md:w-1/2 items-center flex justify-center">
          <div className="text-stone-700 text-base font-semibold text-center my-10 space-y-2 m-2 cursor-pointer">
            <div className="flex justify-between border-2 border-stone-700 px-2 py-2">
              <ion-icon name="logo-google" style={{ paddingTop: '5px' }} className="text-sm md:text-xl text-red-500 "></ion-icon>
              <div className="flex items-center">
                <div className="m-1 text-sm">Continue with Google</div>
              </div>
            </div>
            <div className="flex justify-between border-2 border-stone-700 px-1 py-2">
              <ion-icon name="logo-facebook" style={{ paddingTop: '5px' }} className="text-sm md:text-xl text-blue-500"></ion-icon>
              <div className="flex items-center">
                <div className="m-1 text-sm">Continue with Facebook</div>
              </div>
            </div>
            <div className="flex justify-between border-2 border-stone-700 px-2 py-2">
              <ion-icon name="logo-apple" style={{ paddingTop: '5px' }} className="text-black"></ion-icon>
              <div className="flex items-center">
                <div className="m-1 text-sm">Continue with Apple</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
