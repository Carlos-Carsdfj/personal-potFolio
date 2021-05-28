import styles from './MenuNav.module.css'
import { motion } from "framer-motion";
import {NAVEGATIONICON} from "../../configData"

export default function MenuNav(){

    const container = {
        hidden: { opacity: 1,  x:100},
        visible: {
          opacity: 1,
          x:0,
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


    return(
        <motion.div className={styles.menuContent} 
         variants={container}
            initial="hidden"
            animate="visible" 
        > 

            {
                NAVEGATIONICON.map( (nav, index) => <motion.a key={index}                    
                    variants={item} className={styles.btnLinks} href={nav.ref}><img src={nav.icon}/></motion.a>
                )
            }
       



        </motion.div>
       
    )
}