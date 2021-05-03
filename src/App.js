import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import SeeProjects from './Components/Categories/SeeProjects/SeeProjects';
import About from './Pages/About/About';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import BlogDetails from './Components/Blogs/BlogsDetails/BlogDetails';
import PortFolioDetails from './Pages/Portfolio/PortFolioDetails/PortFolioDetails';
function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/portfolio/details/:postId' component={PortFolioDetails}/>
              <Route path='/portfolio/:id' component={SeeProjects} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/blogs/:id' component={BlogDetails}/>
              <Route path='/blogs' component={BlogsPage}/>
              <Route exact path='/contact' component={Contact}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
