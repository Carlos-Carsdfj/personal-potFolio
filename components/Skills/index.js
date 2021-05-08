import styles from './Skills.module.css'
import {SKILLS} from '../../configData'
import { motion } from "framer-motion";



export default function Skills(){




    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 1,
            staggerChildren: 0.3
          }
        }
      };

      const item = {
        hidden: { x: -20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
      };
  
    return(<>
        <motion.div 
        variants={container}
            initial="hidden"
            animate="visible" 
        className={styles.contentSkills}>
            { SKILLS.map(({url},index)=>{
                return(
                    <motion.div key={index}                    
                    variants={item}
                        className={styles.skill}>                        
                        <img src={url} className={styles.skillIcon}></img>
                    </motion.div>
                )
            })

            }

        </motion.div>
    </>)


}
