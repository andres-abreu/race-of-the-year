import React from 'react';
import {useQuery} from '@apollo/client';
import { QUERY_ALL_USERS } from '../../utils/queries';

const RunnerList = () => {
    const { loading,data } = useQuery(QUERY_ALL_USERS);
    
    const users = data && data.users

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="flex-row justify-space-between">
            <div className="col-12 mb-3">
                <h1>Registered Runners</h1>
                <div className='table-list'>
                    <table className="table table-hover table-sm ">
                        <caption>Registered Runners</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        users && users.map(user => (
                            <tr key={user._id}>
                                <th scope="row">{users.indexOf(user) + 1}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RunnerList