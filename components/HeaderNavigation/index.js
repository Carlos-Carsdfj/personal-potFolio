import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


export default function HeaderNavigation(){
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (<>
    <motion.nav 
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className=" contentMenu"
    >
      <motion.div className=" background" variants={sidebar} />
      <Navigation  />
      <MenuToggle  toggle={() => toggleOpen()} />
    </motion.nav>

<style global jsx>{`
   
    .contentMenu{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: auto;
      background:transparent;
      z-index:10;
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 300px;
      background:var(--secondary-color);
      z-index:10;
      
    }

  

`}</style>
</>
  );

  
};
