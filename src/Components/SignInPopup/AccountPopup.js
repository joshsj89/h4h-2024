import React, {useState} from 'react';
import './AccountPopup.css';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

function AccountPopup({closeAccountPopup, isOpen}) {

    const [loggingIn, setLoggingIn] = useState(false);

    function switchToLogin() {
        setLoggingIn(true);
    }

    function switchToSignUp() {
        setLoggingIn(false);
    }

  return (
    <div>
        {isOpen ? (
            <>
                <div id="curtain"></div>
                <div id="sign-in-container">
                    <button onClick={() => {
                        setLoggingIn(false);
                        closeAccountPopup();
                    }}>Close</button>
                    {(()=> {
                        if(!loggingIn) {
                            return (<SignUpForm switchToLogin={switchToLogin} closePopup={closeAccountPopup}/>);
                        } else {
                            return (<LogInForm switchToSignUp={switchToSignUp}  closePopup={closeAccountPopup}></LogInForm>);
                        }
                    })()}
                </div>
            </>
            ) : (<></>)}
        </div>
    )
}

export default AccountPopup;
