import { useParams } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'

export const Post = () => {
  const { issueNumber } = useParams<{ issueNumber: string }>()

  return (
    <>
      <PostInfo issueNumber={issueNumber || ''} />
    </>
  )
}
