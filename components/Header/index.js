import Link from 'next/link'
import styles from './Header.module.css'

export default function HeaderWhitMenu({toHome ="/", toProject="", toContac="", toAbout=""}){

 


    return (<>

            <div className={styles.headerDiv}>
                <div className={styles.containerHeader}>
                    
                    <h2 className={styles.titleItem}>  CARSD-FJ </h2>

                    
                    <nav className={styles.conNav}>
                        <ul className={styles.listNav}>
                        <Link href={toHome} className={styles.linkNav}><li className={styles.itemList}  ><a>Home</a> </li></Link>
                        <Link href={toAbout} className={styles.linkNav}><li className={styles.itemList} ><a>About</a></li></Link>
                        <Link href={toProject} className={styles.linkNav}><li className={styles.itemList} ><a>Projects</a></li></Link>
                        <Link href={toContac} className={styles.linkNav}><li className={styles.itemList} ><a>Contac</a></li></Link>
                       
                        </ul>
                    </nav>
                </div>

            </div>
      
    </>)
}