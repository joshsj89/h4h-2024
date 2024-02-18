import React, {useState} from 'react';
import './AccountPopup.css';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import { Close } from 'grommet-icons';

function AccountPopup({closeAccountPopup, isOpen, setPhoneNumber, setFullName}) {

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
                    }}
                    id="popUpCloseButton"
                    ><Close /></button>
                    {(()=> {
                        if(!loggingIn) {
                            return (<SignUpForm switchToLogin={switchToLogin} closePopup={closeAccountPopup} setPhoneNumber={setPhoneNumber} setFullName={setFullName}/>);
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
