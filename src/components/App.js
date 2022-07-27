import React, { useState, Fragment } from 'react';
import '../public/css/index.css';
import Navbar from './Navbar';
import Users from './Users';

import { v4 as uuidv4 } from 'uuid';

function App (){
        
    const usersData = [
        { id: uuidv4(), name: 'Anuar Abutook', address:'Coro City, coro', phonenumber:'+584125801636', email: 'yorn@hotmail.es'},
        { id: uuidv4(), name: 'Alexis Guere', address:'Coro City, coro', phonenumber:'+584125801636', email: 'dranned@gmail.com'},
        { id: uuidv4(), name: 'Jose Rodriguez', address:'Coro City, coro', phonenumber:'+584125801636', email: 'guaroland@hotmail.com'},
        { id: uuidv4(), name: 'Roman Riera', address:'Coro City, coro', phonenumber:'+584125801636', email: 'marronguitar@outlook.com'},
        { id: uuidv4(), name: 'Ademar Chulito', address:'Coro City, coro', phonenumber:'+584125801636', email: 'metanfetamina@gamil.com'},
        { id: uuidv4(), name: 'Gregorio Barrera', address:'Coro City, coro', phonenumber:'+584125801636', email: 'hystericfurry@hotmail.com'},
    ]
    //State
    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: '',
        name: '',
        address: '',
        phonenumber: '',
        email: '',
    });

    //Edit User
    const editRow = (users) =>{
        setEditing(true);
        setCurrentUser({
            id: users.id,
            name: users.name,
            address: users.address,
            phonenumber: users.phonenumber,
            email: users.email,
        })
    }
    const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers( users.map( users => ( users.id === id ? updateUser : users)))
    }
    //Delete an User
    const deleteUser = (id) => {
        const filteredArray = users.filter( users => users.id !== id );
        setUsers(filteredArray);
    }
    return(
        < Fragment>
        
                    <Navbar />
                    <Users  
                        users={users} 
                        deleteUser={deleteUser}
                        editRow={editRow}
                        updateUser={updateUser}
                        currentUser={currentUser}
                        editing={editing}
                    />
        </Fragment>
    );
}

export default App;