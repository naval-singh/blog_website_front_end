import Home from './containers/Home';
import Post from './containers/Post';
import About from './containers/About';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ContactUs from './containers/ContactUs';
import Categories from './containers/Categories';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/post/:slug' component={Post} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/categories' component={Categories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
