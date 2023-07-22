import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col justify-center items-center w-screen md:flex-row shadow rounded-xl max-w-7xl md:w-[50%] md:px-6 lg:px-12 py-6" style={{ maxWidth: '60%', boxShadow: '0 4px 12px rgba(255, 0, 150, 0.3)' }}>
        <div className="w-full md:w-1/2">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center md:mt-0">
            <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">Login to your account</h1>
          </div>
          <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
            <div className="">
              <div className="m-1 text-lg text-gray-500 font-semibold">Username</div>
              <input
                type="text"
                className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
              />
            </div>
            <div className="">
              <div className="m-1 text-lg text-gray-500 font-semibold">Password</div>
              <input
                type="password"
                className="border-b border-gray-500 focus:outline-none text-gray-500 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
              />
            </div>
          </div>
          <div className="text-center mt-7">
            <button className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-stone-600 hover:bg-stone-500 font-medium m-2 mb-6">
              Sign In
            </button>
          </div>
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

export default Login;
