import apiClient from "../services/api-client";
import "../components/Nav.css";

const Nav = () => {
  return (
    <nav>
      <h1>Voting</h1>
      <button onClick={async () => await apiClient.post("/user/logout").then(()=> window.location.href="/login")}>
        Logout
      </button>
    </nav>
  );
};

export default Nav;
