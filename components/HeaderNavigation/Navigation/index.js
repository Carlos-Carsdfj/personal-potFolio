import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
import {NAVEGATIONICON} from "../../../configData"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    y:0
  },
  closed: {

    y:-500,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};




export const Navigation = () => ( <>
  <motion.ul className="navigation" variants={variants}>
    {NAVEGATIONICON.map((nav,index) => (
      <MenuItem title={nav.title} icon={nav.icon} key={index} Navref={nav.ref} />
      ))}
  </motion.ul>

  <style global jsx>{`
  
      
  .navigation,
  .navigation li {
        margin: 0;
        padding: 0;
      }

      .navigation {
      z-index:10;

        padding: 25px;
        position: absolute;
        top: 100px;
        width: 230px;
      }

      .navigation li {
      z-index:10;

        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      
  
  `}</style>
</>);

const itemIds = [0, 1, 2, 3, 4];
