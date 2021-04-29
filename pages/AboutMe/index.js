import BodyAndHead from '../../components/BodyAndHead'
import Header from '../../components/Header'
import styles from './styles.module.css'
import Skills from '../../components/Skills'
import TextBox from '../../components/TextBox'
import HeaderNavigation from '../../components/HeaderNavigation'


export default function AboutMe(){

    return(<>   
    
    <BodyAndHead title='Carlos|About Me'>
        <header>
        <HeaderNavigation></HeaderNavigation>
        </header>
        <main className={styles.contentMain}>
                <TextBox></TextBox>
                <Skills></Skills>
        </main>
    </BodyAndHead>
 </>)

}

    
