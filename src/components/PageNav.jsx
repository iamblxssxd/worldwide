import { NavLink } from 'react-router-dom';

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/app'>Go to the app</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

