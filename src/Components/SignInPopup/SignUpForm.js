import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import USPSALogo from "../../Images/USPSALogo.png";
import './SignUpForm.css';

function SignUpForm({switchToLogin, closePopup, setPhoneNumber, setFullName}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newFullName, setNewFullName] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault()

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log(user);
            setPhoneNumber(newPhoneNumber);
            setFullName(newFullName);
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
    <div id="SignUpFormContainer">
        <img src={USPSALogo} alt="USPSA Logo"></img>
        <h1> Create User </h1>
        <form>
            <div>
                <label htmlFor="full-name">
                    Full Name
                </label>
                <input
                    type="text"
                    label="Full Name"
                    value={newFullName}
                    onChange={(e) => setNewFullName(e.target.value)}
                    required
                    placeholder="Full Name"
                />
            </div>

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
                <label htmlFor="phone-number">
                    Phone Number
                </label>
                <input
                    type="tel"
                    label="Phone Number"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                    required
                    placeholder="(XXX)XXX-XXXX"
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
                id="submitSignUpButton"
            >
                Sign Up
            </button>
        </form>
        <text>Already Have an Account? <button id="SwitchToLoginButton" onClick={() => switchToLogin()}>Click Here to Login.</button></text>
        </div>
    )
}

export default SignUpForm;
