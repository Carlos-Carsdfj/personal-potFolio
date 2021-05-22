import styles from './SkillsAbout.module.css'
import {SKILLS} from '../../../configData'
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
                    <motion.img key={index}                    
                    variants={item}
                        
                        src={url} className={styles.skillIcon}>                        
                        
                    </motion.img>
                )
            })

            }

        </motion.div>
    </>)


}
