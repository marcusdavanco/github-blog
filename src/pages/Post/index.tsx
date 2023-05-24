import { PostHeaderCard } from "./components/PostHeaderCard";
import { PostContainer, PostContent } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <PostHeaderCard />
      <PostContent>
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>{" "}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>

        <span>Dynamic typing</span>

        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
        <code>
          let foo = 42; // foo is now a number
          <br />
          foo = ‘bar’; // foo is now a string
          <br />
          foo = true; // foo is now a boolean
          <br />
        </code>
      </PostContent>
    </PostContainer>
  );
}
