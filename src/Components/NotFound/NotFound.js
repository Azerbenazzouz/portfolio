import React from 'react'
import { Link} from 'react-router-dom';
import './NotFound.css'
export default function NotFound() {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1 style={{background:'url(./img/bg.jpg) no-repeat',WebkitBackgroundClip:'text'}}>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/home" class='btn btn-primary'>Go To Homepage</Link>
            </div>
        </div>
    )
}
