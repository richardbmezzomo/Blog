import { Cover } from '../../components/Cover'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Container } from './styles'

export const Posts = () => {
  return (
    <Container>
      <Cover />
      <Profile />
      <Search />
      <Post />
    </Container>
  )
}
