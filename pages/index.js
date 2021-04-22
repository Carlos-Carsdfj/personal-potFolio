

import HeaderWhitMenu from '../components/Header'
import ContenInfo from '../components/ContenInfo'
import PhoneFigure from '../components/PhoneFigure'
import useBackground from '../hooks/useBackground/useBackground'
import Head from 'next/head'

import { useEffect } from 'react'


export default function Home() {

  
  const textForShow = [  'Hi, Im Carlos Ferreira '
                ,   'a web developer' , ' who loves what he does' ]

  const linkedin = "https://www.linkedin.com/in/carlos-ferreira-jardin-799bb0145/"
  const twitter = "https://twitter.com/ferreira_jardin"
  const git = "https://github.com/Carlos-Carsdfj"
  const {   primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
    tertiaryColor,
    setTertiaryColor,
    quaternaryColor,
    setQuatenaryColor} = useBackground()

//      setPrimaryColor('#0cb9c1')
    
// setSecondaryColor('#41afa5')
      
// setTertiaryColor('#1cc7d0')

// setQuatenaryColor('#005670')

// const handlerEnterProject=()=>{
    //     primary({primary :'#f9c74f',secondary:'#f8961e',tertiary:'#f3722c',quaternary:'#f94144'})
    // }
    // const handlerEnterContac=()=>{
    //     primary({primary :'#FF5733',secondary:'#C70039',tertiary:'#900C3F',quaternary:'#581845'})
    // }

    useEffect(() => {
      setPrimaryColor('#ff5733')
    
      setSecondaryColor('#c70039')
      
      setTertiaryColor('#ac063c')
      
      setQuatenaryColor('#900c3f')
    
    }, [])
 



  
  return (
    <>
    <Head>  
        <title>Carlos|portfolio</title> 
        <link rel="icon" href="/myIcon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap" rel="stylesheet"></link>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
    </Head>

    <body>
        <header>
            <HeaderWhitMenu ></HeaderWhitMenu>
        </header>
        <main>
            <div>
                <ContenInfo textInLiner={textForShow}></ContenInfo>
                <PhoneFigure linkGit={git} linkTwitter={twitter} linkIn={linkedin} ></PhoneFigure>
      
            </div>
        </main>
    </body>

    <style global jsx>{`
    


    body{

  
--primary-color: ${primaryColor}; 
--secondary-color: ${secondaryColor};
--tertiary-color:   ${tertiaryColor};
--quaternary-color:  ${quaternaryColor};

--color-border: #d4dbdc;
--color-display : linear-gradient(120deg, gray, white);
--color-border2: #181719;
background: 
   linear-gradient(var(--color-display), transparent),
   linear-gradient(90deg, var(--secondary-color), transparent),
   linear-gradient(-90deg, var(--color-border2), transparent);
   
   transition: --primary-color 2s linear;
   transition: --secondary-color 2s linear;
   transition: --tertiary-color 2s linear;
   transition: --quaternary-color 2s linear;
   /* transition-property: background;
   transition-duration: 4s;
   -webkit-transition-property: background;
   -webkit-transition-duration: 4s;
   -moz-transition-property: background;
   -moz-transition-duration: 4s;
   -o-ttransition-property: background;
   -o-transition-duration: 4s;
    */
   
}
    
    `}</style>
    
    </>
  )
}
