import Hero from './components/Hero';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Header from './components/Header';
import Features from './containers/Features';
import ContactUs from './containers/ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Hero />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/post/:postId' component={Posts} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/features' component={Features} />
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
