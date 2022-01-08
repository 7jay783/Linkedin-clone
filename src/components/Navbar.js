import React, {useState} from 'react'
import logo from '../icons/logo.png'
import search from '../icons/search.png'
import home from '../icons/home.png'
import jobs from '../icons/jobs.png'
import apps from '../icons/apps.png'
import messaging from '../icons/messaging.png'
import mynetwork from '../icons/mynetwork.png'
import notification from '../icons/notification.png'

const styles={
      img:{
           height:24,
           width:24
      },
      selected:{
          borderBottom:'2px solid black'
      }
}

function Navbar(props) {
    const [text, setText] = useState("Home");
    return (
        <nav style={{height:55,
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex:'3',
         marginTop:0,
         width:'100%',
         backgroundColor:'white',
         display:'flex',
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
           }}
           value={text}           
           onChange={e=>setText(e.target.value)}
           >

           <div>
               <img src={logo} alt='logo'/>
           </div>
           <div style={{display:'flex', alignItems:'center', backgroundColor:'#eee',
                padding:'5px 0px 5px 5px',
                borderRadius:4                         
             }}>
              
               <img src={search} alt='search icon'/>
             
               <input style={{border:'none', backgroundColor:'transparent', outline:'none'}}
               placeholder='Search for jobs , people'

                />
           </div>
           <div 
           style={{display:'flex',
           
           justifyContent:'normal'
           }}>
            <div>
            <figure style={{
               verticalAlign:'top',
               margin:'10px 25px',
               display:'inline-block',
               textAlign:'center' ,
               cursor:'pointer'              
           }}  onClick={() => props.setContent('Home')}>
               <img src={home} alt='home' style={styles.img }/>
               <figcaption className='caption' style={(props.content==='Home')?styles.selected:{}}>Home</figcaption>
               </figure>
            </div>
           <div>
           <figure style={{
               verticalAlign:'top',
               margin:'10px 25px',
               display:'inline-block',
               textAlign:'center',
               cursor:'pointer'

           }} onClick={() => props.setContent('My Network')}>
           <img src={mynetwork} alt='network'style={styles.img}/>
           <figcaption className='caption' style={(props.content==='My Network')?styles.selected:{}}>My Network</figcaption>
           </figure>
               </div>   
           <div>
           <figure  style={{
               verticalAlign:'top',
               margin:'10px 25px',
               display:'inline-block',
               textAlign:'center',
               cursor:'pointer'

           }} onClick={() => props.setContent('Jobs')}>
           <img src={jobs} alt='jobs'style={styles.img}/>
           <figcaption className='caption' style={(props.content==='Jobs')?styles.selected:{}}>Jobs</figcaption>
           </figure>
           </div>
          <div>
          <figure style={{
               verticalAlign:'top',
               margin:'10px 25px',
               display:'inline-block',
               textAlign:'center',
               cursor:'pointer'

           }}  onClick={() => props.setContent('Notification')}>
           <img src={notification} alt='notification'style={styles.img}/>
           <figcaption className='caption' style={(props.content==='Notification')?styles.selected:{}} >Notification</figcaption>
           </figure>
          </div>
          <div>
          <figure style={{
               verticalAlign:'top',
               display:'inline-block',
               margin:'5px 15px',
               textAlign:'center',
               cursor:'pointer'

           }} onClick={() => props.setContent('Messaging')}>
           <img src={messaging} alt='messaging'style={styles.img}/>
           <figcaption className='caption' style={(props.content==='Messaging')?styles.selected:{}}>Messaging</figcaption>
           </figure>
           
          </div>
          
          </div>
        </nav>
    )
}

export default Navbar
