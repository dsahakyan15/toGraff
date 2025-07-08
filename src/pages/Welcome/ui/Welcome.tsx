import styles from './Welcome.module.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Main from 'widgets/Sections/Main'
import Photo from 'widgets/Sections/Photo'
import Printing from 'widgets/Sections/Printing'
import Stamps from 'widgets/Sections/Stamps'
import WoodArt from 'widgets/Sections/WoodArt'
import WelcomeAnimation from 'widgets/WelcomeAnimation'

const Welcome = () => {
<<<<<<< HEAD
    const [animActive, setAnimActive] = useState<Boolean>(false)
=======
    const [animActive, setAnimActive] = useState<boolean>(false)
>>>>>>> master


    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [hash])
    return (
        <>
            {
                animActive ? <WelcomeAnimation setAnimActive={setAnimActive} />
                    :
                    <div className={styles.sections}>
                        <Main id='main'/>
                        <Photo/>
                        <Printing/>
                        <Stamps/>
                        <WoodArt/>
                    </div>
            }
        </>

    )
}

export default Welcome