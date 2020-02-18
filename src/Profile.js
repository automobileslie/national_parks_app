import React from 'react';

export default class Profile extends React.Component{


    render(){
        return(
            <div>
                {!(this.props.loggedIn()) ? 
                <h2>Log in to see your profile</h2> :
                    <div>
                    {this.props.parks.length < 497 ? 
                    <h2>Come back to your profile when the parks are finished loading!</h2> :
                    <div>
                <br></br>
                <strong>Username: {this.props.username}</strong>
                <br></br>
                <label>
                    <strong>Delete account: </strong></label>
                <button onClick={this.props.deleteAccount}>Submit</button>
                </div>
                }
                </div>
            }
                
            </div>
        )
    }
}