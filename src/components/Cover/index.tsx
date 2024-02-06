import cover from '../../assets/Cover.svg'
import { CoverContainer } from './styles'
export const Cover = () => {
  return (
    <CoverContainer>
      <img src={cover} alt="" />
    </CoverContainer>
  )
}
