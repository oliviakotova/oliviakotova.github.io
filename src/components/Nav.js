import logoLong from '../images/dogood.png'
import logo from '../images/logoblue-yellow.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" alt="blue_yellow hands" src={minimal ? logo : logoLong}/>
            </div>

                {!authToken && !minimal && <button 
                    className='nav-button'
                    onClick={handleClick}
                    disabled={showModal}
                >Log in</button>}
        </nav>
    )
}
export default Nav