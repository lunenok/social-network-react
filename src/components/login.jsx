import React from 'react';

const LoginForm = () => {
    return (
        <form>
            <input type='text' placeholder='login'></input>
            <input type='text' placeholder='password'></input>
            <label> remember me
                <input type='checkbox'></input>
            </label>
            <button>Submit</button>
        </form>
    )
};

export const Login = (props) => {
    return (
        <div className='login__wrapper'>
            <h1 className='login__title'>Login</h1>
            <LoginForm />
        </div>
    );
};