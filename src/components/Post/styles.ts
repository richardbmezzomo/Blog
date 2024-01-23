import styled from 'styled-components'

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 52rem;
  margin: 3rem auto 14rem;
`

export const Container = styled.div`
  max-width: 26rem;
  background-color: ${({ theme }) => theme.COLORS['base-post']};
  padding: 2rem;
  border-radius: 0.625rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS['base-title']};
  }

  span {
    color: ${({ theme }) => theme.COLORS['base-span']};
    font-size: 0.875rem;
    width: 6rem;
  }
`

export const Content = styled.p`
  padding: 1rem 0;
`
