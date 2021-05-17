
import useGetProjects from '../../hooks/useGetProjects'
import Project from '../Project'
import useMediaQuery from '../../hooks/useMediaQuery'
import styles from './Projects.module.css'
import Spinner from '../Spinner'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
export default function Projacts(){

       const isPageWide = useMediaQuery('(max-width: 600px)')


       SwiperCore.use([Navigation, Pagination, Scrollbar]);
    const { projects, isLoading} = useGetProjects()



    return(<div className={styles.content}>{

       isPageWide ? 

        isLoading ? <Spinner></Spinner> :
         projects.map((project, index) =>{
                   return <div className={styles.projectResponse} key={index} >
                   <h2>{project.name}</h2>
                   <Project  project ={project}>

                   </Project></div>
                })
                

       
       : <Swiper
      
      slidesPerView={2} spaceBetween={1}
         loop={true} 
         navigation={true} 
       breakpoints={{

  "640": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 4,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 5,
    "spaceBetween": 50
  }
}}  >       
           { isLoading ? <Spinner></Spinner> : 
            projects.map((project, index) =>{
                   return <SwiperSlide  key={index} >
                   
                   
                   <Project  project ={project}></Project>
                   </SwiperSlide>
                })
           }      
           </Swiper>

    }
     
       
    </div >)
}