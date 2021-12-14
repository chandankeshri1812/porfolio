import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Footer from "./component/footer/Footer"
import Main from './component/main/Main';
import About from "./component/About/About"
import Contact from './component/contact/Contact';
import Project from './component/project/Project';
import Skills from "./component/Skills/Skills"
import Signin from './component/Signin/Signin';
import Login from './component/Login/login';



const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        {/* <Main /> */}
        <Switch>
          <Route exact path="/"> <Main /> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/skills"> <Skills /> </Route>
          <Route exact path="/project"> <Project /> </Route>
          <Route exact path="/contact"> <Contact /> </Route>
          <Route exact path="/signin"> <Signin /> </Route>
          <Route exact path="/login"> <Login /> </Route>

        </Switch>


        <Footer />
      </Router>

    </>
  )
}

export default App;
