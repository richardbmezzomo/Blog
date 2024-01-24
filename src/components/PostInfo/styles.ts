import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  max-width: 52rem;
  background: ${({ theme }) => theme.COLORS['base-profile']};
  border-radius: 0.625rem;
  margin: -6rem auto 0;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.COLORS.blue};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  transition: filter 0.2s;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.blue};
  }

  &:hover {
    filter: brightness(0.8);
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.blue};

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    transition: filter 0.2s;
  }

  &:hover {
    filter: brightness(0.8);
  }
`

export const Title = styled.h1`
  padding: 1.25rem 0 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS['base-title']};
`

export const Bio = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.COLORS['base-span']};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Date = styled.span``

export const PostContent = styled.p`
  padding: 2.5rem 2rem;
  max-width: 52rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS['base-text']};
`
