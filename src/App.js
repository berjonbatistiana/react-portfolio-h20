import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavBar, Portfolio} from "./pages/common/components"
import './pages/common/components/styles/styles.css';
import {About} from "./pages/common/components/About";
import {Contacts} from "./pages/common/components/Contacts";


function App() {
  
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contacts" component={Contacts}/>
      <footer className="footer">
        <p>&copy; Copyright</p>
      </footer>
    </Router>
  );
}

export default App;
