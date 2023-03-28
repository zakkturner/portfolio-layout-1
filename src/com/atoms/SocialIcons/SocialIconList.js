import SocialIcons from "./SocialIcons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialIconList() {
  return (
    <ul className="flex">
      <li className="mr-2">
        <SocialIcons
          fa={faLinkedin}
          url="https://www.linkedin.com/in/zachary-t-1aa273165/"
          txtStyle="light"
        />
      </li>

      <li>
        <SocialIcons
          fa={faGithub}
          url="https://github.com/zakkturner"
          txtStyle="light"
        />
      </li>
    </ul>
  );
}
