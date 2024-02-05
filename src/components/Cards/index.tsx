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
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Issue {
  title: string
  body: string
  created_at: string
  number: number
}
interface ApiResponse {
  total_count: number
  items: Issue[]
}

const schema = z.object({
  searchTerm: z.string().optional(),
})

export const Cards = () => {
  const [response, setResponse] = useState<ApiResponse>({
    total_count: 0,
    items: [],
  })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  const loadIssues = async (data: { searchTerm?: string }) => {
    const response = await api.get(
      `/search/issues?q=${data.searchTerm ? data.searchTerm + '+' : ''}repo:richardmezzomo/github-blog`,
    )

    setResponse(response.data)
  }

  const onSubmit = (data: { searchTerm?: string }) => {
    loadIssues(data)
  }

  useEffect(() => {
    loadIssues({})
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
            <span>{response.total_count} publicações</span>
          </Publications>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <input
                {...register('searchTerm')}
                type="text"
                placeholder="Buscar conteúdo"
              />
            </InputContainer>
          </form>
        </div>
      </SearchContainer>
      <Posts>
        {response.items.map((issue) => {
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
