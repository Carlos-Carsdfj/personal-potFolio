import ContactForm from './ContactForm'
import styles from './ContactMe.module.css'
import { motion } from 'framer-motion'
import SvgComponent from './SvgTablet'
import { useState } from 'react'


export default function ContactMe(){
 
    const [isOn, setIsOn] = useState(false)

    const variantContact={
        hidden:{scale:0, x:'-400px'},
        visible:{scale:1,x:'0'},
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 50
        }
    }
    const variantContent={
        hidden:{scale:0},
        visible:{scale:1},
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 50
        }
    }

    const handlerClick = () =>{


        setIsOn(prev => !prev)
    }

    return(<motion.div className={styles.content}
     variants={variantContent}
            initial='hidden'
            animate='visible'
            transition='transition' >
            <SvgComponent btn={handlerClick} isOn={isOn}></SvgComponent>
            {isOn ? <motion.div className={styles.contactContent} variants={variantContact}
            initial='hidden'
            animate='visible'
            transition='transition'><ContactForm ></ContactForm> </motion.div>  : '' }
            
            
    </motion.div>)
}