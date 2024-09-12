import './css/nav.css';
import NavNotice from './NavNotice.jsx';
import NavMessage from './NavMessage.jsx';
import NavAvatar from './NavAvatar.jsx';
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import { useAuth0 } from '@auth0/auth0-react';

function Nav() {
	const { isAuthenticated } = useAuth0();

  	return (
    <nav className="header-nav ms-auto ">
    	 <ul className="d-flex align-items-center">
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
    	 	<NavNotice />
    	 	<NavMessage  />
    	 	<NavAvatar />
    	 </ul>
    </nav>
  );
}

export default Nav;
