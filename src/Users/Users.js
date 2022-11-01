import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([])

  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(resp)

    setUsers(resp.data)
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => {
    //     setUsers(res.data)
    //   })
    loadUsers()
  }, [])

  return (
    <div data-testid={'users-page'}>
      {users.map(user => <Link to={`/users/${user.id}`} key={user.id} data-testid={'user-item'}>{user.name}</Link>
      )}
    </div>
  );
};

export default Users;