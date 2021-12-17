import Navbar from "../components/Navbar"
import React from 'react'

import classes from './Home.module.scss'

const Home = ({ children }) => {
    return (
        <>
            <Navbar/>
            <div className={classes.container}> { children }</div>
        </>
    )
}

export default Home;