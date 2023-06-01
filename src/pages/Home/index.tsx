import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SearchInput } from "../../components/SearchInput";
import { HeaderCard } from "./components/HeaderCard";
import { HomeContainer, CardsContainer } from "./styles";
import { api } from "../../lib/axios";

interface Issue {
  title: string;
  body: string;
  id: number;
  created_at: string;
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues() {
    const { data } = await api.get("/repos/marcusdavanco/blog/issues");
    setIssues(data);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <HomeContainer>
      <main>
        <HeaderCard />
        <SearchInput />
        <CardsContainer>
          {issues.map((issue) => (
            <Card
              key={issue.id}
              body={issue.body}
              title={issue.title}
              created_at={issue.created_at}
            />
          ))}
        </CardsContainer>
      </main>
    </HomeContainer>
  );
}
