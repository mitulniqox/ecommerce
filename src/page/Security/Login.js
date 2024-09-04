import React, { useState } from 'react'
import { ROOT_URL } from '../utils/rootURL';
import axios from 'axios';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const onLogin = (event) => {
    //     axios.post(`${ROOT_URL}/auth/login`, {
    //         body: JSON.stringify({
    //             username: username,
    //             password: password,
    //         })
    //     }).then(res => res.json())
    //         .then(json => console.log(json))
    // }

    return (
        <>
            <div className='d-flex vh-100 justify-content-center align-items-center'>
                <div className='card'>
                    <div className='card-body'>

                        <div className='text-center'>
                            <h1 className='button-tab'>Login</h1>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="email" className="form-control" onClick={(event) => setUsername(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" onClick={(event) => setPassword(event.target.value)} />
                        </div>

                        <button type="submit" className="btn px-0 btn-primary w-100">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
