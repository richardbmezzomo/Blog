import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Container,
  Header,
  Title,
  Bio,
  Date,
  Link,
  Button,
  PostContent,
} from './styles'

export const PostInfo = () => {
  return (
    <>
      <Container>
        <Header>
          <Button>
            <FontAwesomeIcon icon={faChevronLeft} />
            <div>Voltar</div>
          </Button>
          <Link href="">
            <span>ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Header>
        <Title>JavaScript data types and data structures</Title>
        <Bio>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>richardmezzomo</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <Date>Há 1 dia</Date>
          </div>
        </Bio>
      </Container>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </PostContent>
    </>
  )
}
