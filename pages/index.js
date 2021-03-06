

import useNearScreen from '../hooks/useNearScreen'

import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import BodyAndHead from '../components/BodyAndHead'
import ContactForm from '../components/ContactMe/index.js'
import AboutContent from '../components/AboutContent'
import MenuNav from '../components/MenuNav'
import ProjectContent from '../components/ProjectContent'
import SetupLang from '../components/SetupLang'



export default function Home() {
  


 
  const near1 = useNearScreen()
  const near2  = useNearScreen()
  const near3 = useNearScreen()

  
  
 

  
  
 

  return (
    <>

       
  

      <MenuNav ></MenuNav>
      <SetupLang ></SetupLang>      
      <main >
        <a name="welcome"/>
         <div className="home-div">
                  <HomeContent></HomeContent>
      
                   
                  
                  
                  </div>                    
                  <div className='span-separate'/>                
                    <a id="aboutme"/>             
                  <div className="aboutme-div" ref={near1.fromRef}>

                  { near1.isNearScreen && <AboutContent></AboutContent> }

                  </div>
                  <div className='span-separate'/>
                    <a id="projects"/>
                  <div className='project-div' ref={near2.fromRef}>
                  { near2.isNearScreen && <ProjectContent></ProjectContent> }                  
                  </div>

            <div className='span-separate'/>

              <a id='ContactMe'/>
            <div className='contact-div' ref={near3.fromRef}>
              { near3.isNearScreen && <ContactForm></ContactForm> }                   
            </div>          
          </main>
          <footer>
            <Footer></Footer>
           </footer>
        <BodyAndHead title='Carsd-Fj|Potfolio'></BodyAndHead>
                 

    </>
  )
}



