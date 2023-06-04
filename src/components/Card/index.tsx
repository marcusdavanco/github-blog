import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export function Card({ title, body, created_at, number }: CardProps) {
  const publishedDateRelativeFromNow = formatDistanceToNow(
    new Date(created_at),
    { locale: ptBR, addSuffix: true }
  );

  return (
    <Link to={`/post/${number}`}>
      <CardContainer>
        <header>
          <h2>{title}</h2>
          <span>{publishedDateRelativeFromNow}</span>
        </header>
        <p>{body}</p>
      </CardContainer>
    </Link>
  );
}
