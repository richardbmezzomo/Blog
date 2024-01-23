import styled from 'styled-components'

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 52rem;
  margin: 3rem auto 14rem;
`

export const Container = styled.a`
  max-width: 26rem;
  background-color: ${({ theme }) => theme.COLORS['base-post']};
  padding: 2rem;
  border-radius: 0.625rem;
  text-decoration: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS['base-label']};
  }
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
  color: ${({ theme }) => theme.COLORS['base-text']};
`
