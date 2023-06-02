import {BiHeart} from 'react-icons/bi'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import { testimonials } from '../data'
import { useState } from 'react'


const Testimonials = () => {

    const [index,SetIndex]=useState(0);
    const {name, quote,job, avatar} = testimonials[index];

    const next  = ()=>
    {
          SetIndex(prev=>prev-1)

          if(index >= testimonials.length-1)
          {
            SetIndex(testimonials.length-1);
          }
    }
    const prev  = ()=>
    {
        SetIndex(prev=>prev+1)

        if(index <= 0)
        {
            SetIndex(0);
        }
    }


  return (
    <section className="testimonials">
        <div className="container testimonials__container">
        <SectionHead icons={<BiHeart/>} title="Testimonials"/>
        <Card className="testimonial">
            <div className="testimonial__avatar">
                <img src={avatar} alt="name" />
            </div>

            <p className='testimonial__quote'>
                {`"${quote}"`}
            </p>
            <h5>
                {name}
            </h5>
            <small className="testimonial__title">
                {job}
            </small>

        </Card>
        <div className="testimonials__btn-container">
            <button className='testimonials__btn' onClick={prev} >
                <AiFillCaretLeft />
            </button>
            <button className='testimonials__btn' onClick={next}>
                <AiFillCaretRight />
            </button>
        </div>
        </div>
    </section>
  )
}

export default Testimonials