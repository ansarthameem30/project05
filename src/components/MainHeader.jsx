import {Link} from 'react-router-dom'
import Image from '../images/main_header01.png'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#BestOutFitOfTheDay</h4>
          <h1>Join The Legends of the Fashion World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta sit debitis ad, assumenda velit? Iste ab voluptas modi quod.
        </p>
        <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">

          </div>
          <div className="main__header-image">
            <img src={Image} alt="Header-img" />
          </div>
        </div>
      </div>

      </header>
  )
}

export default MainHeader