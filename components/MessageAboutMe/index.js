import styles from './MessageAboutME.module.css'
import { motion } from 'framer-motion'
import {MESSAGES, IMAGES} from '../../configData'
import SkillAbout from '../../components/SkillsAbout'
export default function MessageAboutME(){




return(<>

    <main className={styles.mainContent}>

     
        <motion.div 
         initial={{ x: -1000 }}
            animate={{  x: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40
            }}
        className={styles.textItem}>
            {MESSAGES.map((text, index)=><motion.p  initial={{ x: -1000 }}
            animate={{  x: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40
            }} key={index}>{text}</motion.p>)}
        </motion.div>

         <motion.img 
            initial={{ scale: 0 }}
            animate={{  scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }} className={styles.imgAbout}
             src={IMAGES.imgPerson} >

             </motion.img>
        
        
        <SkillAbout></SkillAbout>
        

    
    </main>
</>)
}