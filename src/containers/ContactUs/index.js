import React from 'react';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import './style.css';
import Layout from '../../components/Layout';

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
    return (
        <Layout>
            <div style={{ width: '70%' }}>
                <Card>
                    <div className='contactContent'>
                        <h1>Contact Us</h1>
                        <div>
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <textarea placeholder='Messege'></textarea>
                        <button>send</button>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}

export default ContactUs;