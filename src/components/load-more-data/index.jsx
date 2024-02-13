import {useEffect, useState} from "react";
import style from './styles.module.css'

export default function LoadMoreData(props) {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)


  const fetchProducts = async () => {
    try {
      setLoading(true)

      const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count *20}`
      )
      const data = await response.json()

      if(data && data.products.length > 0) {
        setProducts((prevData) => [...prevData, ...data.products])
        setLoading(false)
      }

    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }

  };
  useEffect(() => {
    fetchProducts()
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisabled(true)
  }, [products])

  if(loading) {
    return <div>Loading data ! Please wait.</div>
  }

  if(errorMsg) {
    return <div>Error occured : {errorMsg}</div>
  }

  const loadMoreProducts = () => {
    setCount(count +1)
  };
  return (
      <div className={style.container} >
        <div className={style.productContainer}>
          {
            products && products.length
                ? products.map((product) => (
                    <div key={product.id} className={style.product} >
                      <img src={product.thumbnail}
                           alt={product.title}
                      />
                      <p>{product.title}</p>
                    </div>
                ))
                : <div>No products</div>
          }
        </div>
        <div>
          <button disabled={disabled} onClick={loadMoreProducts} >Load more products</button>
          {
            disabled ? <p>You have reached to 100 products</p> : null
          }
        </div>
      </div >
  );
}

