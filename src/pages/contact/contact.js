import React, { Fragment } from 'react';
import { Address } from './components/Address';

export function Contact(){
    return <Fragment>
        <section id = 'innerBanner'>
            <div className = 'content'>
                <h2><span>Contact</span></h2>
            </div>
        </section>
        <main id = 'main'>
            <section id ='contact'>
                <div className='container'>
                <div className='contact'>
                    <Address />
                </div>
                </div>
            </section>
        </main>





    </Fragment>
}