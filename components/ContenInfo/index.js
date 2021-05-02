
import styles from './ContenInfo.module.css'
import Link from 'next/link'
import Followmee from '../Followmee'
import { motion } from 'framer-motion'
import {ICONS,TEXTINFO} from '../../configData'
const textDefault = ['do you should', 'put something', 'here for show right?']

export default function ContenInfo(){

    const container = {
        hidden: { opacity: 1, x:-20  },
        visible: {
          opacity: 1,
          x:0,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }




    return(<>
             <motion.div 
             variants={container}
             initial='hidden'
             animate='visible'
             className={styles.contentInfo}> 
      
                {TEXTINFO.map((text, index)=><motion.p  variants={item} key={index}>{text}</motion.p>)}
                <motion.p variants={item} >see some of my work : <Link href="/"><a><img className={styles.imgClass} src ={ICONS.folder} /></a></Link></motion.p> 
            
            
                <Followmee></Followmee>
            </motion.div>

    </>)
}