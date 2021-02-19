import React, { Fragment } from 'react';
import classNames from '../career.json';
export function Internship(){                            

    return <Fragment>

<section id="services">
        <div className="container">
            <div className="section-header">
                <h2>Internship</h2>
            </div>
        </div>
    </section>
        
        <section id = 'internship-service'>
            <div className= 'container'>

            <div className="internship-content">
                        <ul>
                            <h1>Key Requirements</h1>
                            {classNames.map((item, i)=>{
                                return <li key ={i}>{item.oppurtunity} </li>
                            })}
                           
                        </ul>
                    </div>
            </div>
        </section>
    </Fragment>
}