import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>This is the part about me.</p>
            <p>Ned a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>

    )
}

export default AboutPage