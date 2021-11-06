import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    const { value } = e.target
    const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    const result = regex.test(value)

    this.setState({
      email: value,
      emailIsValid: result
    })
  }

  handlePasswordChange(e) {
    const { value } = e.target
    
    this.setState({
      password: value,
      passwordIsValid: value.length > 5
    })
  }

  handleRememberMeChange(e) {
    this.setState({ rememberMe: e.target.checked })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { emailIsValid, passwordIsValid } = this.state

    this.setState({
      isSubmitted: emailIsValid && passwordIsValid
    })
  }

  render() {
    const {
      emailIsValid,
      passwordIsValid,
      isSubmitted,
      email
    } = this.state

    return (
      <div className="container my-5">
        {!isSubmitted ? (
          <>
            <h1 className="mb-5">Form</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className={`form-control ${emailIsValid ? 'is-valid' : 'is-invalid'}`}
                  placeholder="Enter email"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${passwordIsValid ? 'is-valid' : 'is-invalid'}`}
                  placeholder="Enter password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.handleRememberMeChange}
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </>
        ) : (
          <p className="text-success text-center pt-5 fs-1">Bravo, {email}</p>
        )}
      </div>
    )
  }
}

export default App
