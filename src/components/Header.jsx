import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h2 onClick={() => navigate("/")}>İş Takip</h2>
      <nav>
        <NavLink to={"/"}>İş Listesi</NavLink>
        <NavLink to={"/new"}>İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
