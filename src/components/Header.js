import { Link } from "react-router-dom";

function Header(props) {

  return (
    <header>
      <h1>Amiibos App</h1>
      <nav>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/amiibos">
          <div>ALL AMIIBOS</div>
        </Link>
        <Link to="/mycollection">
          <div>MY AMIIBOS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;