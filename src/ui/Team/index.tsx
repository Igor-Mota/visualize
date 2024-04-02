import { useState } from 'react'
import { Carousel } from 'primereact/carousel';
import styles from './styles.module.scss'
 
export default function Team (){
    const [isTeam, setIsTeam] = useState([
        {
            id: '1',
            photo: '/images/alex.jpeg',
            name: 'Alex xander',
            function: 'CEO Sofbox',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.'
        },
        {
            id: '2',
            photo: '/images/julia.jpeg',
            name: 'Julia Aann',
            function: 'COO Sofbox',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.'
        },
        {
            id: '3',
            photo: '/images/mac.jpeg',
            name: 'Mac Znder',
            function: 'Manager Sofbox',
            text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.'
        }
    ])
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const teamTemplate = (team:any) => {
        return (
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <img src={team.photo} alt="" />
                </div>
                <div className={styles.cardContent}>
                    <h3>{team.name}</h3>
                    <span className={styles.function}>
                        - {team.function}
                    </span>
                    <p>{team.text}</p>
                </div>
            </div>
        )
    }

  return (
    <div className={styles.team}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.contentText}>
                    <div className={`${styles.bgImageJump} ${styles.left}`}>
                        <div>
                            <img className={styles.imageOne} src="/images/mac.jpeg" alt="" />
                        </div>
                        <div>
                            <img className={styles.imageTwo} src="/images/mac.jpeg" alt="" />
                        </div>
                        <div>
                            <img className={styles.imageThree} src="/images/mac.jpeg" alt="" />
                        </div>
                        <div>
                            <img className={styles.imageFour} src="/images/mac.jpeg" alt="" />
                        </div>
                    </div>
                    <h2>Get tips & tricks on how to skyrocket your sales. </h2>
                    <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! </p>
                </div>
                <div className={styles.carousel}>
                    <div className={`${styles.bgImageJump} ${styles.right}`}>
                        <div>
                            <img className={styles.imageOne} src="/images/mac.jpeg" alt="" />
                        </div>
                        <div>
                            <img className={styles.imageTwo} src="/images/mac.jpeg" alt="" />
                        </div>
                        <div>
                            <img className={styles.imageThree} src="/images/mac.jpeg" alt="" />
                        </div>
                        <div>
                            <img className={styles.imageFour} src="/images/mac.jpeg" alt="" />
                        </div>
                    </div>
                    <Carousel 
                        value={isTeam} 
                        numVisible={1} 
                        numScroll={1} 
                        responsiveOptions={responsiveOptions} 
                        className="custom-carousel" 
                        circular 
                        autoplayInterval={3000} 
                        itemTemplate={teamTemplate} 
                        showIndicators={false}
                        showNavigators={false}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}