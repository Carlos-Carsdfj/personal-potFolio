import {useEffect, useState, useRef} from 'react'

export default function useNearScreen ({ distance = '0px' } = {} ) {

  
    const [isNearScreen, setShow] = useState(false)
    
    const fromRef = useRef()

    useEffect(() => {

        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {

                console.log('esta muestra')
                setShow(true)

               observer.disconnect()
            }else{
                setShow(false)
            }

            
        }
    
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '0px'
            // 'threshold: 0.8'
        })

         observer.observe(fromRef.current)

        return () => observer && observer.disconnect()
    },[setShow])

    return {isNearScreen, fromRef}
}