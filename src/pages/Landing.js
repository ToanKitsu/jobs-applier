
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium deleniti perferendis et molestiae pariatur totam blanditiis ex quia ratione?
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="jobster hunt" />
            </div>
        </Wrapper>
    )
}




export default Landing