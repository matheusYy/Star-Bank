import { motion } from "framer-motion"
import './emBreve.css';
import Elements from "./elementos";
export default function EmBreve() {
 return (
  <aside className="grid-Breve">
   <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       exit={{opacity: 0}}
       className="container-grid-emBreve"
   >
    <Elements />
   </motion.div>
  </aside>
 )
}