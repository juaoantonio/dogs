import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import styles from './FeedModal.module.css'
import { PHOTOS_GET, PHOTO_GET } from '../../Api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      setModalPhoto(null)
    }
  }

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
