import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Faq(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const faqStyle ={
    width: '328px',
    border: '1px solid #D4D4D4',
    borderRadius: '4px',
    padding: '16px 24px 8px 24px',
    marginBottom: '16px'
  }

  return (
    <div>
        <strong>
        <div className="container5" id="FAQ">
           <div className="article5">
                <h2><strong>Frequently Asked Question</strong></h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem className='faq'>
                <AccordionHeader targetId="1"><strong>Apa saja syarat yang dibutuhkan?</strong></AccordionHeader>
                <AccordionBody accordionId="1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad vitae nesciunt ipsa, quae hic!
                </AccordionBody>
                </AccordionItem>
                <AccordionItem className='faq'>
                <AccordionHeader targetId="2"><strong>Berapa hari minimal sewa mobil lepas kunci?</strong></AccordionHeader>
                <AccordionBody accordionId="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, excepturi!
                </AccordionBody>
                </AccordionItem>
                <AccordionItem className='faq'>
                <AccordionHeader targetId="3"><strong>Berapa hari sebelumnya sabaiknya booking sewa mobil?</strong></AccordionHeader>
                <AccordionBody accordionId="3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, maxime molestias? Similique necessitatibus soluta consequatur repellat, delectus autem officiis incidunt.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem className='faq'>
                <AccordionHeader targetId="4"><strong>Apakah Ada biaya antar-jemput?</strong></AccordionHeader>
                <AccordionBody accordionId="4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ullam perferendis.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem className='faq'>
                <AccordionHeader targetId="5"><strong>Bagaimana jika terjadi kecelakaan?</strong></AccordionHeader>
                <AccordionBody accordionId="5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, corrupti quae eligendi soluta nam esse hic dolores veniam tempore! Libero.
                </AccordionBody>
                </AccordionItem>
            </Accordion>
        
        </div>
        </strong>
    </div>
  );
};


export default Faq;