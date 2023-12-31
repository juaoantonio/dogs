import { useState } from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../Api'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)

    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente algo"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button type="submit" className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
