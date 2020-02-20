import React from 'react';

  const Profile =(props)=> {

        return(
            <React.Fragment>
                {!(props.loggedIn()) ? 
                <h2>Log in to see your profile</h2> :
                    <React.Fragment>
                    {props.parks.length < 497 ? 
                    <h2>Come back to your profile when the parks are finished loading!</h2> :
                    <React.Fragment>
                <br></br>
                <strong>Username: {props.username}</strong>
                <br></br>
                <label>
                    <strong>Delete account: </strong></label>
                <button onClick={props.deleteAccount}>Submit</button>
                </React.Fragment>
                }
                </React.Fragment>
            } 
            </React.Fragment>
        )

}

export default Profile;