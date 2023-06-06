import { HeaderCardContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkButton } from "../../../../components/LinkButton";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface User {
  name: string;
  login: string;
  copany: string | null;
  followers: number;
  bio: string;
}

export function HeaderCard() {
  const [user, setUser] = useState<User>({} as User);
  const theme = useTheme();

  const fetchUser = async () => {
    const response = await api.get("/users/marcusdavanco");
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <HeaderCardContainer>
      <img src={`https://www.github.com/${user.login}.png`} alt={user.name} />
      <div>
        <header>
          <h2>{user.name}</h2>
          <LinkButton
            text="github"
            link={`http://www.github.com/${user.login}`}
            icon={
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color={theme?.["blue"]}
                size="sm"
              />
            }
          />
        </header>
        <p>{user.bio}</p>
        <div>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>{user.login}</a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>{user.copany || "Sem empresa"}</a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUserGroup}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>{user.followers} seguidores</a>
          </div>
        </div>
      </div>
    </HeaderCardContainer>
  );
}
