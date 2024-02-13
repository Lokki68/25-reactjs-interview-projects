import {useEffect, useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import styles from './styles.module.css'

export default function ImageSlider({url, limit=10, page = 1}) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if(data) {
        setImages(data)
        setLoading(false)
      }
    } catch (e) {
      setErrorMessage(e.message)
      setLoading(false)
    }
  }

  const handlePreviousClick = () => {
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1)
  }
  const handleNextClick = () => {
    setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide +1)

  }

  useEffect(() => {
    if(url !== '') fetchImages(url)
  }, [url]);

  if(loading) {
    return <div>Loading data ! Please wait</div>
  }

  if(errorMessage !== '') {
    return <div>Errors occured: {errorMessage}</div>
  }

  return (
      <div className={styles.container} >
        <BsArrowLeftCircleFill onClick={handlePreviousClick} className={`${styles.arrow} ${styles.arrowLeft}`}/>
        {
          images && images.length > 0
              ? (
                  images.map((image, index) => (
                      <img
                        key={image.id}
                        src={image.download_url}
                        alt={image.author}
                        className={`${styles.currentImage}  ${currentSlide !== index ? styles.hideCurrentImage : null}`}
                      />
                  ))
              )
              : null
        }
        <BsArrowRightCircleFill onClick={handleNextClick} className={`${styles.arrow} ${styles.arrowRight}`}/>
        <span className={styles.circleIndicators}>
          {
            images && images.length
                ? images.map((_, index) => (
                    <button
                        key={index}
                        className={ `
                          ${styles.currentIndicator} 
                          ${currentSlide !== index
                            ? styles.inactiveIndicator
                            : null}`
                          }
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))
                : null
          }
        </span>
      </div >
  );
}

