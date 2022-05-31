import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <body className="login-body"> 
    <main className="flex-row justify-center mb-4 login-container">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
           
            <form onSubmit= {handleFormSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>

                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              class="form-control" placeholder="Password"/>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
    </body>
  );
};

export default Login;
