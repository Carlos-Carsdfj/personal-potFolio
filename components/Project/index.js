
import {useState} from 'react'
import styles from './Project.module.css'
import {LGSOCIAL,URLS} from '../../configData'



export default function Projacts({project}){

    const [hover, setHover] = useState(false)
    const display ={ display:hover ? '' : 'none'}
    
    const handlerEnter = ()=>{
        setHover(true)

    }
    const handlerLeave = ()=>{
        setHover(false)

    }

    return(<>   
    
             <div onMouseOver={handlerEnter} onMouseOut={handlerLeave} className={styles.imgContent}>
            <img  src={project.imgDesk} className={styles.imgS} alt={`image from app ${project.name}`}></img>
            <div className={styles.modal} style={display}>
            <a href={project.site} target="_blank"><button className={styles.btn}><img className={styles.logoGit} src='/webSite.svg'/></button></a>
            <a href={project.repository} target="_blank"><button className={styles.btn}><img className={styles.logoGit} src='/githubLogo.svg'/></button></a>
            </div>
            </div> 
              
    </>)
}