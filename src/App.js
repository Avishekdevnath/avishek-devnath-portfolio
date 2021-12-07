import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog/Blog';
import About from './Pages/About/About/About';
import ProjectDetails from './Shared/Project/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projectdetails/:projectID">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
