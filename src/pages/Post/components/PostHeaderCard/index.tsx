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
import { Issue } from "../../../../context/issuesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
interface PostHeaderCardProps {
  currentIssue: Issue;
}

export function PostHeaderCard({ currentIssue }: PostHeaderCardProps) {
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
            link={`http://www.github.com/marcusdavanco/blog/issues/${currentIssue.number}`}
            icon={
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color={theme?.["blue"]}
                size="sm"
              />
            }
          />
        </header>
        <h2>{currentIssue.title}</h2>
        <div>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>{currentIssue.user?.login}</a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCalendar}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>
              {currentIssue.created_at &&
                formatDistanceToNow(new Date(currentIssue.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              color={theme?.["base-label"]}
              size="1x"
            />
            <a>
              {`${currentIssue.comments || 0} comentário${
                currentIssue.comments === 1 ? "" : "s"
              }`}
            </a>
          </div>
        </div>
      </div>
    </PostHeaderCardContainer>
  );
}
