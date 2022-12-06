import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  //Navigating through pages
  const nav = useNavigate();

  const [error, SetErrorValue] = useState(false);

  //state
  const [state, setUserNameInput] = useState({
    userInputValue: "",
  });

  //Setting state
  const { userInputValue } = state;

  //Getting Input
  const userInput = (e) => {
    setUserNameInput({ userInputValue: e.target.value });
  };

  const gotoTodoApp = (name) => {
    if (name.length === 0) {
      SetErrorValue(true);
      console.log("Error: " + error);
    } else {
      console.log("" + name);

      //opening new page then sending data at the same time
      nav("./todoapp", { state: { name } });
    }
  };

  return (
    <div>
      {/* Title */}
      <div className="pt-48 flex justify-center items-center">
        <div className=" px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-16 h-16"
            color="#ffffff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        </div>
        <div className=" text-center">
          <h1 className="text-5xl font-bold font-sans text-white">
            Welcome to Todo-App
          </h1>
        </div>
      </div>

      {/* Input field */}
      <div className="pt-10 pb-1  flex justify-center items-center">
        <h1 className="text-xl font-normal font-sans text-white">
          Please enter your name
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative mt-1 rounded-sm shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            {error && userInputValue.length <= 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                color="#ED4337"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            )}
          </div>
          <input
            type="text"
            name="userName"
            onChange={userInput}
            value={userInputValue}
            id="userName"
            className="w-96 h-11 bg-silver block rounded-md border-gray-300 pl-10 pr-28 focus:border-indigo-500 focus:ring-indigo-500 md:text-md"
            placeholder="Name"
          />
          <button
            onClick={() => gotoTodoApp(userInputValue)}
            className="text-white 
            absolute 
            right-3.5 
            bottom-2 
            
            bg-color2           
            hover:bg-color1 
            duration-500 
            focus:ring-4 
            focus:outline-none 
            focus:ring-midnight-300 
            font-medium 
            rounded-lg 
            text-sm 
            px-4 
            py-1 
            dark:bg-blue-600 
            dark:hover:bg-blue-700 
            dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
      {/* Error Message */}
      {error && userInputValue.length <= 0 ? (
        // Show error message
        <div className="flex justify-center items-center">
          <span className="py-1 px-72 text-sm text-red">
            Please enter any name
          </span>
        </div>
      ) : (
        // Hide error Message
        ""
      )}

      <div className="pt-36  flex justify-center items-center">
        <h1 className="text-sm font-normal font-sans text-white">
          A React.js Personal project
        </h1>
      </div>
      <div className="  flex justify-center items-center">
        <h1 className="text-sm font-normal font-sans text-white">
          © Developed and Designed by
        </h1>
      </div>
      <div className="  flex justify-center items-center">
        <h1 className="text-sm font-normal font-sans text-white">
          Christian John D. Roa
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
