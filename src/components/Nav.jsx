import './css/nav.css';
import NavNotice from './NavNotice.jsx';
import NavMessage from './NavMessage.jsx';
import NavAvatar from './NavAvatar.jsx';

function Nav() {
  return (
    <nav className="header-nav ms-auto ">
    	 <ul className="d-flex align-items-center">
    	 	<NavNotice />
    	 	<NavMessage  />
    	 	<NavAvatar />
    	 </ul>
    </nav>
  );
}

export default Nav;
