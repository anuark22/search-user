import React, { Fragment } from 'react';
import '../public/css/Users.css';
import Gravatar from './Gravatar';
const Users = (props) => { 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('me has submiteado')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="users-info-container">
                <div className="users-info">
                    <div className="current-user-container">
                        {   
                            props.users.length > 0 ?
                            props.users.map( user =>(
                                <div key={user.id} className="current-user">
                                    <div className="img-container">
                                        <Gravatar className="avatar-img" email={user.email} /> 
                                    </div>
                                    <div className="user-data">
                                        <div className="user-data-tittle">
                                            Name
                                        </div>
                                        <div>
                                            {
                                                props.editing ?(
                                                    <Fragment>
                                                        <input type="text" name="name" defaultValue={props.currentUser.name}/>
                                                    </Fragment>
                                                ):(
                                                    <Fragment>
                                                        {user.name}
                                                    </Fragment>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="user-data">
                                        <div className="user-data-tittle">
                                            Address
                                        </div>
                                        <div>
                                            {
                                                props.editing ?(
                                                    <Fragment>
                                                        <input type="text" name="address" defaultValue={props.currentUser.address} />
                                                    </Fragment>
                                                ):(
                                                    <Fragment>
                                                        {user.address}
                                                     </Fragment>
                                                  )
                                            }
                                        </div>
                                    </div>
                                    <div className="user-data">
                                        <div className="user-data-tittle">
                                            Phone Number
                                        </div>
                                        <div>
                                        {
                                                props.editing ?(
                                                    <Fragment>
                                                        <input type="text" name="phonenumber" defaultValue={props.currentUser.phonenumber}/>
                                                    </Fragment>
                                                ):(
                                                    <Fragment>
                                                        {user.phonenumber}
                                                     </Fragment>
                                                  )
                                            }
                                        </div>
                                    </div>
                                    <div className="user-data">
                                        <div className="user-data-tittle">
                                            Email
                                        </div>
                                        <div>
                                        {
                                                props.editing ?(
                                                    <Fragment>
                                                        <input type="text" name="email" defaultValue={props.currentUser.email} />
                                                    </Fragment>
                                                ):(
                                                    <Fragment>
                                                        {user.email}
                                                     </Fragment>
                                                  )
                                            }
                                        </div>
                                    </div> 
                                    <div className="buttons">
                                        {
                                             props.editing ?(
                                                <button className="button" onClick={()=>{props.editRow(user)}} > Save </button>
                                             ):(
                                                 <button className="button" onClick={()=>{props.editRow(user)}} > Edit </button>
                                             )
                                        }
                                        <button className="button" onClick={()=>{props.deleteUser(user.id)}} > Remove </button>
                                    </div>                               
                                </div>
                            )): (
                                <div>
                                    <span className="no-users">No Users</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default Users;