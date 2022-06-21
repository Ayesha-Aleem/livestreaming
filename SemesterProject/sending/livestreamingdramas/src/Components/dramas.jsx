import React from 'react'
import Card from './card'
import jdata from './data'

const dramas = () => {
    return ( 
        <>
            <div style={{margin:30}}>

                <h1 style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>Dramas list</h1>
                <div style={{textAlign: 'center', width: '100%'}}>
                    {jdata.map((val)=>{
                        return(
                    
                          <Card 
                          cover={val.cover} 
                          head={val.head} 
                          des={val.dec} 
                          link={val.link} /> 
                        )
                    })}
                    
                </div>

            </div>
  
        </>
     );
}
 
export default dramas;