import styled from 'styled-components'

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2.5rem;
  max-width: 52rem;
  width: 100%;
  margin-top: -6rem;

  background: ${({ theme }) => theme.COLORS['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  img {
    width: 150px;
    height: 150px;
    border-radius: 0.5rem;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    color: ${({ theme }) => theme.COLORS['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.COLORS.blue};
    font-weight: 700;
    font-size: 0.75rem;
    text-decoration: none;
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme.COLORS['base-subtitle']};
    }
  }
`
