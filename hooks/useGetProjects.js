import { useEffect, useState } from 'react'
import {getDatabase} from '../firebase/projects'


export default function useGetProjects(){

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        setLoading(true)
        beAnony()
        .then(

            getDatabase()
            .then(projects =>{
                
                setProjects(projects)
                setLoading(false)
            }
    
            )
            .catch(error=>{
                setLoading(false)
    
                console.log(error)
            })
        )
        
        
    }, [setProjects])



    
    return {
        projects,
        isLoading:loading
    }
}