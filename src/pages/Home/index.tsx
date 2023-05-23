import { Card } from "../../components/Card";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </HomeContainer>
  );
}
