import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function Home() {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const allUsers = await axios("http://localhost:100/users/view_all");
        setUsers(allUsers.data);
    }
    useEffect(() => {
        loadUsers();
    }, []);
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table table-hover table-bordered shadow">
                    <thead className='table table-dark'>
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
                                <td className='text-center'>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                                    <button className="btn btn-danger" type="">Delete</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    )
}
