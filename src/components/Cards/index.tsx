import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  Container,
  Header,
  Content,
  Posts,
  Publications,
  SearchContainer,
  InputContainer,
} from './styles'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

  function formatTimeAgo(date: Date) {
    let timeAgo = formatDistance(date, new Date(), {
      addSuffix: true,
      locale: ptBR,
    })
    timeAgo = timeAgo.replace('cerca de ', '')
    return timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1)
  }

  return (
    <>
      <SearchContainer>
        <div>
          <Publications>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </Publications>
          <InputContainer>
            <input type="text" placeholder="Buscar conteúdo" />
          </InputContainer>
        </div>
      </SearchContainer>
      <Posts>
        {issues.map((issue) => {
          const preview = issue.body.substring(0, 150) + '...'
          const createdAt = formatTimeAgo(new Date(issue.created_at))
          return (
            <Link to={`/issue/${issue.number}`} key={issue.number}>
              <Container>
                <Header>
                  <h3>{issue.title}</h3>
                  <span>{createdAt}</span>
                </Header>
                <Content>{preview}</Content>
              </Container>
            </Link>
          )
        })}
      </Posts>
    </>
  )
}
