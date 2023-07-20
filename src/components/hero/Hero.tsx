import { Link } from 'react-router-dom'
import "../../styles/hero.css"


const Hero = () => {

  return <div className="section-center hero">
    <article className="hero-content">
      <h1>
        Choose your <br /> Desired Device
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis praesentium, inventore iste sit est sapiente rem facere eius incidunt fugiat.
      </p>
      <Link to="/mobiles" className="btn hero-btn">shop now</Link>
    </article>
    <article className="img-container">
      <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxpcGhvbmUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="nice table" className="main-img" />
      <img src="https://images.unsplash.com/photo-1617106400445-2a7a84cec8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU3fHxpcGhvbmUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="person working" className="accent-img" />
    </article>
  </div>

}


export default Hero