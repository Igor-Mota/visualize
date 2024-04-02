import styles from './styles.module.scss'
 
export default function Map (){
    return (
        <div className={styles.map}>
            <div className="container">
                <div className={styles.content}>
                    <img src="/images/map.png" alt="" />
                </div>
            </div>
        </div>
    )
}