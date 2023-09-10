import { Link } from 'react-router-dom';
import { FramerLogo } from './Logo';

function Heading() {
  return (
    <h1>
      <Link to="/">
        <FramerLogo size={60} />
      </Link>
    </h1>
  );
}

export default Heading;
