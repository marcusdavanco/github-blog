import { Card } from "../../components/Card";
import { SearchInput } from "../../components/SearchInput";
import { HomeContainer, CardsContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>

      <main>
        <SearchInput />
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </main>
    </HomeContainer>
  );
}
