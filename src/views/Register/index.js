import {register} from "../../config/firebase";
import {useState} from 'react';

function Register() {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <h1>Register</h1>
            <input placeholder="Your Full Name" onChange={event => setFullName(event.target.value)} />
            <input placeholder="Your Email" onChange={event => setEmail(event.target.value)} />
            <input placeholder="Your Password" onChange={event => setPassword(event.target.value)} />
            <button onClick={event => register(email, password, fullName)}>Submit</button>
        </div>
    )
}

export default Register