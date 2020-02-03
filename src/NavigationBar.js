import React from 'react';
import {NavLink} from 'react-router-dom';


const link = {
    width: "100%",
    padding: '1em',
    margin: '0em 0em 0em',
    background: 'azure',
    textDecoration: 'none',
    color: 'black',
  }

  export default class NavigationBar extends React.Component {

    render() {
      return (
        <div>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue',
            }}
          >Home</NavLink>

          { !(this.props.loggedIn()) ? 
          <NavLink 
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'cadetblue',
          }}> Login/Signup</NavLink>

          :

          <NavLink 
            to="/login"
            onClick={this.props.logOut}
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue',
            }}> Logout </NavLink>

            }

            
          <NavLink
            to="/parks"
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue'
            }}
          >Parks</NavLink>

            <NavLink
            to="/park_collection"
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue'
            }}
          >Your Park List</NavLink>
        </div>
      )
    }
  }