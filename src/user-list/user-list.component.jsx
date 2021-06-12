import React from 'react';
import withData from '../with-data';

const UserList= ({data})=>{
    
        console.log(data);
        
        return (
            <div  className='container'>
              

                Post:
                {
                    data.map(user=>{
                        return(<div key={user.id} className='post'>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </div>)
                    })
                }
            </div> )   
                   
                
    
}


export default withData(UserList);