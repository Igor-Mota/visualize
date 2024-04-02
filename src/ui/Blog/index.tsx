import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss'
import { useState } from 'react';

export default function Blog (){
    const [blogList, setBlogList] = useState([
        {
            id: '1',
            title: 'Life Lack Meaning',
            text:'It is a long established fact that a reader will be distracted by the readable.',
            date: 'November 28, 2019',
            thumb:'/images/blog1.jpg',
            link: '#'
        },
        {
            id: '2',
            title: 'Life Lack Meaning',
            text:'It is a long established fact that a reader will be distracted by the readable.',
            date: 'November 28, 2019',
            thumb:'/images/blog2.jpg',
            link: '#'
        },
        {
            id: '3',
            title: 'Life Lack Meaning',
            text:'It is a long established fact that a reader will be distracted by the readable.',
            date: 'November 28, 2019',
            thumb:'/images/blog3.jpg',
            link: '#'
        },
        {
            id: '4',
            title: 'Life Lack Meaning',
            text:'It is a long established fact that a reader will be distracted by the readable.',
            date: 'November 28, 2019',
            thumb:'/images/blog4.jpg',
            link: '#'
        },
        {
            id: '5',
            title: 'Life Lack Meaning',
            text:'It is a long established fact that a reader will be distracted by the readable.',
            date: 'November 28, 2019',
            thumb:'/images/blog5.jpg',
            link: '#'
        },
    ])
  return (
    <div className={styles.blog}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Latest Posts</h2>
                    <p>If you are planning on developing a product landing. </p>
                </div>
                <div className={styles.blogList}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {blogList.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.datePost}>
                                            <a href={item.link}>
                                                {item.date}
                                            </a>
                                        </div>
                                        <img src={item.thumb} alt="" />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <a href={item.link}>{item.title}</a>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}