

import HeaderWhitMenu from '../components/Header'
import ContenInfo from '../components/ContenInfo'
import PhoneFigure from '../components/PhoneFigure'

import { URLS, TEXTINFO} from '../configData'
import BodyAndHead from '../components/BodyAndHead'
import MainLayout from '../styles/layoutConfig'
export default function Home() {



  return (
    <>
    
        <BodyAndHead title='Carlos|Home'>
            <header>
                <HeaderWhitMenu toAbout="AboutMe"></HeaderWhitMenu>
            </header>
            <main className="home-main">
                <div>
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
