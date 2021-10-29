import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
    
        this.state = {
          email: "",
          password: "",
          rememberMe: false,
          emailIsValid: false,
          passwordIsValid: false,
          isSubmitted: false,
          firstName: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
        this.handleIsSubmitted = this.handleIsSubmitted.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
      }
        
      handleEmailChange(e) {
        const str = e.target.value
        const result = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)
        this.setState({ email: str, emailIsValid: result })
      }
    
      handlePasswordChange(e) {
        const str = e.target.value
        const result = str.length > 5 
        this.setState({passwordIsValid: result, password: str })
    }
      
    
      handleRememberMeChange() {
        this.setState({ rememberMe: true})
      }

      handleIsSubmitted(e) {
        e.preventDefault()
        if (this.state.emailIsValid && this.state.passwordIsValid) {
            this.setState({isSubmitted: true})
        }
      }

      handleFirstNameChange(e) {
        const str = e.target.value
        this.setState({firstName: str})
    }


    render() {
        const {emailIsValid, passwordIsValid, isSubmitted, email} = this.state

        console.log("state fistname : ", this.state.firstName);
        return (
        <>
            {isSubmitted ?  <p> Success : {email} </p> :
                <div>
                    <form onSubmit={this.handleIsSubmitted}>
                    <label>
                        Email Address:
                        <input className= {emailIsValid ? "form-control is-valid" : "form-control is-invalid"}  type="email" onChange={this.handleEmailChange}  />
                    </label>
                    
                    <label>
                        Password :
                        <input className= {passwordIsValid ? "form-control is-valid" : "form-control is-invalid"} type="password" onChange={this.handlePasswordChange}  />
                    </label>
                    <div className="form-check">
                        <input onClick={this.handleRememberMeChange} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>
                    
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                    
                    </form> 
                    <input onChange={this.handleFirstNameChange} type="text" placeholder="First Name"/>
                </div>
            }
        </>
        );
    }
}

export default Form;

