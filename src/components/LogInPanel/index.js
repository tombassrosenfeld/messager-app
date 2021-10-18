import React from 'react'
import ChooseUser from '../ChooseUser'
import LogIn from '../LogIn'
import NewUserForm from '../NewUserForm'
const LoginPanel = () => {


    return (
        <section className="login">
            <h2>New here?</h2>

            <p>Select a random pre-existing user to see how a populated chat dashboard looks.</p>
            <ChooseUser />

            <p>Or create a new user:</p>
            <NewUserForm />

            <p>Not so new? Log in.</p>

            <LogIn />
           
        </section>
    )


}

export default LoginPanel;