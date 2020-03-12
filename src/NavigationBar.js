import React from 'react';
import {NavLink} from 'react-router-dom';


  const NavigationBar =(props)=>{

    const link = {
      width: "100%",
      padding: '1em',
      margin: '0em 0em 0em',
      background: 'azure',
      textDecoration: 'none',
      color: 'black',
    }

    const { parks, loggedIn, logOut, returnToParks, } = props

      return (
        <React.Fragment>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue',
            }}
          >Home</NavLink>

          {loggedIn() && parks.length >= 125 ? 

            <NavLink 
            to="/login"
            onClick={logOut}
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue',
            }}> Logout </NavLink>

          :

          <NavLink 
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'cadetblue',
          }}> Login/Signup</NavLink>
            }

          <NavLink
            to="/parks"
            onClick={returnToParks}
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue'
            }}
          >Parks</NavLink>

            <NavLink
            to="/park_collection"
            onClick={returnToParks}
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue'
            }}
          >Your Park List</NavLink>
          <NavLink
            to="/profile"
            exact
            style={link}
            activeStyle={{
              background: 'cadetblue',
            }}
          >Profile</NavLink>
        </React.Fragment>
      )
  }

  export default NavigationBar;