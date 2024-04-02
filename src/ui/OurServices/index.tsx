import styles from './styles.module.scss'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useEffect, useState } from 'react';
 
export default function OurServices (){
    const [ indexAccordion, setIndexAccordion ] = useState(0)
    const [ isImage, setIsImage ] = useState('/images/design.png')
    const toggleAccordion = (index:any) => {
        if(index == null) return
        setIndexAccordion(index)
        if(index == 0) {
            setIsImage('/images/design.png')
        }
        if(index == 1) {
            setIsImage('/images/customize.png')
        }
        if(index == 2) {
            setIsImage('/images/layouts.jpg')
        }
    }
    useEffect(()=>{
        console.log(indexAccordion)
    },[indexAccordion])
    return (
        <div className={styles.ourServices}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>What Sofbox can do for you?</h2>
                        <p>If you are planning on developing a product landing </p>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.image}>
                            <img src={isImage} alt="" />
                        </div>
                        <div className={styles.accordion}>
                            <Accordion activeIndex={indexAccordion} onTabChange={(e:any) => toggleAccordion(e?.index)} className='accordionOurServices'>
                                <AccordionTab header="Unique Design">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Easy to Customize">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </AccordionTab>
                                <AccordionTab header="Multipurpose layout">
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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