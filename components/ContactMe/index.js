import ContactForm from './ContactForm'
import styles from './ContactMe.module.css'
import { motion } from 'framer-motion'


export default function ContactMe(){


    const variantContent={
        hidden:{scale:0},
        visible:{scale:1},
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 50
        }
    }

    return(<motion.div className={styles.content}
     variants={variantContent}
            initial='hidden'
            animate='visible'
            transition='transition' >
            <ContactForm></ContactForm>
            
    </motion.div>)
}