import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="flex-container">
        <div>
          <ul>
            <li>
              <h3>Service Provider</h3>
            </li>
            <li>Home</li>
            <li style={{ color: "#7c8184" }}>Link</li>
            <li style={{ color: "#676b6f" }}>Disabled</li>
            <li className="dropdown">
              Dropdown
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
        <div>
          <input placeholder="Search" className="search" />
          <Button variant="outlined" color="success">
            Search
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
