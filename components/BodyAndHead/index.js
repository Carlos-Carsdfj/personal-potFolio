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
    <body>
        {children}
    </body>



    <style global jsx>{`
        
                body{
                    font-family: ${FONTFAMILY.BASE};
                    --primary-color: ${COLORS.PRIMARY}; 
                    --secondary-color: ${COLORS.SECONDARY};
                    --tertiary-color:   ${COLORS.TERTIARY};
                    --quaternary-color:  ${COLORS.QUATERNARY};

                    --color-border: ${COLORS.BORDER};
                    --color-display : ${COLORS.DISPLAY};
                    --color-border2: ${COLORS.BORDER2};
                    background: 
                    linear-gradient(var(--color-display), transparent),
                    linear-gradient(90deg, var(--secondary-color), transparent),
                    linear-gradient(-90deg, var(--color-border2), transparent);
                    margin: 0 10px;
                }
                
        `}</style>

    </>)


}