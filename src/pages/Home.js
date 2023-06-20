import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const allUsers = await axios.get("http://localhost:100/users");
        setUsers(allUsers.data);
    }
    
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table table-hover border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Names</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col" className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary'>Edit</button>
                                    <button className='btn btn-warning'>Delete</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    )
}
