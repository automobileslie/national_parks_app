import React from 'react';



export default class Login extends React.Component {

    state={
        loginUsername: "",
        loginPassword: "",
        signUpUsername: "",
        signUpPassword: "",
        errors: [],
        successMessage: ""
    }

    fillOutForm=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitLoginForm=(event)=>{
        event.preventDefault();

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: this.state.loginUsername,
          password: this.state.loginPassword
        })
      }).then(res => res.json())
        .then(data => {
          
          if (data.errors)
            this.setState({
              errors: data.errors
            })
          else
            this.props.setToken(data.token, data.id)
        });

        this.setState({
            loginUsername: "",
            loginPassword: "", 
            errors: [],
            successMessage: ""
        })
    }

    submitSignUpForm=(event)=>{
        event.preventDefault();

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }, 
            body: JSON.stringify({
                username: this.state.signUpUsername,
                password: this.state.signUpPassword
                })
            })
            .then(r => r.json())
            .then(data => {                
                if (data.errors)
                  this.setState({
                    errors: data.errors
                  })
                else
                  this.setState({
                      successMessage: data.message
                  })
              })

        this.setState({
            signUpUsername: "",
            signUpPassword: "",
            errors: [],
            successMessage: []
        })
    }

    render(){
        return(

            <div>
              
            <p className="login-messages">{this.state.errors}</p>
            <p className="login-messages"> {this.state.successMessage}</p>

            {this.props.parks.length >=497 ?

                !(this.props.loggedIn()) ? 
                    <div className="login-and-sign-up-form-div">

                    <form onSubmit={this.submitLoginForm}>
                        <h3>Log In</h3>
                        <input className="input-field" type="text" name="loginUsername" value={this.state.loginUsername} placeholder="username" onChange={this.fillOutForm}/>
                        <br></br>
                        <input className="input-field" type="password" name="loginPassword" value={this.state.loginPassword} placeholder="password" onChange={this.fillOutForm}/>
                        <br></br>
                        <input type="submit" value="Login" />
                    </form>

                <br></br>

                    <form onSubmit={this.submitSignUpForm}>
                        <h3>Sign Up</h3>
                        <input className="input-field" type="text" name="signUpUsername" value={this.state.signUpUsername} placeholder="username" onChange={this.fillOutForm}/>
                        <br></br>
                        <input className="input-field" type="password" name="signUpPassword" value={this.state.signUpPassword} placeholder="password" onChange={this.fillOutForm}/>
                        <br></br>
                        <input type="submit" value="Sign Up" />
                    </form>

                </div>

            : 

            <h1 className="login-and-sign-up-form-div">Hello, {this.props.username} </h1>
            

            : 
            <h2>Come back to log in once the parks are finished loading!</h2>
            }
    
            </div>
        )
    }
}