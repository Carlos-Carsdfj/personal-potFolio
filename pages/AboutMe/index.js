import BodyAndHead from '../../components/BodyAndHead'
import Header from '../../components/Header'
import styles from './styles.module.css'
import Skills from '../../components/Skills'
import TextBox from '../../components/TextBox'
import HeaderNavigation from '../../components/HeaderNavigation'
import MessageAboutME from '../../components/MessageAboutMe'

export default function AboutMe(){

    return(<>   
    
    <BodyAndHead title='Carlos|About Me'>
        <header>
        <HeaderNavigation></HeaderNavigation>
        </header>
        <MessageAboutME></MessageAboutME>
    </BodyAndHead>
 </>)

}

    
