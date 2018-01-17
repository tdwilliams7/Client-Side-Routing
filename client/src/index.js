import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import NavBar from './Movies/NavBar';

const NotFound = () => {
    return (<h1>Page not found</h1>);
}
const Rental = () => {
  return (<h1>Rental</h1>);
}

class Gandalf extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push('/');
  //   }, 2000)
  // }
  render() {
    return (
      <h1>You shall not pass!! {this.props.demon}</h1>
    )
  }
}

ReactDOM.render(
  <div>
    <NavBar />
    <h2>Balrog</h2>
    <Router>
      <div>
        <div><Link to='/gandalf'>Catch the Fellowship!</Link></div>
        <Switch>
          {/* <Route path='/gandalf' component={Gandalf} exact/> */}
          <Route path='/gandalf' render={(props) => <Gandalf demon='Balrog'/>} />
          <Route path='/' component={MovieList} exact />
          <Route path='/movies/rental' component={Rental} />
          <Route path='/movies/:id' component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
