

import HeaderWhitMenu from '../components/Header'
import ContenInfo from '../components/ContenInfo'
import PhoneFigure from '../components/PhoneFigure'

import { URLS, TEXTINFO} from '../configData'
import BodyAndHead from '../components/BodyAndHead'



export default function Home() {



  return (
    <>
    
        <BodyAndHead title='Carlos|Home'>
            <header>
                <HeaderWhitMenu toAbout="AboutMe"></HeaderWhitMenu>
            </header>
            <main>
                <div>
                    <ContenInfo textInLiner={TEXTINFO} linkGit={URLS.GIT} linkTwitter={URLS.TWITTER} linkIn={URLS.LINKEDIN} ></ContenInfo>
                    <PhoneFigure  ></PhoneFigure>
        
                </div>
            </main>
    
            </BodyAndHead>

    
    </>
  )
}
