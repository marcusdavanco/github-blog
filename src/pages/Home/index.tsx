import { Card } from "../../components/Card";
import { HeaderCard } from "../../components/HeaderCard";
import { SearchInput } from "../../components/SearchInput";
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
