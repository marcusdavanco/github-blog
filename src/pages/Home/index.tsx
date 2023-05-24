import { Card } from "../../components/Card";
import { SearchInput } from "../../components/SearchInput";
import { HeaderCard } from "./components/HeaderCard";
import { HomeContainer, CardsContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <main>
        <HeaderCard />
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
