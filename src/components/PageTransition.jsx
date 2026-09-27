import React from 'react'
import {motion} from 'framer-motion'
import { MdOpacity } from 'react-icons/md'
function PageTransition({children}) {
  return (
    <motion.div
    initial={{opacity:0 , y:20}}
    animate={{opacity:1 ,y :0}}
    exit={{opacity:0 ,y :20}}
    transition={{duration:5.3  }}
    >
        {children}
    </motion.div>
  )
}

export default PageTransition