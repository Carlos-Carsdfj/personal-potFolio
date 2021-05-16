import BodyAndHead from '../../components/BodyAndHead'
import HeaderNavigation from '../../components/HeaderNavigation'
import ProjectContent from '../../components/ProjectContent'
import Footer from '../../components/Footer'
import styles from './Projects.module.css'
export default function AboutMe(){
    
    return(<>   
    
    <BodyAndHead title='Carlos|Projects'>
        <header>
            <HeaderNavigation></HeaderNavigation>
        </header>
        
        <main className={styles.mainContent}>
        <ProjectContent></ProjectContent>
        </main>
     
    </BodyAndHead>
 </>)

}

    
