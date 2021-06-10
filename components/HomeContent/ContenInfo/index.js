
import styles from './ContenInfo.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {ICONS,TEXTINFO} from '../../../configData'
import useTranslation from "next-translate/useTranslation";
import { useContext, useState, useEffect } from 'react'
// import Context from '../../../context/LangContext'



export default function ContenInfo(){
  let { t } = useTranslation();
    // const {welcome,languages } = useContext(Context) 
   
  
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

      
      const textinfo = t("home:textinfo")

    return(<>
             <motion.div 
             variants={container}
             initial='hidden'
             animate='visible'
             className={styles.contentInfo}> 
      
               <motion.p  variants={item} >{textinfo}</motion.p>
                <motion.p variants={item} >{ t("home:seeProjec") } : <Link href='#projects'><a><img className={styles.imgClass} src ={ICONS.folder} /></a></Link></motion.p> 
            
            
               
            </motion.div>

    </>)
}