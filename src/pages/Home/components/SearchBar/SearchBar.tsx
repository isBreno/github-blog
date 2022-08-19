import { SearchBarContainer } from "./styles"

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <p>6 publicações</p>
      </div>
      <div>
        <input type="text" placeholder="Buscar conteúdo" />
      </div>
    </SearchBarContainer>
  );
}