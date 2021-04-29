import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const navegations = [{icon:'/homeIcon.svg',title:'Home',iColor:2, ref:'/'},
{icon:'/aboutIcon.svg',title:'About Me',iColor:3, ref:'/AboutMe'},
{icon:'/projectsIcon.svg',title:'Projects',iColor:3, ref:'/Projects'},
{icon:'/contactIcon.svg',title:'Contact Me',iColor:3, ref:'/Contact'}



]
export const Navigation = () => ( <>
  <motion.ul className="navigation" variants={variants}>
    {navegations.map((nav,index) => (
      <MenuItem i={nav.iColor} title={nav.title} icon={nav.icon} key={index} Navref={nav.ref} />
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
