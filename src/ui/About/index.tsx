import { Poppins } from "next/font/google";
import Image from "next/image";
import {
  IconAcougue,
  IconCheck,
  IconConstrucao,
  IconDistribuidora,
  IconHortifruti,
  IconOutros,
  IconPadaria,
  IconRestaurante,
  IconSupermercado,
} from "../Svg";
import styles from "./styles.module.scss";

const poppinsNormal = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className="container d-flex align-items-center justify-content-center">
        <div className={`${styles.content} row`}>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconSupermercado />
                {/* <Image src='/images/connect.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Supermercados</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconPadaria />
                {/* <Image src='/images/domain.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Padarias</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconRestaurante />
                {/* <Image src='/images/content.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Restaurantes</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconAcougue />
                {/* <Image src='/images/content.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Açougues</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconHortifruti />
                {/* <Image src='/images/content.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Hortifruti</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconConstrucao />
                {/* <Image src='/images/content.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>
                  Materiais de Construção
                </h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconDistribuidora />
                {/* <Image src='/images/content.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Distribuidoras</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
          <div className={`${styles.card} col-12 col-md-3`}>
            <div className="d-flex w-100 flex-column align-items-center">
              <div className={styles.image}>
                <div className={styles.icon}>
                  <IconCheck />
                </div>
                <IconOutros />
                {/* <Image src='/images/content.png' alt='Connect' fill quality={100} /> */}
              </div>
              <div className={styles.text}>
                <h3 className={poppinsNormal.className}>Comercio em Geral</h3>
                {/*<p className={poppinsNormal.className}>There are many variations of passages of Lorem Ipsum available, in </p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
