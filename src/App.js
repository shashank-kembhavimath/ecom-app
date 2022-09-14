import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <h1> e-Com Project </h1> */}
        <br /> <br />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <Protected Cmp={AddProduct} />
          {/* <AddProduct /> */}
        </Route>
        <Route path="/update">
          <Protected Cmp={UpdateProduct} />
          {/* <UpdateProduct /> */}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
