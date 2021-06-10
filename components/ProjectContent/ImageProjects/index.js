import { IMAGES} from '../../../configData'
import styles from './ImageProjects.module.css'
import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation";
export default function ImageProjects(){
    let {t} = useTranslation()
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
            transition='transition'  className={styles.imgDeveloper} src={IMAGES.imgDeveloper2}></motion.img>




        <div className={styles.textContent}>




        <motion.p 
            initial={{ x: -10 }}
            animate={{  x: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40}} className={styles.text}>{t('projects:textinfo')}</motion.p>
        </div>
    </div>)
}