import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx'
import AddCourse from './components/AddCourse.jsx'
import DeleteCourse from './components/DeleteCourse.jsx'
import Home from './components/Home.jsx'
import Falcuties from './components/Falcuties.jsx'
import Science from './components/Science.jsx'
import Admin from './components/Admin.jsx'
import SocialSciences from './components/SocialScience.jsx'


class App extends React.Component {

  render() {

    return (

      <Router>

        {/*enclosing in the BrowserRouter* to enalbe navigation on different pages*/}

        <div className="App">

          <Header />


          <Switch>



            <Route path="/" component={Home} exact />

            <Route path="/Admin/add" component={AddCourse} />

            <Route path="/Admin/delete" component={DeleteCourse} />

            <Route path="/faculty" component={Falcuties} />

            <Route path="/Falcuty/Sciences" component={Science} />

            <Route path="/Admin" component={Admin} />



            <Route path="/Falcuty/SocialScience" component={SocialSciences} />

          </Switch>

        </div>

      </Router>

    );
  }
}

export default App;
