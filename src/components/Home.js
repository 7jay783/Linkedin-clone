import React from 'react'
import HomeLeft from './HomeLeft'
import HomeLeftStatic from './HomeLeftStatic'
import HomeMain from './HomeMain'
import HomeRight from './HomeRight'

function Home() {
    return (
           <>

    <div style={{display:"flex", flexDirection:'row',
        justifyContent:'space-evenly',
         width:"90vw",
        
        margin:'auto'    

    }}>
         <div style={{width:'20vw',
        height:'4000px',
         justifyContent:'center',
         textAlign:'center'
        }}>
            <HomeLeft/>
            <HomeLeftStatic/>
          </div>
          <div>
             <div style={{
               flex:1,
               width:'30rem',
               height:'100vh',
               justifyContent:'center'
            
               }}>
                 <HomeMain/>
                 <HomeMain/>
                 <HomeMain/>
                 <HomeMain/>
                  </div>
          </div>
   
            <div  style={{width:'25vw',
         height:'100vh',
         justifyContent:'center',
         textAlign:'center'
         }}>
            <HomeRight/>
           </div>
    </div>
           

           </>
        
    
    )
}

export default Home
