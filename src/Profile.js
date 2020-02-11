import React from 'react';

export default class Profile extends React.Component{



    state={
        username: ""
    }

    changingUsername=(event)=>{
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    submitUsernameChange=(event)=>{
        event.preventDefault();
        this.props.changeUsername({
            username: this.state.username
        })
        this.setState({
            username: ""
        })
    }

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
                <form onSubmit={this.submitUsernameChange}>
                    <br></br>
                    <label htmlFor="username">
                        <strong>Change your username: </strong></label>
                    <input type="text" name="username" value={this.state.username} placeholder="enter new username" onChange={this.changingUsername}/>
                    <input type="submit" value="submit"/>
                </form>
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