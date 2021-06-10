import {useRouter} from 'next/router'
import {ICONS} from '../../configData'
export default function SetupLang() {
    
   

    const router = useRouter()
    const {locale} = router

    const handlerChange = (e)=>{
        
        
        
        router.push(router.pathname,router.pathname,{
            locale:e.target.value
        })
        
        
    }
    
    return (<>
        <select onChange={handlerChange} className='lang-select'>
            <option value='es'>Español</option> 
           { locale==='en'? <option value='en' selected >English</option>:<option value='en'  >English</option>}
        </select>

    

    <style global jsx >{`


    .lang-select{
        position:absolute;
        
        height:20px;
        top:10px;
        left:5px;
        background-color:white;
    }

    `}</style>
    </>
    
    )
}
