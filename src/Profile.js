import React from 'react';

  const Profile =(props)=> {

        return(
            <div>
                {!(props.loggedIn()) ? 
                <h2>Log in to see your profile</h2> :
                    <div>
                    {props.parks.length < 497 ? 
                    <h2>Come back to your profile when the parks are finished loading!</h2> :
                    <div>
                <br></br>
                <strong>Username: {props.username}</strong>
                <br></br>
                <label>
                    <strong>Delete account: </strong></label>
                <button onClick={props.deleteAccount}>Submit</button>
                </div>
                }
                </div>
            } 
            </div>
        )

}

export default Profile;