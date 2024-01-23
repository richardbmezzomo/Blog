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
export const Header = styled.header`
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
