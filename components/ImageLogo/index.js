import styles from './ImageLogo.module.css'
import { motion } from 'framer-motion'
import {IMAGES} from '../../configData'
import Skills from '../Skills'

export default function ImageLogo(){

    const variantLogo={
        hidden:{scale:0},
        visible:{scale:1},
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 50
        }
    }
   
    return(<div className={styles.contentImages}>
            <motion.img 
            variants={variantLogo}
            initial='hidden'
            animate='visible'
            transition='transition'         
            className={styles.ImgSvg} src={IMAGES.imgPC}>
            </motion.img>
            <Skills></Skills>
            
    </div>)


}