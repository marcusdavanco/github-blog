import { SearchInputContainer } from "./styles";

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <p>Publicações</p>
        <span>6 publicações</span>
      </header>
      <input placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  );
}
