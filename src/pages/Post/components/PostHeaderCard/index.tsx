import { PostHeaderCardContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LinkButton } from "../../../../components/LinkButton";

export function PostHeaderCard() {
  const theme = useTheme();

  return (
    <PostHeaderCardContainer>
      <div>
        <header>
          <LinkButton text="voltar" link="/" />
          <LinkButton
            text="github"
            link="http://www.github.com/marcusdavanco"
            icon={
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color={theme?.["blue"]}
                size="sm"
              />
            }
          />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>marcusdavanco</a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBuilding}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>Serendip Software</a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUserGroup}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>32 seguidores</a>
          </div>
        </div>
      </div>
    </PostHeaderCardContainer>
  );
}
