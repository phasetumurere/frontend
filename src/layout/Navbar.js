import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href=".">User CRUD Application</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className='btn btn-outline-light' to={"users/addNew"} >AddUser</Link>
                </div>
            </nav>

        </div>
    )
}