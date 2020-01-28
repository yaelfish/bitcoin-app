import React from 'react'

import { Link } from 'react-router-dom';

export default function HomePage() {
    return <div className="container home-container">
        <h1>WELCOME TO MISTER Bitcoin</h1>
        <p>Username: Yael</p>
        <p>Bitcoins: 2,000</p>
        <Link to={'/contact'}>Enter Bitcoin App!</Link>
    </div>
}