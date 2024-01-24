import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Container, Header, Content, Posts } from './styles'

interface Issue {
  title: string
  body: string
  created_at: string
  number: number
}

export const Cards = () => {
  const [issues, setIssues] = useState<Issue[]>([])

  const loadIssues = async () => {
    const response = await api.get(
      '/search/issues?q=repo:richardmezzomo/github-blog',
    )

    setIssues(response.data.items)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <Posts>
      {issues.map((issue) => {
        const preview = issue.body.substring(0, 150) + '...'
        return (
          <Link to={`/issue/${issue.number}`} key={issue.number}>
            <Container>
              <Header>
                <h3>{issue.title}</h3>
                <span>{issue.created_at}</span>
              </Header>
              <Content>{preview}</Content>
            </Container>
          </Link>
        )
      })}
    </Posts>
  )
}
