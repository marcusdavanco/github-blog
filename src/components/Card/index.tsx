import { CardContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface CardProps {
  title: string;
  body: string;
  created_at: string;
}

export function Card({ title, body, created_at }: CardProps) {
  const publishedDateRelativeFromNow = formatDistanceToNow(
    new Date(created_at),
    { locale: ptBR, addSuffix: true }
  );

  return (
    <CardContainer>
      <header>
        <h2>{title}</h2>
        <span>{publishedDateRelativeFromNow}</span>
      </header>
      <p>{body}</p>
    </CardContainer>
  );
}
