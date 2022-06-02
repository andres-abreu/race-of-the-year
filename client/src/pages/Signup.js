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
        <>
        <form onSubmit= {handleFormSubmit} className="signup-body">
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" id="first-name" placeholder="Enter your first name" value={formState.firstName} 
                onChange={handleChange}
                name="firstName"/>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" id="last-name" placeholder="Enter your last name" value={formState.lastName} 
                onChange={handleChange}
                name="lastName"/>
                
            </div>
            <div class="form-group">  
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"
                value={formState.email}
                onChange={handleChange}
                name="email"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                name="password"/>
            </div> 
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       </>
        )
    }
    
    export default Signup;
    