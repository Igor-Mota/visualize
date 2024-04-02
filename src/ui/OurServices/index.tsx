import styles from './styles.module.scss'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useEffect, useState } from 'react';
 
export default function OurServices (){
    const [ indexAccordion, setIndexAccordion ] = useState(0)
    const toggleAccordion = (index:any) => {
        
        if(index == null) return
        setIndexAccordion(index) 
    }
    useEffect(()=>{
        console.log(indexAccordion)
    },[indexAccordion])
    return (
        <div className={styles.ourServices}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>Seja um revendedor</h2>
                        <p>Cadastre se e seja um revendedor trabalhe de casa. Em poucos dias você recebe treinamento e sua empresa está pronta para revender a melhor solução do mercado! </p>
                    </div>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='w-100 me-0 me-md-3 d-flex align-items-center align-items-md-start justify-content-center'>
                        <form className='d-flex flex-column w-100 w-md-75 mb-4 mb-md-0'> 
                                <input className='w-100 m-1' type="name" name="name" id="name" placeholder='Seu Nome'/>
                                <input className='w-100 m-1' type="phone" name="phone" id="phone" placeholder='Seu Telefone'/>
                                <input className='w-100 m-1' type="city" name="city" id="city" placeholder='Sua Cidade'/>
                                <input className='w-100 m-1' type="text" name="state" id="state" placeholder='Seu Estado'/>
                                <input className='w-100 m-1' type="email" name="email" id="mailer" placeholder='Seu Email'/>
                                <input className='w-100 m-1' type="text" name="ocup" id="ocup" placeholder='Sua Ocupação'/>
                                <button className="btn default w-100 mt-2">Cadastrar</button>
                            </form>
                        </div>
                        <div className={styles.accordion}>
                            <Accordion activeIndex={indexAccordion} onTabChange={(e:any) => toggleAccordion(e?.index)} className='accordionOurServices'>
                                <AccordionTab header="Software PDV com sua marca">

                                </AccordionTab>
                                <AccordionTab header=" Fature seu cliente ">
                                    <p>
                                </p>
                                </AccordionTab>
                                <AccordionTab header="Produto completo e pronto para venda ">
                                    <p>
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Margem de lucro saudável">
                                    <p>
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Treinamento da sua equipe Comercial.">
                                    <p>
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Liberdade e Autonomia.">
                                    <p>
                                    </p>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}