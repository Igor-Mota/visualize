import { Poppins } from "next/font/google";
import Image from "next/image";
import {useState, MouseEvent } from "react";
import styles from "./styles.module.scss";
import { useMedia } from "react-use";
import Card from 'react-card-flip'

const poppins400 = Poppins({
    subsets: ["latin"],
    style: "normal",
    weight: "400",
});

export default function Solutions() {

    const isMobile = useMedia("(max-width:600px)");
    
    const [isFlippedFirst, setIsFlippedFirst] = useState(false);
    const [isFlippedSecond, setIsFlippedSecond] = useState(false);
    const [isFlippedThird, setIsFlippedThird] = useState(false);

    const flipFirstCard = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsFlippedFirst(!isFlippedFirst)
    }

    const flipSecondCard = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsFlippedSecond(!isFlippedSecond)
    }
    const flipThirdCard = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsFlippedThird(!isFlippedThird)
    }

    return (
        <div id="solutions" className="p-4">
            <h2 className="text-center">Nossas soluçoes</h2>
            <h4 className="mt-3 mb-5 text-center">
                Soluções ERP que tornem a sua empresa mais produtiva e com processos
                mais autônomos.
            </h4>
            <div>
                <div className="row">
                    <div className="col-12 mt-2 col-md-6 position-relative">
                        <Card isFlipped={isFlippedFirst} >
                            <div className={`${styles.card} up-face card`}>
                                <h6 style={{ fontSize: 22 }} className="font-weight-bold">
                                    Helixsys
                                </h6>
                                <Image
                                    src="/images/helix.jpg"
                                    alt="Helixsys example"
                                    width={isMobile ? 250 : 250}
                                    height={isMobile ? 200 : 200}
                                />
                                <p style={{ color: "#000" }}>
                                Gestão e agilidade voltados a comércios de forma simples para que possa administra as informações através de diversos módulos. Software aplicado a simplificar e para ajudar controlar seus pedidos, estoque e financeiro.
                                </p>
                                <a onClick={flipFirstCard} href="#">
                                    Siba mais
                                </a>
                            </div>
                            <div className={`${styles.card} ${styles.back_face} card`}>
                                <p  style={{ color: "#000" }}>
                                    Através de inúmeras configurações você pode trabalhar a
                                    melhor forma de trabalhar os módulos replicado as funções do seu
                                    dia a dia. Integração com diversas balanças, impressão cozinha
                                    balcão, controle de acesso e permissões Tenha uma exibição clara
                                    e objetiva dos principais dados da sua empresa, estruturados de
                                    acordo com as necessidades do negócio. Tome decisões ágeis e
                                    assertivas, baseadas em indicadores confiáveis.
                                </p>
                                <a onClick={flipFirstCard} href="#">
                                    Voltar
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 mt-2 col-md-6 position-relative">
                        <Card isFlipped={isFlippedSecond} >
                            <div className={`${styles.card} up-face card`}>
                                <h6 style={{ fontSize: 22 }} className="font-weight-bold">
                                    Sysmais
                                </h6>
                                <Image
                                    src="/images/sysmax.jpg"
                                    alt="Helixsys example"
                                    width={isMobile ? 250 : 250}
                                    height={isMobile ? 200 : 200}
                                />
                                <p style={{ color: "#000" }}>
                                De um jeito simples e descomplicado, nosso sistema promove a experiência ágil que você precisa. Por módulos básicos padronizados conforme necessários.                                 </p>
                                <a onClick={flipSecondCard} href="#">
                                    Siba mais
                                </a>
                            </div>
                            <div className={`${styles.card} ${styles.back_face} card`}>
                                <p  style={{ color: "#000" }}>
                                Quando se compreende de comércios, sabemos como podemos ajudar a administrar o seu negócio – nas compras, vendas, estoque, financeiro e obrigações fiscais, fazemos acontecer.
                                Acompanhe o dia a dia com um software solução desenvolvida para atender diversas áreas capaz de se adaptar as atividades cotidianas. 
                                Recurso ponto de venda PDV. Conte com um sistema fácil de usar, feito para você tornar o seu atendimento ágil, diminuir as filas e encantar os clientes. 
                                </p>
                                <a onClick={flipSecondCard} href="#">
                                    Voltar
                                </a>
                            </div>
                        </Card>
                    </div>
                    <div className="col-12 mt-2 col-md-6 position-relative">
                        <Card isFlipped={isFlippedThird} >
                            <div className={`${styles.card} up-face card`}>
                                <h6 style={{ fontSize: 22 }} className="font-weight-bold">
                                    Hibrido erp
                                </h6>
                                <Image
                                    src="/images/hibidroErp.jpg"
                                    alt="Helixsys example"
                                    width={isMobile ? 250 : 250}
                                    height={isMobile ? 200 : 200}
                                />
                                <p style={{ color: "#000" }}>
                                Sistemas multi empresas multi filiais, totalmente modular. Conte com um sistema de gestão completo e integrado, capaz de atender empresas de diferentes portes e segmentos, que te ajuda a potencializar resultados e agilizar processos.                                </p>
                                <a onClick={flipThirdCard} href="#">
                                    Siba mais
                                </a>
                            </div>
                            <div className={`${styles.card} ${styles.back_face} card`}>
                                <p  style={{ color: "#000" }}>
                                Gerencie de qualquer lugar sua empresa obtenha dados, realize conciliação bancária emita documentos fiscais acompanhe as vendas.
                                Automatize todos os fluxos operacionais da sua empresa e tenha processos internos dinâmicos e mais produtivos, deixando com que as pessoas foquem em gerar resultado para o seu negócio.
                                Controle estoque vendas, cozinhas, financeiro contas a pagar receber, emissão de documentos fiscais, pedidos, delivery, cadastro diversos, ecommerce.
                                </p>
                                <a onClick={flipThirdCard} href="#">
                                    Voltar
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
