import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'

export default function PhotoDelete({ id }) {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')

    if (!confirm) return

    const { url, options } = PHOTO_DELETE(id)
    const { response } = await request(url, options)

    if (response.ok) window.location.reload()
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Carregando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  )
}
