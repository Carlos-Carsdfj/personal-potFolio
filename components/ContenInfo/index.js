
import styles from './ContenInfo.module.css'
import Link from 'next/link'
const textDefault = ['do you should', 'put something', 'here for show right?']

export default function ContenInfo({textInLiner = textDefault }){


    return(<>
             <div className={styles.contentInfo}> 
                {textInLiner.map((text, index)=><p key={index}>{text}</p>)}
                <p>   see some of my work : <Link href="/"><a className={styles.projectsNav}>Projects</a></Link></p>
                
                
               
            </div>
    </>)
}