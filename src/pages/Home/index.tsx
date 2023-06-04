import { useContext } from "react";
import { Card } from "../../components/Card";
import { SearchInput } from "../../components/SearchInput";
import { HeaderCard } from "./components/HeaderCard";
import { HomeContainer, CardsContainer } from "./styles";
import { IssuesContext } from "../../context/issuesContext";

export function Home() {
  const { issues } = useContext(IssuesContext);

  return (
    <HomeContainer>
      <main>
        <HeaderCard />
        <SearchInput />
        <CardsContainer>
          {issues?.map((issue) => (
            <Card
              key={issue.number}
              body={issue.body}
              title={issue.title}
              created_at={issue.created_at}
              number={issue.number}
            />
          ))}
        </CardsContainer>
      </main>
    </HomeContainer>
  );
}
