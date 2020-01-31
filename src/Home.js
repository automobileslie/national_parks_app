import React from 'react';


export default class Home extends React.Component {






render(){
    return(
        <div>
            {this.props.loggedIn() ? 
            <h1 className="home-page-header">Hello, {this.props.username}</h1>
            :
            <h1 className="home-page-header">Find a park</h1>
            }
            
        </div>

    )
}
}


