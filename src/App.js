import React from "react";
import { BrowserRouter as Router,  useRoutes } from "react-router-dom";


//components 
import HomePage from "./components/HomePage";
import TodoApp from "./components/TodoApp";


import "./styles/App.css";

const AppWrapper = () =>{
  let routes = useRoutes([
    { path: "/", element: <HomePage/> },
    { path: "/todoapp", element: <TodoApp /> },
    // ...
  ]);
  return routes;
}

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-color1 via-color2 to-color3 ">
      <Router>
        <AppWrapper/>
      </Router>
    </div>
  );
}

export default App;
