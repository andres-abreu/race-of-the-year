import React from 'react';
import {useQuery} from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';

const Home = () => {
    
    console.log(useQuery(QUERY_CATEGORIES));

    return (
        <div className="container">
            <h1>Welcome to the race of the year</h1>
        </div>
    )
}


export default Home;