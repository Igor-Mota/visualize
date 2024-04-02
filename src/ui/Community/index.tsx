import styles from './styles.module.scss'
 
export default function Community (){
  return (
    <section id='code' className={styles.community}>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Números Code Sistemas</h2>
                    {/*<p>If you are planning on developing a product landing </p>*/}
                </div>
                <div className={`${styles.list} d-flex flex-column flex-md-row align-items-center `}>
                    <div className={`${styles.card} w-100 w-md-50 me-0 me-md-2`}>
                        <p>200+</p> <p>&nbsp;Clientes</p>
                    </div>
                    <div className={`${styles.card} w-100 mt-2 ms-0 ms-md-2 mt-md-0 w-md-50`}>
                        <p>50+</p> <p>&nbsp;Parceiros</p>
                    </div>
                    {/*<div className={styles.card}>
                        <p>4M+</p><span className={styles.effect}></span> <p>Customers</p>
                    </div>*/}
                </div>
            </div>
        </div>
    </section>
  )
}