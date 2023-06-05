import { useContext, useEffect } from "react";
import { PostHeaderCard } from "./components/PostHeaderCard";
import { PostContent } from "./components/PostContent";
import { PostContainer } from "./styles";
import { IssuesContext } from "../../context/issuesContext";
import { useParams } from "react-router-dom";

export function Post() {
  const { fetchIssueById, currentIssue } = useContext(IssuesContext);

  const { postId } = useParams();

  useEffect(() => {
    postId && fetchIssueById(postId);
  }, [fetchIssueById, postId]);

  return (
    <PostContainer>
      <PostHeaderCard currentIssue={currentIssue} />
      {currentIssue ? <PostContent children={currentIssue.body} /> : null}
    </PostContainer>
  );
}
