import React from 'react';
  
const Card = ({cover, head, des, link}) => {

    return( 
           
        <div style={{backgroundColor:'#eeee',width: '30%', display: 'inline-block', margin: '20px'}}>
            <img 
            class="h-56 w-56 shadow-lg rounded-l-md inline-block" 
            style={{height: 350, width: '100%', objectFit:'fill'}} 
            src={cover} />
            <h1 
            style={{padding: '10px', fontSize: '30px'}}>
            {head}
            </h1> 
            <p>
                {des}
            </p>
            {/* redirect to new */}
            <button onClick={()=>{window.location.href={link}}} style={{width: '100%', height: 40, border: 'none',backgroundColor:'#d11d', color:'white'}}>check trailer</button>
        </div>

    )
    
}

export default Card