import React from 'react';
import Car from './images/bugatti.jpg';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-text reverse'>
                <h1>BUGATTI CHIRON SUPER SPORT</h1>
                <p>THE ULTIMATE GRAND TOURISME,
                DELIVERING BRUTAL PERFORMANCE
                IN TOTAL COMFORT.
                </p>
                <Link to='/' className='home-btn'>Live Demo</Link>
            </div>
            <div className='home-img'>
                <img src={Car} alt="" />
            </div>
        </div>
    );
};

export default Home;