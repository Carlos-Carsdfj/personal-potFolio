

import HeaderWhitMenu from '../components/Header'
import ContenInfo from '../components/ContenInfo'
import PhoneFigure from '../components/PhoneFigure'
import WaveBackground from '../components/WaveBackground'
import { URLS, TEXTINFO} from '../configData'
import BodyAndHead from '../components/BodyAndHead'
import HeaderNavigation from '../components/HeaderNavigation'

export default function Home() {


//<WaveBackground></WaveBackground>
  return (
    <>
    
        <BodyAndHead title='Carlos|Home'>
            <main className="home-main">
                <div>
                    <header>
                      <HeaderNavigation></HeaderNavigation>
                    </header>
                    <ContenInfo textInLiner={TEXTINFO} linkGit={URLS.GIT} linkTwitter={URLS.TWITTER} linkIn={URLS.LINKEDIN} ></ContenInfo>
                    <PhoneFigure  ></PhoneFigure>
                </div>
            </main>
    
         
        </BodyAndHead>

        <style global jsx>{`

                            
a{
  text-decoration-line: none;
  margin:0px;
  color: white;

}


main div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100vh;
}

@media all and (max-width: 890px){

  
    main div{
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        padding-bottom:10px;
      
    }



}
`}</style>
    
    </>
  )
}
