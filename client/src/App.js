import React from "react";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Results from "./pages/Results/Results";
import Comparison from './pages/Comparison/Comparison';
import Footer from "./components/Footer/Footer";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  //var to conditionally render page
let currentpage = 'home';

if (currentpage === 'home') {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ApolloProvider>
  )
} else if (currentpage === 'login') {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <Login />
          <Footer />
        </div>
      </ApolloProvider>
    )
  } else if (currentpage === 'signup') {
      return (
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar />
            <Signup />
            <Footer />
          </div>
        </ApolloProvider>
      )
    } else if (currentpage === 'results') {
      return (
        <ApolloProvider client={client}>
          <div className="App">
              <Navbar />
              <Results />
              <Footer />
          </div>
        </ApolloProvider>
      )
    } else if (currentpage === 'comparison') {
      return (
        <ApolloProvider client={client}>
          <div className="App">
              <Navbar />
              <Comparison />
              <Footer />
          </div>
        </ApolloProvider>
      )
    }; 
};

export default App;
