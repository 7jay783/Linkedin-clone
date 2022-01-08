import React from 'react'


function HomeRight() {
    return (
        <div style={{border:'.5px solid #ddd',backgroundColor:'white', borderRadius:'10px', margin:'10px 0px'}}>
       
            <div style={{margin:'10px', color:'#555'}}>
                   
                               <div style={{fontSize:'12px'}}>
                                   <h3>LinkedIn News</h3>
                               <div style={{display:'flex', justifyContent:'space-between', padding:'4px'}}>
                                    <span>
                                        Groups
                                    </span>
                                   
                                </div>
                                <div style={{display:'flex',padding:'4px', justifyContent:'space-between'}}>
                                    <span style={{textAlign:'left'}}>
                                        Events
                                        <br/>
                                        
                                    </span>
                                    
                                </div>
                               <hr/>
                                <div style={{display:'flex',padding:'4px', justifyContent:'space-between'}}>
                                    <span style={{textAlign:'left'}}>
                                       Followed Hashtags
                                    </span>
                                   
                                </div>
                                <hr/>
                                <div style={{display:'flex',padding:'4px', justifyContent:'space-between'}}>
                                    <span style={{textAlign:'left'}}>
                                        Discover More
                                    </span>
                                    
                                </div>
                               </div>
                               

                   </div>
            
    </div>
    )
}

export default HomeRight
