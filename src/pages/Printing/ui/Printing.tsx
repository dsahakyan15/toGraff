import { useEffect, useReducer, useRef } from 'react'
import styles from './Printing.module.css'
import HeaderUni from 'widgets/HeaderUni'
import ProductCard from 'widgets/ProductCard'
import { useAppDispatch } from 'entities/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import type { RootState } from 'entities/redux/store'
import { fetchCategories } from 'entities/redux/productsSlice'
import type { product } from 'entities/redux/interfaces'
import { useLocation } from 'react-router-dom'



const Printing = (props: any) => {
<<<<<<< HEAD

=======
const tem = useRef(null);
>>>>>>> master
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => {
    return state.products.categories
  })
  const loading = useSelector((state: RootState) => {
    return state.products.loading
  })
  const error = useSelector((state: RootState) => {
    return state.products.error
  })
  const printingProducts = categories.find((category) => category?.id === 'printings')?.products || []
  const photoProducts = categories.find((category) => category?.id === 'photos')?.products || []



<<<<<<< HEAD
const {hash} = useLocation()

useEffect(() => {
  if(hash){
    const element = document.getElementById(hash.replace('#',''));
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }
},[hash])
=======
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])
>>>>>>> master


  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])


  return (
    <div className={styles.Printing}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Полиграфия</span>

          <span className={styles.bannerBio}>Ксерокс и производство печатной продукций:
            визитки, буклеты, листовки и так далеe.</span>
        </div>
        <div className={styles.products}>
          <div className={styles.productsPrinting}>
            {
              loading ? <>loading FLAG</> :
                <>{
                  printingProducts.map((product: product) => {
                    return <ProductCard
                      image={product.image || ''}
                      images={product.images}
                      key={product.id}
                      id={product.id || 0}
                      name={product.name || ''}
                      price={product.price || 0}
<<<<<<< HEAD
                      subtitle={product.subtitle || ''} />
=======
                      subtitle={product.subtitle || ''} similar={null} />
>>>>>>> master

                  })
                }</>

            }
          </div>
          <div className={styles.line}></div>
          <span className={styles.photoTitle}>Фото</span>
          <div id="photo" className={styles.productsPhoto}>
            {
              loading ? <>loading FLAG</> :
                <>{
                  photoProducts.map((product: product) => {
                    return <ProductCard
                      image={product.image || ''}
                      images={product.images}
                      id={product.id || 0}
                      key={product.id}
                      name={product.name || ''}
                      price={product.price || 0}
<<<<<<< HEAD
                      subtitle={product.subtitle || ''} />
=======
                      subtitle={product.subtitle || ''}
                      similar={null} />
>>>>>>> master

                  })
                }</>

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Printing

