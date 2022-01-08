import React from 'react'
import avatar from '../images/avatar.jpg'
import coverimage from '../images/coverimage.jpg'

function HomeLeft() {
    return (
        <div style={{border:'.5px solid #ddd',backgroundColor:'white', borderRadius:'10px', margin:'10px 0px'}}>
        <div>
            <div >
                  <img style={{height:'70px', width:'100%', borderRadius:'10px 10px 0 0 '}} src={coverimage} alt='coverimage'/>
            </div>
            <div style={{
                       
                        display:'inline-block',
                        overflow: 'hidden',
                        height:'60px',
                        marginTop:'-35px',
                        width:'60px',                       
                        borderRadius: '50%'}}>
                  <img style={{position: 'relative',
                                               
                        overflow: 'hidden',
                        height:'60px',
                        width:'60px',
                      
                        borderRadius: '50%'
                    }} src={avatar} alt='avatar'/>
            </div>
           
        </div>
            <div style={{margin:'10px', color:'#555'}}>
                    <div style={{}}>
                                <span><strong>Jay Prakash</strong></span>
                                 <br/>
                                <span style={{fontSize:'12px'}}>Software Developer | JavaScript | React.js | Node.js | AWS | HTML | CSS | Java | IET Lucknow 2021</span>
                                 <br/>
                               <hr/>
                            </div>
                               <div style={{fontSize:'12px'}}>
                               <div style={{display:'flex', justifyContent:'space-between', padding:'4px'}}>
                                    <span>
                                        Who viewed your profile
                                    </span>
                                    <span>38</span>
                                </div>
                                <div style={{display:'flex',padding:'4px', justifyContent:'space-between'}}>
                                    <span style={{textAlign:'left'}}>
                                        Connections
                                        <br/>
                                        <span><b>Grow your Network</b></span>
                                    </span>
                                    <span>500</span>
                                </div>
                               <hr/>
                                <div style={{display:'flex',padding:'4px', justifyContent:'space-between'}}>
                                    <span style={{textAlign:'left'}}>
                                        Get hired faster <em>Try premium</em>
                                    </span>
                                   
                                </div>
                                <hr/>
                                <div style={{display:'flex',padding:'4px', justifyContent:'space-between'}}>
                                    <span style={{textAlign:'left'}}>
                                         My Items
                                    </span>
                                    
                                </div>
                               </div>
                               

                   </div>
            
    </div>
    )
}

export default HomeLeft
