import React, {useState} from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (u) => {
        u.preventDefault();
    };
    return(
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (u) => setFirstName(u.target.value) }/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (u) => setLastName(u.target.value) }/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={ (u) => setEmail(u.target.value) }/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (u) => setPassword(u.target.value) }/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (u) => setConfirm(u.target.value) }/>
                </div>
            </form>
            <div>
                <h3>Your Form Data:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    );
};

export default Form;