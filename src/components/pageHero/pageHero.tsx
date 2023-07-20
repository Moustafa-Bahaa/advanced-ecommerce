import { Link } from 'react-router-dom'
import "../../styles/pagehero.css"

const PageHero = ({ title }) => {
    return (
        <div className='page-hero'>
            <div className="section-center page-hero-center">
                <h3>
                    <Link to="/">Home</Link> / {title}
                </h3>
            </div>
        </div>
    )
}

export default PageHero
