import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/welcome";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Form from "./components/Form/form";
import Data from "./components/Data/data";
import SavedSearch from "./components/SavedSearch/SavedSearch";
import Footer from "./components/Footer/footer";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Welcome/>
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
