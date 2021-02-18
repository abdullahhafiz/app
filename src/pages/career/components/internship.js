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
                           
                            {/* <i className='fresh-graduates'></i> */}
                            {/* <li><i className='fresh-graduates-learning'></i> {list.arrayOfOpportunity}</li>
                            <li><i className='fresh-graduates-complete-task'></i> {list.arrayOfOpportunity}</li>
                            <li><i className='fresh-graduates-working-enviroment'></i>{list.arrayOfOpportunity}</li>
                            <li><i className='fresh-graduates-disciplined'></i> {list.arrayOfOpportunity} </li> */}
                        </ul>
                    </div>
            </div>
        </section>
    </Fragment>
}