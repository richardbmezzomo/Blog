import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Container,
  Header,
  Title,
  Bio,
  Link,
  Button,
  PostContent,
} from './styles'
import { NavLink } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

interface Issue {
  title: string
  body: string
  created_at: string
  number: number
  comments: number
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

  function formatTimeAgo(date: Date) {
    let timeAgo = formatDistance(date, new Date(), {
      addSuffix: true,
      locale: ptBR,
    })
    timeAgo = timeAgo.replace('cerca de ', '')
    return timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1)
  }

  const createdAt = formatTimeAgo(new Date(issue.created_at))
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
            <span>{createdAt}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments} comentários</span>
          </div>
        </Bio>
      </Container>
      <PostContent>
        <Markdown>{issue.body}</Markdown>
      </PostContent>
    </>
  )
}
