import React, {useState} from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

    const {handleUserRegister} = useAuth()

    const [credentials, setCredentials] = useState({
        name:'',
        email:'',
        password1:'',
        password2:''
    })

    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setCredentials({...credentials, [name]:value})
    }

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => {handleUserRegister(e,credentials)}}>

            <div className="field--wrapper">
                <label>Name:</label>
                <input type="text"
                    required
                    name="name"
                    placeholder="Enter your name..."
                    values={credentials.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="field--wrapper">
                <label>Email:</label>
                <input type="email"
                    required
                    name="email"
                    placeholder="Enter your email..."
                    values={credentials.email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="field--wrapper">
                <label>Password:</label>
                <input type="password"
                    required
                    name="password1"
                    placeholder="Enter password..."
                    values={credentials.password1}
                    onChange={handleInputChange}
                />
            </div>

            <div className="field--wrapper">
                <label>Confirm Password:</label>
                <input type="password"
                    required
                    name="password2"
                    placeholder="confirm your password..."
                    values={credentials.password2}
                    onChange={handleInputChange}
                />
            </div>

            <div className="field--wrapper">
                <input className="btn btn--lg btn--main" type="submit" value="Login"/>
            </div>
        </form>

            <p>Already hava an account? Register <Link to="/login">here</Link></p>

      </div>
    </div>
  )
}

export default RegisterPage