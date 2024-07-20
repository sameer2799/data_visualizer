import './css/nav.css';

function Nav() {
  return (
    <li className='nav-item dropdown'>
    <a href="/" className='nav-link nav-icon' data-bs-toggle="dropdown">
      <i className='bi bi-chat-left-text'></i>
      <span className='badge bg-success badge-number'>3</span>
    </a>
  
    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
      <li className='dropdown-header'>
        You have 3 new messages
        <a href="/">
          <span className='badge rounded-pill bg-primary p-2 ms-2'>
            View All
          </span>
        </a>
      </li>

      <li>
        <hr className='dropdown-divider' />
      </li>

      <li className='message-item'>
        <a href="/">
          <img src="assets/img/messages-1.jpg" alt="" className='rounded-circle'/>
          <div>
            <h4>Maria Hudson</h4>
            <p>Veilr asperios et ducimus et mu...</p>
            <p>4 hrs. ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>
      <li className='message-item'>
        <a href="/">
          <img src="assets/img/messages-2.jpg" alt="Message2" className='rounded-circle'/>
          <div>
            <h4>Maria Hudson</h4>
            <p>Veilr asperios et ducimus et mu...</p>
            <p>6 hrs. ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>
      <li className='message-item'>
        <a href="/">
          <img src="assets/img/messages-3.jpg" alt="Message3" className='rounded-circle'/>
          <div>
            <h4>David Muldon</h4>
            <p>Veilr asperios et ducimus et mu...</p>
            <p>7 hrs. ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr className='dropdown-divider' />
      </li>
      <li className='message-item'>
        <a href="/">Show all message</a>
      </li>
    </ul>
  </li>
  );
}

export default Nav;
