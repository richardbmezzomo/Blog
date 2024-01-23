import { Cards } from '../../components/Cards'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Container } from './styles'

export const Blog = () => {
  return (
    <Container>
      <Profile />
      <Search />
      <Cards />
    </Container>
  )
}
