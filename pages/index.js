
import dynamic from 'next/dynamic'
import useNearScreen from '../hooks/useNearScreen'
import useNear2 from '../hooks/useNearScrenn2'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import BodyAndHead from '../components/BodyAndHead'

import AboutContent from '../components/AboutContent'
import MenuNav from '../components/MenuNav'
export default function Home() {



  const {isNearScreen, fromRef} = useNearScreen()
  const near  = useNear2()

  const ProjectContent =
 
  dynamic(
    () => import('../components/ProjectContent'),
    { loading: () => '' }
  )
  // const AboutContent =
  // dynamic(
  //   () => import('../components/AboutContent'),
  //   { loading: () => '' }
  // )

  
 
//<WaveBackground></WaveBackground>
  return (
    <>
    
       
                     
                  <MenuNav ></MenuNav>
                        
              <main >
                  <a name="welcome"/>
                  <div className="home-div">
                  <HomeContent></HomeContent>
                  </div>

                     
                  <div className='span-separate'/>
                  
                  <div className="aboutme-div" ref={fromRef}>
                    <a name="aboutme"/>
                 
                  { isNearScreen && <AboutContent></AboutContent> }
                  
                  
                  

                  </div>

                  

                  <div className='span-separate'/>


                  <div className='project-div' ref={near.fromRef}>
                    <a name="projects"/>
                  { near.isNearScreen && <ProjectContent></ProjectContent> }

                      
                  </div>
            
              </main>

              <footer>
              <Footer></Footer>

              </footer>
         

        <BodyAndHead title='Carsd-Fj|Potfolio'></BodyAndHead>
    
    </>
  )
}
