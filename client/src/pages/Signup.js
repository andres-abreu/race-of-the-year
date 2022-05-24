import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_USER} from '../utils/mutations';
import {Link} from 'react-router-dom';
import Auth from '../utils/auth'

const Signup = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [addUser, {error}] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]:value,
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await addUser({
                variables: {...formState}
            });
            Auth.login(data.addUser.token)
        }
        catch (e) {
            console.error(e);
        }
    }
    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <input className="form-input" 
                            placeholder="First Name" 
                            name="firstName" 
                            type="text" 
                            value={formState.firstName} 
                            onChange={handleChange}
                            />
                            <input className="form-input"
                            placeholder="Last Name"
                            name="lastName"
                            type="text"
                            id="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            />
                            <input className="form-input"
                            placeholder="Email"
                            name="email"
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            />
                            <input className="form-input"
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <button className="btn d-block w-100" type="submit">
                                Submit
                            </button>
                        </form>
                        {error && <div>Signup failed</div>}
                    </div>
                </div>
            </div>
        </main>
        )
    }
    
    export default Signup;
    