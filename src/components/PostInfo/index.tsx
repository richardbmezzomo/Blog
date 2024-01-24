import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
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
import { NavLink } from 'react-router-dom'

interface Issue {
  title: string
  body: string
  created_at: string
  number: number
}

interface PostInfoProps {
  issueNumber: string
}

export const PostInfo: React.FC<PostInfoProps> = ({ issueNumber }) => {
  const [issue, setIssue] = useState<Issue | null>(null)

  useEffect(() => {
    const loadIssue = async () => {
      const response = await api.get(
        `/repos/richardmezzomo/github-blog/issues/${issueNumber}`,
      )
      setIssue(response.data)
    }

    loadIssue()
  }, [issueNumber])

  if (!issue) {
    return null
  }

  return (
    <>
      <Container>
        <Header>
          <Button>
            <FontAwesomeIcon icon={faChevronLeft} />
            <div>
              <NavLink to={'/'}>Voltar</NavLink>
            </div>
          </Button>
          <Link
            href={`https://github.com/richardmezzomo/github-blog/issues/${issue.number}`}
            target="_blank"
          >
            <span>ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </Header>
        <Title>{issue.title}</Title>
        <Bio>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>richardmezzomo</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <Date>{issue.created_at}</Date>
          </div>
        </Bio>
      </Container>
      <PostContent>
        <p>{issue.body}</p>
      </PostContent>
    </>
  )
}
