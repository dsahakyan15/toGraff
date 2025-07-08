import React, { useEffect } from 'react'
import styles from './Stamps.module.css'
import HeaderUni from 'widgets/HeaderUni'
<<<<<<< HEAD
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { RootState } from 'entitles/redux/store';
import { useSelector } from 'react-redux';
import { product } from 'entitles/redux/interfaces'
import ProductCard from 'widgets/ProductCard';
import { fetchCategories } from 'entitles/redux/productsSlice';
=======
import { useAppDispatch } from 'entities/hooks/useAppDispatch';
import type { RootState } from 'entities/redux/store';
import { useSelector } from 'react-redux';
import type { product } from 'entities/redux/interfaces'
import ProductCard from 'widgets/ProductCard';
import { fetchCategories } from 'entities/redux/productsSlice';
>>>>>>> master

const Stamps = () => {
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
  const stampsProducts = categories.find((category) => category?.id === 'stamps')?.products || [];


  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])




  return (
    <div className={styles.Stamps}>
<<<<<<< HEAD
        <HeaderUni/>
=======
      <HeaderUni />
>>>>>>> master
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Печать и
            штампы</span>

          <span className={styles.bannerBio}>Изготовление разных видов печатей,
            штампов и факсимиле.</span>
        </div>
        <div className={styles.products}>
          <div className={styles.productsStamps}>
            {
              loading ? <>loading FLAG</> :
                <>{
                  stampsProducts.map((product: product) => {
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
                      subtitle={product.subtitle || ''}
                      similar={null} />
>>>>>>> master

                  })
                }</>

            }
          </div>
<<<<<<< HEAD
          
=======

>>>>>>> master
        </div>
      </div>
    </div>
  )
}

export default Stamps