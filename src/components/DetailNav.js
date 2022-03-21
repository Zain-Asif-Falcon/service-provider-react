import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  return (
    <nav className="detail-nav">
      <div className="flex-container">
        <div>
          <ul>
            <li>
              <h3 onClick={() => history.push("/")}>Service Provider</h3>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Features</li>
            <li>Enterprise</li>
            <li>Support</li>
            <li>Pricing</li>
            <Button variant="outlined">Sign up</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
