import { string } from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Nav({ name, id }) {
  const aboutURL = `/about/${name}/${id}`;

  const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href={aboutURL}>About</a>
        </li>
      </ul>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
    </div>
  );
}

Nav.propTypes = {
  name: string,
  id: string,
};
