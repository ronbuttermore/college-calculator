import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import Data from "./components/Data/data";
import SavedSearch from "./components/SavedSearch/SavedSearch";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Welcome />
          <Signup/>
          <Login/>
          <Form/>
          <Data/>
          <SavedSearch/>
          <Footer/>
      </div>
  );
}

export default App;
