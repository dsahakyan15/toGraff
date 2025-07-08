import React, { useEffect } from 'react'
import styles from './WoodArt.module.css'
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

const WoodArt = () => {
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
    const WoodArtProducts = categories.find((category) => category?.id === 'woodArt')?.products || [];


    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])




    return (
        <div className={styles.WoodArt}>
            <HeaderUni />
            <div className={styles.container}>
                <div className={styles.banner}>
                    <span className={styles.bannerTitle}><img src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/woodArtWhite.svg?alt=media&token=e0ec8cb1-1657-4fe0-82f3-30205ceece9b" alt="logo" /></span>

                    <span className={styles.bannerBio}>Деревянные изделия
<<<<<<< HEAD
                         <br/> в подарок себе или родным.</span>
=======
                        <br /> в подарок себе или родным.</span>
>>>>>>> master
                </div>
                <div className={styles.products}>
                    <div className={styles.productsWoodArt}>
                        {
                            loading ? <>loading FLAG</> :
                                <>{
                                    WoodArtProducts.map((product: product) => {
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
                                            similar={product.similar || null} />
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

export default WoodArt