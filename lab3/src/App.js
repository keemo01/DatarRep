import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Read from "./components/read"; // Add 'read' component
import Create from "./components/create"; // Add 'create' component


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/read" component={Read} />
          <Route path="/create" component={Create} />
          <Route exact path="/" component={Content} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
