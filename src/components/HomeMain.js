import React from 'react'
import avatar from '../images/avatar.jpg'
import bigimage from '../images/bigimage.jpg'
import share from '../icons/share.png'
import like from '../icons/like.png'
import comment from '../icons/comment.png'
import send from '../icons/send.png'
function HomeMain() {
    return (
           <>
              <div style={{border:'.5px solid #ddd',backgroundColor:'white', borderRadius:'10px', margin:'10px 0px'}}>
              <div style={{display:'flex' ,
                      alignItems:'center',
                      margin:'10px'
                     }}>
                    <div style={{borderRadius:'50px',position: 'relative',
                        overflow: 'hidden',
                        height:'50px',
                        width:'50px',
                        marginRight:'7px',
                        borderRadius: '50%'}}><img src={avatar} height={50} width={50}  alt='avatar' /></div>
                          <div style={{flex:'1', textAlign:'left'}}>
                            <span style={{fontSize:'14px',
                            color:'#333'
                            }}><strong>Jay Prakash</strong> </span>
                            <br/>
                            <span style={{fontSize:'12px',
                               color:'#555'
                               }}>Software Developer | JavaScript | React.js | Node.js |IET Lucknow 2021</span>
                            <br/>
                            <span style={{fontSize:'12px',
                              color:'#555'
                              }}>3d &#183; public</span>
                          </div>
                 </div>
                 
                 <div >
                   <p style={{fontSize:'14px', color:'#333', margin:'0px 10px 5px 10px'}}>With #Rebegin, we are leading the way to ensure a wholesome workplace experience for all employees.
                      Here’s what Ekjot Kaur has to say about how #Rebegin helped her reimagine her future with us.
                    </p>
                    
                    <img style={{width:'100%', height:'auto'}} src={bigimage} alt='bigimage'/>
                    
                 </div>
                 <div style={{margin:'2px 10px'}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                            <span>like by 242 people</span>
                            
                            <span>comments...</span>
                    </div>
                    <hr/>
                    <div style={{display:'flex', justifyContent:"space-evenly"}}>
                            <span><img src={like} alt='like'/></span>
                            <span><img src={comment} alt='comment'/></span>
                            <span><img src={share} alt='share'/></span>
                            <span><img src={send} alt='send'/></span>
                            
                    </div>
           
                 </div>
                

              </div>
                
           </>
        
    
    )
}

export default HomeMain;
