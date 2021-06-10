import styles from './MessageAboutME.module.css'
import { motion } from 'framer-motion'
import { IMAGES} from '../../../configData'
import useTranslation from "next-translate/useTranslation";

import Skills from '../SkillsAbout'
export default function MessageAboutME(){

    let { t } = useTranslation();

    const variantLogo={
        hidden:{scale:0},
        visible:{scale:1},
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 50
        }
    }

return(<>

    <div className={styles.mainContent}>

     
        <motion.div 
         initial={{ x: -1000 }}
            animate={{  x: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40
            }}
        className={styles.textItem}>
            <motion.p className={styles.item} initial={{ x: -1000 }}
            animate={{  x: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40
            }} >{t("about:textinfo")}</motion.p>
        </motion.div>

         <motion.img 
         variants={variantLogo}
            initial='hidden'
            animate='visible'
            transition='transition'  
             className={styles.imgAbout}
             src={IMAGES.imgPC} >

             </motion.img>
        
             <Skills></Skills>
        
        

    
    </div>
</>)
}