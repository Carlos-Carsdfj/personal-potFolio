import { motion } from "framer-motion";
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: -5000,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];


export const MenuItem = ({ i,icon,title, Navref }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (<>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    > <Link href={Navref}><a className="icons">
      <div className="icon-placeholder"  >
        <img src={icon}></img>
      </div>
      <div className="text-placeholder"  >
        <p>{title}</p>
      </div>
      </a></Link>
    </motion.li>


    <style jsx>{`
            .icon-placeholder {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex: 40px 0;
        margin-right: 20px;
        z-index:10;
              
       
        }
        .icons {
          width:200px;
          display:flex;
          align-items:center;
        }
        .icon-placeholder img{

          margin:auto;
        }  
        .text-placeholder p{
          color: white;
          
        }
        .text-placeholder {
        border-radius: 5px;
        padding:auto;
        width: 200px;
        height: 20px;
        flex: 1;
      z-index:10;
       
        }
    `}</style>
  </>);
};