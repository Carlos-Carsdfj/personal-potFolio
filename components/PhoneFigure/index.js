import styles from './PhoneFigure.module.css'


export default function PhoneFigure({linkGit,linkTwitter, linkIn,}){

    return(<>
            <div className={styles.contentFigure}> 
                <div className={styles.figureFondo}>
                    <div className={styles.figureDisplayFondo}>
                        <div className={styles.figureSquareContent}>
                            <div className={styles.figureSquare}>
                                <p className="pElement"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z"/></svg></p>
                                <ul className={styles.figureList}>
                                    <li><a href={linkTwitter} target="_blank" > <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg></a></li>
                                    <li><a href={linkIn} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"   viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                                    </li>
                                    <li><a href={linkGit} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <span className={styles.figureMenu}></span>
                    </div>
                </div>
            </div>
            <style global jsx>{`
                    

                .pElement {  
                    margin-top: 10px;
                    display:inline;
                    height:50px; 
                    animation:6s linear 0s normal none infinite change;
                    -webkit-animation:6s linear 0s normal none infinite change;
                    -moz-animation:6s linear 0s normal none infinite change;
                    -o-animation:6s linear 0s normal none infinite change; 
                }

                .pElement svg{
                    transform: rotate(10deg);
                    

                }
                

                @-webkit-keyframes change {
                0%   {margin-top:10px;}
                15%  {margin-top:10px;}
                25%  {margin-top:70px;}
                40%  {margin-top:70px;}
                50%  {margin-top:140px;}
                65%  {margin-top:140px;}
                75%  {margin-top:70px;}
                85%  {margin-top:70px;}
                100% {margin-top:10;}
                }
                @keyframes change {
                0%   {margin-top:10px;}
                15%  {margin-top:10px;}
                25%  {margin-top:70px;}
                40%  {margin-top:70px;}
                50%  {margin-top:140px;}
                65%  {margin-top:140px;}
                75%  {margin-top:70px;}
                85%  {margin-top:70px;}
                100% {margin-top:10;}
                } 

                    
            
            `}</style>
    </>)


}