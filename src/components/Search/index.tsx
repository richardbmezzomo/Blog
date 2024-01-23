import { SearchContainer, Header, InputContainer } from './styles'

export const Search = () => {
  return (
    <SearchContainer>
      <div>
        <Header>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </Header>
        <InputContainer>
          <input type="text" placeholder="Buscar conteúdo" />
        </InputContainer>
      </div>
    </SearchContainer>
  )
}
