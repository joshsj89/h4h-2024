import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import './SignUpForm.css';

function SignUpForm({switchToLogin, closePopup}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault()

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log(user);
            closePopup();
        })
        .catch((error) => {
            // Error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

  return (
    <div>
        <h1> Create User </h1>
        <form>
            <div>
                <label htmlFor="email-address">
                    Email address
                </label>
                <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                />
            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
            >
                Sign up
            </button>
        </form>
        <button onClick={switchToLogin}>Already Have an Account? Click Here to Login.</button>
        </div>
    )
}

export default SignUpForm;
