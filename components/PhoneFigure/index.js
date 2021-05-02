import styles from './PhoneFigure.module.css'
import { motion } from 'framer-motion'
import Skills from '../Skills'

export default function PhoneFigure({linkGit="",linkTwitter="", linkIn="",}){

   
    return(<div className={styles.contentImages}>
            <motion.img 
            initial={{ scale: 0 }}
            animate={{  scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            
            className={styles.ImgSvg} src="/pc.svg">

           
            
            </motion.img>
            <Skills></Skills>
            
    </div>)


}