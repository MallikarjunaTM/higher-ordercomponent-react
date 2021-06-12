import React from 'react';
import withdata from '../with-data';

const  UserProfile = ({name,email,data})=> {
            return (
            <div  className='container'>
                <h1>{name}</h1>
                <h2>{email}</h2>

                Post:
                {
                    data.map(user=>{
                        return(<div key={user.id} className='post'>
                            <h1>{user.title}</h1>
                            <p>{user.body}</p>
                        </div>)
                    })
                }
            </div> )   
                   
                
    }


export default withdata(UserProfile);