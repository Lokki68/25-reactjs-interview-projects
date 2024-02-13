import {useEffect, useState} from "react";
import styles from './styles.module.css'

export default function ScrollIndicator({url}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const fetchData = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(getUrl)
      const data = await response.json()

      if(data.products && data.products.length > 0){
        setData(data.products)
        setLoading(false)
      }

    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }

  };

  useEffect(() => {
    fetchData(url)
  }, [url]);

  const handlePercentage = () => {
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled/height) * 100)
  };

  useEffect(() => {
    window.addEventListener('scroll', handlePercentage)

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, []);

  console.log(scrollPercentage)

  if(loading) {
    return <div>Loading</div>
  }

  if(errorMsg !== '') {
    return <div>Error message : {errorMsg}</div>
  }

  return (
      <div >
        <div className={styles.topContainer}>
          <h1>Custom Scroll Indicator</h1>
          <div className={styles.scrollProgressTrackingContainer} >
            <div className={styles.currentProgressBar} style={{width: `${scrollPercentage}%`}} ></div>
          </div>
        </div>
        <div className={styles.dataContainer} >
          {
            data.length > 0
                ? data.map(dataItem => <p key={data.id}>{dataItem.title}</p>)
                : null
          }
        </div>
      </div >
  );
}

