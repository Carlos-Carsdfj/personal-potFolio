
import styles from './ContenInfo.module.css'

const textDefault = ['do you should', 'put something', 'here for show right?']

export default function ContenInfo({textInLiner = textDefault }){


    return(<>
             <div className={styles.contentInfo}> 
                {textInLiner.map((text, index)=><p key={index}>{text}</p>)}
                <p>   see some of my work :  <a href="" className="projects-nav">Projects</a> </p>
                
               
            </div>
    </>)
}