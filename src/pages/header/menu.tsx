import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './header.css';

export default function Menu() {
  return (
   <DropdownMenu.Root>
    <DropdownMenu.Trigger className="icon-menu">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
     <g clipPath="url(#clip0_191_19)">
     <path d="M16.4427 8.06772H1.25176C0.652493 8.06772 0.166687 8.55352 0.166687 9.15279C0.166687 9.75205 0.652493 10.2379 1.25176 10.2379H16.4427C17.042 10.2379 17.5278 9.75205 17.5278 9.15279C17.5278 8.55352 17.042 8.06772 16.4427 8.06772Z" fill="#010400"/>
     <path d="M1.25176 5.17421H16.4427C17.042 5.17421 17.5278 4.68841 17.5278 4.08914C17.5278 3.48988 17.042 3.00407 16.4427 3.00407H1.25176C0.652493 3.00407 0.166687 3.48988 0.166687 4.08914C0.166687 4.68841 0.652493 5.17421 1.25176 5.17421Z" fill="#010400"/>
     <path d="M16.4427 13.1314H1.25176C0.652493 13.1314 0.166687 13.6172 0.166687 14.2164C0.166687 14.8157 0.652493 15.3015 1.25176 15.3015H16.4427C17.042 15.3015 17.5278 14.8157 17.5278 14.2164C17.5278 13.6172 17.042 13.1314 16.4427 13.1314Z" fill="#010400"/>
     </g>
    </svg>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="drop-content">
        algo
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
   </DropdownMenu.Root>
  );
 };