import React from 'react';
import { Link } from 'react-router-dom';
export function Team(){
    return <section id = 'team'>
        <div className= 'container'>

        <div className="section-header">
                <h2>Our Team</h2>
        </div>
        <div className = 'row'>

        <div className='inRowDetails'>
                    <div className='member'>
                        <div className='pic'><img src='./assets/img/C:\Users\Dell\Desktop\RP\app\public\assets\img\abdullah.png' alt='Abdullah' /></div>
                        <div className='details'>
                            <h4>Muhammad Abdullah</h4>
                            <span>Admin</span>
                            <div className='socialDetails'>
                                <Link to='https://github.com/abdullahhafiz' target='_blank'></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>

    </section>
}