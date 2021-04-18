import Link from 'next/link'
import styles from './Header.module.css'

export default function HeaderWhitMenu({toHome ="/", toProject="", toContac="", toAbout="", primary}){

    const handlerEnterHome=()=>{
        primary({primary :'#0cb9c1',secondary:'#41afa5',tertiary:'#1cc7d0',quaternary:'#005670'})
      
    }

    const handlerlEnterAbout=()=>{
        primary({primary :'#ABDAFC',secondary:'#ACACDE',tertiary:'#C490D1',quaternary:'#B8336A'})
    }
    const handlerEnterProject=()=>{
        primary({primary :'#f9c74f',secondary:'#f8961e',tertiary:'#f3722c',quaternary:'#f94144'})
    }
    const handlerEnterContac=()=>{
        primary({primary :'#FF5733',secondary:'#C70039',tertiary:'#900C3F',quaternary:'#581845'})
    }



    return (<>
            <div className={styles.containerHeader}>
                
                <h2 className={styles.titleItem}>  PORTFOLIO </h2>

                
                <nav className={styles.conNav}>
                    <ul className={styles.listNav}>
                    <Link href={toHome} className={styles.linkNav}><li className={styles.itemList} onMouseEnter={handlerEnterHome} ><a>Home</a></li></Link>
                    <Link href={toAbout} className={styles.linkNav}><li className={styles.itemList} onMouseEnter={handlerlEnterAbout}><a>About</a></li></Link>
                    <Link href={toProject} className={styles.linkNav}><li className={styles.itemList} onMouseEnter={handlerEnterProject}><a>Projects</a></li></Link>
                    <Link href={toContac} className={styles.linkNav}><li className={styles.itemList} onMouseEnter={handlerEnterContac}><a>Contac</a></li></Link>
                    </ul>
                </nav>

                


        </div>


      
    </>)
}