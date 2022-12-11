import { useState } from 'react';
/* import reactLogo from './assets/react.svg' */
import './header.css';
import Menu from './menu';

function Header() {
  const [count, setCount] = useState(0)

  return (
  <>
   <strong><span className="spanStar">STAR</span> <span>BANK</span></strong>
   <div className="containerMenu">
     <button className="button-header" type="button">LOGIN</button>
     <Menu />
   </div>
  </>
  )
}

export default Header
