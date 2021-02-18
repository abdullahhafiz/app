import React from "react";
import { Link } from "react-router-dom";
export function Team(){
    return <section id = "team">
        <div className= "container">

        <div className="section-header">
                <h2>Our Team</h2>
        </div>
        <div className = "row">

        <div className="inRowDetails">
                    <div className="member">
                        <div className="pic"><img src="./assets\img\abdullah.jpg" alt="Abdullah" /></div>
                        <div className="details">
                            <h4>Muhammad Abdullah</h4>
                            <span>Admin</span>
                            <div className="socialDetails">
                                <Link to="http://localhost:3000//github.com/abdullahhafiz" target="_blank"><i className="fab fa-github"></i>Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>

    </section>
}