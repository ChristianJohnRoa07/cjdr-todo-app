import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import TodoItem from "./TodoItem";
import DoneItem from "./DoneItem";

function TodoApp() {
  //getting prop from homepage
  const getProp = useLocation();
  const nav = useNavigate();
  const [error, SetErrorValue] = useState(false);

  //state
  const [state, setUserNameInput] = useState({
    userInputValue: "",
  });
  const [itemInput, setItemInput] = useState("");
  const [itemStatus, setItemStatus] = useState(false);
  const [listItems, setlistItems] = useState([]);

  const gotoHomepage = () => {
    //going back to home page
    nav(-1);
  };

  // //Database Functions

  // //Create
  const addItem = async (e) => {
    e.preventDefault();
    try {
      if (itemInput.length === 0) {
        SetErrorValue(true);
      } else {
        const res = await axios.post("http://localhost:5500/api/item/isDone", {
          item: itemInput,
          isDone: itemStatus,
        });

        console.log(res);

        setItemInput("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Read
  useEffect(() => {
    const getItemList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/items");
        const data = await res.data;

        setlistItems(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };

    getItemList();
  }, [listItems]);

  //Delete
  const deleteItem = async (deleteItemId) => {
    try {
      const res = await axios.delete(
        "http://localhost:5500/api/item/" + deleteItemId
      );
    } catch (err) {
      console.log(err);
    }
  };

  //Update status
  const toggleStatus = async (itemIndex) => {
    try {
      const updatedItemIndex = listItems.findIndex(
        (item) => item._id === itemIndex
      );

      console.log("Selected Todo index: " + updatedItemIndex);

      const res = await axios.put(
        "http://localhost:5500/api/item/" + itemIndex,
        {
          isDone: !itemStatus,
        }
      );

      console.log(res);
      console.log(itemIndex);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Title */}

      <nav class="flex items-center justify-between flex-wrap bg-color1  p-6">
        <button className="transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110"
          onClick={() => gotoHomepage()}
        >
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
              color="#ffffff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <span class="font-semibold text-xl tracking-tight">TodoApp</span>
          </div>
        </button>

        {/* User Name */}
        <div>
          <a class="inline-block text-lg px-4 py-2 leading-none text-white mt-4 lg:mt-0">
            Hello, {getProp.state.name}
          </a>
        </div>
      </nav>

      {/* Input field */}
      <div className="flex justify-center items-center pt-10">
        <div className="relative mt-0 rounded-sm shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            {error && itemInput.length <= 0 ? (
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
                color="#13424C"
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
            onClick={() => SetErrorValue(false)}
            onChange={(e) => {
              setItemInput(e.target.value);
            }}
            value={itemInput}
            id="userName"
            className=" w-96 h-9  rounded-full  pl-10 pr-24  bg-silver"
            placeholder="What do you want to do?"
          />
          <button
           
            onClick={(e) => addItem(e)}
            className="text-white 
            absolute 
            top-1
            right-1.5
            bottom-1
             
            w-20
            bg-color2           
            hover:bg-color1 
            duration-500      
            focus:outline-none
            focus:ring-1 
            focus:ring-color2
            focus:ring-offset-1
            font-bold 
            rounded-3xl 
            text-sm 
            px-3 
            "
          >
            Submit
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && itemInput.length <= 0 ? (
        // Show error message
        <div className="flex justify-center items-center">
          <span className="px-72 text-sm text-red">Please enter a task</span>
        </div>
      ) : (
        // Hide error Message
        ""
      )}

      {/* Main table */}

      <div className="py-8 flex justify-center items-center gap-5">
        <div className="">
          <div className=" border-2 border-color1">
            <table className="w-96 ">
              <thead className="text-white ">
                <tr className="">
                  <th className="p-3 bg-color3 text-xl text-center ">Tasks</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="w-96 pt-1 shadow-lg px-1 ">
            <div className=" scrollbar-thin scrollbar-thumb-color3 scrollbar-track-transparent  h-80">
              {/* Todo Table */}

              {listItems.length ? (
                listItems.map((item) =>
                  item.isDone === false ? (
                    <TodoItem
                      item={item}
                      deleteItem={deleteItem}
                      itemStatus={itemStatus}
                      setItemStatus={setItemStatus}
                      toggleStatus={toggleStatus}
                    />
                  ) : (
                    ""
                  )
                )
              ) : (
                <div className="flex justify-center items-center">
                  <span className="py-1 text-sm text-red">
                    Please enter a task
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Done Table */}
        <div>
          <div className="border-2 border-color1">
            <table className="w-72 ">
              <thead className="text-white  ">
                <tr>
                  <th className="p-3 bg-color3 text-xl">Done</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="w-72 pt-1 shadow-lg px-1">
            <div className="scrollbar-thin scrollbar-thumb-color3 scrollbar-track-transparent h-80">
              {listItems.length ? (
                listItems.map((item) =>
                  item.isDone === true ? (
                    <DoneItem item={item} deleteItem={deleteItem} />
                  ) : (
                    ""
                  )
                )
              ) : (
                <div className="flex justify-center items-center">
                  <span className="py-1  text-sm text-red">
                    Please enter a task
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
