import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import "../../styles/services.css"
const Services = () => {

     const services = [
        {
          id: 1,
          icon: <GiCompass />,
          title: 'mission',
          text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
        {
          id: 2,
          icon: <GiDiamondHard />,
          title: 'vision',
          text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
        {
          id: 3,
          icon: <GiStabbedNote />,
          title: 'history',
          text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
        },
      ]

  return <div className='services'>
    <div className="section-center">
      <article className="header">
        <h3>custom devices <br />
          made only for you
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ea iure officia amet ad sed facilis quidem porro blanditiis quasi!</p>
      </article>
      <div className="services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return <article key={id} className="service">
            <span className="icon">{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        })}
      </div>
    </div>
  </div>
}


export default Services
