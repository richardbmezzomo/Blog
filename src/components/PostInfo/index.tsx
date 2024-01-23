import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Header, Title, Bio, Date, Link, Button } from './styles'

export const PostInfo = () => {
  return (
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
  )
}
