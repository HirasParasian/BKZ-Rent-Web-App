import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from "react-helmet";

export const NotFound = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <h1>404 | Not Found</h1>
            </div>
        </Layout>
    )
}

export default NotFound