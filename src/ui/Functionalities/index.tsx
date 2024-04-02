import { useState } from "react";
import styles from "./styles.module.scss";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useMedia } from "react-use";

const poppins400 = Poppins({
    subsets: ["latin"],
    style: "normal",
    weight: "400",
});

export default function Functionalities() {
    const [tab, setTab] = useState(0);
    const isMobile = useMedia("(max-width:600px)");

    const handleChangeTab = (tab: number) => {
        setTab(tab);
    };

    return (
        <section id="functionalities" className={`p-4  mt-2 mb-2`}>
            <h2 className="text-center">Funcionalidades</h2>
            <h4 className="mt-3 mb-5 text-center">
                Os nossos desenvolvedores estruturaram um sistema que visa atender a sua
                planta na totalidade dos seus procedimentos e assim nasceram
                funcionalidades que o nosso Sistema ERP executa com maestria!
            </h4>
            <div className="d-flex flex-column flex-md-row w-100 ">
                <div className="w-100 w-md-25 ps-2 pe-2 d-flex align-items-center justify-content-center">
                    <div className="row mt-3">
                        <div className="col-12 col-md-5 ms-0 ms-md-5 mt-2 mb-2">
                            <div
                                className={`${styles.card} card  `}
                                onClick={() => handleChangeTab(1)}
                            >
                                <h6 style={{fontSize:22}} >Planos Sistema ERP</h6>

                                <Image
                                    src="/images/func1.jpg"
                                    width={200}
                                    height={200}
                                    alt=""
                                />
                                <div
                                    className={`${tab === 1 ? styles.available : styles.unavailable
                                        } p-2 d-flex flex-column align-items-center justify-content-center mt-5 mb-5 mb-md-3`}
                                >
                                    <p style={{ color: "#000" }} className="text-center">
                                        Os planos do nosso Sistema ERP cabem no orçamento de
                                        empresas de portes pequenos, médios e grandes, atendendo
                                        respectivamente as demandas de cada realidade de
                                        investimento e gestão. Saiba mais
                                    </p>{" "}
                                    <a href="#contact"> Entre em contato</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-md-1  mt-5 mt-md-0"></div>
                        <div className="col-12 col-md-5 mt-2 mt-2 mb-2">
                            <div
                                className={`${styles.card} card `}
                                onClick={() => handleChangeTab(2)}
                            >
                                <h6 style={{fontSize:22}}>Contrate o nosso Sistema ERP</h6>
                                <Image
                                    src="/images/funcs_bg.jpg"
                                    width={200}
                                    height={200}
                                    alt=""
                                />
                                <div
                                    className={`${tab === 2 ? styles.available : styles.unavailable
                                        }  d-flex flex-column align-items-center justify-content-center  mb-3 mt-3`}
                                >
                                    <p style={{ color: "#000" }} className="text-center">
                                        Fale com um de nossos especialistas para tirar todas as suas
                                        dúvidas, conhecer nosso sistema ERP e até para agendar uma
                                        demonstração ao vivo. Temos que temos a solução para sua
                                        empresa.{" "}
                                    </p>{" "}
                                    <a href="#contact"> Entre em contato</a>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
