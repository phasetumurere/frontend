import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });
  const { name, username, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:100/users/addNew", user);
    navigate("/users");
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-3 shadow'>
          <h2 className='text-center m-4'>Register new User</h2>


          <form onSubmit={(e) => onSubmit(e)}>

            <div className='form-group row mb-3' >
              <label htmlFor="Name" className='col-sm-2 form-label'>Name</label>
              <div className='col-sm-10'>
                <input value={name}
                  type="text" className='form-control'
                  placeholder='Enter your name' name="name"
                  id="Name"
                  onChange={(e) => { onInputChange(e) }}
                />
              </div>
            </div>

            <div className='form-group row mb-3' >
              <label htmlFor="Username" className='col-sm-2 form-label'>Username</label>
              <div className='col-sm-10'>
                <input value={username}
                  type="text" className='form-control'
                  placeholder='Enter your username' name="username"
                  onChange={(e) => { onInputChange(e) }}
                  id="Username" />
              </div>
            </div>

            <div className='form-group row  mb-3' >
              <label htmlFor="Email" className='col-sm-2 form-label'>Email</label>
              <div className='col-sm-10'>
                <input value={email}
                  type="text" className='form-control'
                  placeholder='Enter your name' name="email"
                  onChange={(e) => { onInputChange(e) }}
                  id="Email" />
              </div>

            </div>
            <div className='text-center'>
              <button className="btn btn-outline-primary"
                type="submit">Submit</button>
              <Link to={"/users"} className="btn btn-outline-danger mx-2"
                type="submit">Cancel</Link >
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}