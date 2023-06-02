import Image from '../images/values1.jpg'
import SectionHead from './SectionHead'
import {values} from '../data'
import Card from '../UI/Card'

import {GiCutDiamond} from 'react-icons/gi'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Image1" />
                </div>
            </div>

            <div className="values__right">
                <SectionHead icons={<GiCutDiamond />} title="Values" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate perspiciatis eos et, vel voluptatum, omnis temporibus eligendi soluta consequatur hic exercitationem assumenda sit dignissimos deleniti. Delectus doloremque nulla architecto inventore!

                </p>

                <div className="values__wrapper">
                    {
                    values.map(({id, icon, title, desc}) => {
                        return <Card key={id} className="values__value">
                            <span>
                                {id}
                            </span>
                            <span>
                                {icon}
                            </span>
                            <h4>{title}</h4>
                            <small>{desc}</small>

                        </Card>

                        
                    })
                }
                </div>
                 
            </div>
        </div>

    </section>
  )
}

export default Values