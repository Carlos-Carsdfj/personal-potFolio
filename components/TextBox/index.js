import styles from './TextBox.module.css'
import {MESSAGES} from '../../configData'
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8
      }
    }
  };
const container2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8
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

export default function TextBox(){

    return(<>

        <motion.div  
    variants={container}
    initial="hidden"
    animate="visible"  className={styles.contentMessages}>

        
            {MESSAGES.map((text,index)=>{

                return(

                    <motion.div key={index} variants={container2}
                            className={styles.textBox}>
                        <img className={styles.perfil} src="/photoPerfil.jpg" ></img>
                        <motion.p variants={item} className={styles.message}>{text}</motion.p>
                    </motion.div>
                    
                )
            })
            }

        
        </motion.div>


    </>)
}

