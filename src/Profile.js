import React from 'react';

  const Profile =(props)=> {

    const { parks, loggedIn, username, deleteAccount} = props

        return(
            <div className="the-park-list-and-profile">
                {!(loggedIn()) ? 
                <h2>Log in to see your profile</h2> :
                    <React.Fragment>
                    {parks.length < 497 ? 
                    <h2>Come back to your profile when the parks are finished loading!</h2> :
                    <React.Fragment>
                <br></br>
                <strong>Username: {username}</strong>
                <br></br>
                <br></br>
                <label>
                    <strong>Delete account: </strong></label>
                <button onClick={deleteAccount}>Submit</button>
                </React.Fragment>
                }
                </React.Fragment>
            } 
            </div>
        )

}

export default Profile;