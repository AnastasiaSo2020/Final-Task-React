import { useState } from 'react';
import '../Components/main.css'

export default function RegisterForm() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleRetypedPassword = (e) => {
        setRetypedPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || retypedPassword === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="registerSuccess"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="registerError"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1 className='registerError'>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className='container registrationForm'>
            <div className="form">
                <div>
                    <h1 className='userRegistration'>User Registration</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Labels and inputs for form data */}
                    <label className="registerFormLabel">Name</label>
                    <input onChange={handleName} className="input"
                        value={name} type="text" required />

                    <label className="registerFormLabel">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" required />

                    <label className="registerFormLabel">Password</label>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" required minLength="8" />


                    <label className="registerFormLabel">Retyped Password</label>
                    <input onChange={handleRetypedPassword} className="input"
                        value={retypedPassword} type="password" required minLength="8" />

                    <div className="termsAndConditions">
                        <input type="checkbox" id="termsAndConditions" required />
                        <a href="termsandconditions">Agree with terms and conditions*</a>
                    </div>
                    <button className="btn btn-warning registerButton" type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}
