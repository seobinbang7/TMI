import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/writing"></Link>
      </li>
      <li>
        <Link to="/main"></Link>
      </li>
      <li>
        <Link to="/myPage"></Link>
      </li>
    </ul>
  );
}

export default Nav;