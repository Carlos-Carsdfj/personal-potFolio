import {COLORS, FONTFAMILY} from '../../styles/layoutConfig'
import Head from 'next/head'


export default function BodyAndHead({children, title}){


    return(<>
       <Head>  
        <title>{title}</title> 
        <link rel="icon" href="/myIcon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap" rel="stylesheet"></link>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
    </Head>
   
       
    



    <style global jsx>{`
        
                body{
                    
                    --primary-color: ${COLORS.PRIMARY}; 
                    --secondary-color: ${COLORS.SECONDARY};
                    --tertiary-color:   ${COLORS.TERTIARY};
                    --quaternary-color:  ${COLORS.QUATERNARY};

                    --color-border: ${COLORS.BORDER};
                    --color-display : ${COLORS.DISPLAY};
                    --color-border2: ${COLORS.BORDER2};
                
                    
                    padding: 0;
                    margin:0; 
                    
                   
                }

              
        `}</style>

    </>)


}