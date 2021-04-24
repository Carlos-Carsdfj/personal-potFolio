import styles from './PhoneFigure.module.css'


export default function PhoneFigure({linkGit="",linkTwitter="", linkIn="",}){

    return(<>
            <div className={styles.contentFigure}> 
                <div className={styles.figureCircle}>
                    <div className={styles.figureCircle2}>
                        <h2 className={styles.contentImage}> FJ</h2>
                    </div>
                </div>
            </div>
            
    </>)


}