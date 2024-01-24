import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, ProfileContainer, ProfileContent, ProfileWrap } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface User {
  name: string
  login: string
  avatar_url: string
  html_url: string
  followers: number
  bio: string
}

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null)

  const loadUser = async () => {
    const response = await api.get('/users/richardmezzomo')

    setUser(response.data)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <ProfileWrap>
      <ProfileContainer>
        <img src={user?.avatar_url} alt="" />
        <div>
          <ProfileContent>
            <h1>{user?.name}</h1>
            <a href={user?.html_url} target="_blank" rel="noreferrer">
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileContent>
          <p>{user?.bio}</p>
          <Infos>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{user?.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user?.followers} seguidores</span>
            </div>
          </Infos>
        </div>
      </ProfileContainer>
    </ProfileWrap>
  )
}
