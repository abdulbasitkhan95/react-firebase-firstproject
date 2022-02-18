import {login} from "../../config/firebase";
import {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const signIn = async () => {
        try {
            setErrorMessage('')
            const user = await login(email, password)
        }
        catch(e) {
            setErrorMessage(e.message)
        }
    }

    //console.log(email, password, errorMessage)

    return(
        <div>
            <h1>Login</h1>
            <input placeholder="Your Email" onChange={event => setEmail(event.target.value)} />
            <input placeholder="Your Password" onChange={event => setPassword(event.target.value)} />
            <button onClick={() => signIn()}>Submit</button>
            <p>{errorMessage}</p>
        </div>
    )
}

export default Login