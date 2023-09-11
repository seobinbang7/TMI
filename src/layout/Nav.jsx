import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li>
        <Link href="/writing"></Link>
      </li>
      <li>
        <Link href="/main"></Link>
      </li>
      <li>
        <Link href="/myPage"></Link>
      </li>
    </ul>
  );
}

export default Nav;
