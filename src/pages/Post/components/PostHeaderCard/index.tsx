import { PostHeaderCardContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
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
          <LinkButton
            text="voltar"
            link="/"
            icon={
              <FontAwesomeIcon icon={faChevronLeft} color={theme?.["blue"]} />
            }
            iconPosition="left"
          />
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
        <h2>JavaScript data types and data structures</h2>
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
              icon={faCalendar}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>Há 1 dia</a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>5 comentários</a>
          </div>
        </div>
      </div>
    </PostHeaderCardContainer>
  );
}
