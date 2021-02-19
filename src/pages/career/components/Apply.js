import React from 'react';
import { Link } from 'react-router-dom';

export function Apply() {
    return <section id="services">
        <div className="container">
            <div className="section-header">
                <h2> <Link to="https://forms.gle/iDqUY9a7CgVsPKx3A" target="_blank"><button type="submit"
                    className="btn btn-primary pull-center">Apply Here</button></Link>
                </h2>
            </div>
        </div>
    </section>
}