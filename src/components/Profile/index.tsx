import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, ProfileContainer, ProfileContent, ProfileWrap } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export const Profile = () => {
  return (
    <ProfileWrap>
      <ProfileContainer>
        <img src="https://github.com/richardmezzomo.png" alt="" />
        <div>
          <ProfileContent>
            <h1>Richard Mezzomo</h1>
            <a
              href="https://github.com/richardmezzomo"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileContent>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <Infos>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>richardmezzomo</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </Infos>
        </div>
      </ProfileContainer>
    </ProfileWrap>
  )
}
