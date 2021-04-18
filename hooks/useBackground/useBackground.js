import {useState} from 'react'
export default function useBackground(){

    const [primaryColor, setPrimaryColor] = useState('#0cb9c1')
    const [secondaryColor, setSecondaryColor] = useState('#41afa5')
    const [tertiaryColor, setTertiaryColor] = useState('#1cc7d0')
    const [quaternaryColor, setQuatenaryColor] = useState('#005670')


    return{
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        tertiaryColor,
        setTertiaryColor,
        quaternaryColor,
        setQuatenaryColor
    }





}