import styled from 'styled-components'

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;

  div {
    max-width: 52rem;
    width: 100%;
  }
`
export const Publications = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS['base-span']};
  }
`
export const InputContainer = styled.div`
  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.COLORS['base-border']};
    background-color: ${({ theme }) => theme.COLORS['base-input']};
    color: ${({ theme }) => theme.COLORS['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS['base-label']};
    }
  }
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 52rem;
  margin: 3rem auto 14rem;

  a {
    background-color: ${({ theme }) => theme.COLORS['base-post']};
    max-width: 26rem;
    border-radius: 0.625rem;
    text-decoration: none;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;

    padding: 2rem;

    &:hover {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS['base-label']};
    }
  }
`

export const Container = styled.div``

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
