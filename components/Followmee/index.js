import styles from './Followmee.module.css'
import {LGSOCIAL,URLS} from '../../configData'
import { motion } from 'framer-motion'

export default function Followmee(){

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    return(<>
              <motion.div className={styles.content}
            variants={item}>
                        
                    <ul className={styles.figureList}>
                        <li><a  className={styles.LinkA} href={URLS.TWITTER} target="_blank" ><img className={styles.imgLogo} src={LGSOCIAL.twitter}/></a></li>
                        <li><a className={styles.LinkA} href={URLS.GIT} target="_blank"><img className={styles.imgLogo} src={LGSOCIAL.github}/></a></li>
                        <li><a className={styles.LinkA} href={URLS.LINKEDIN} target="_blank"><img className={styles.imgLogo} src={LGSOCIAL.linkedin}/></a></li>
                    </ul>
                    <p>Follow Me</p>
                </motion.div>
            
    </>)
}