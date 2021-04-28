import styles from './PhoneFigure.module.css'
import { motion } from 'framer-motion'


export default function PhoneFigure({linkGit="",linkTwitter="", linkIn="",}){

   
    return(<>
            <motion.div 
            initial={{ scale: 0 }}
            animate={{  scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className={styles.contentFigure}> 
                <div className={styles.figureCircle}>
                    <div className={styles.figureCircle2}>
                        <h2 className={styles.contentImage}> FJ</h2>
                    </div>
                </div>
    
            
            </motion.div>
            
    </>)


}