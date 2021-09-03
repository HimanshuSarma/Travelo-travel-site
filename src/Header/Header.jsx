import './Header.css';
import LogoSvg  from '../Components/LogoSvg';

const Header = () => {
    return (
        <header className="header">  

            <div className="header-ham">
                
            </div>

            <div className="header-logo">
                <LogoSvg />
            </div> 

            <div className="header-btns">
                <button className="header-btns-btn home">
                    Home
                </button>
                <button className="header-btns-btn">
                    About
                </button>
                <button className="header-btns-btn">
                    Places
                </button>
                <button className="header-btns-btn">
                    Careers
                </button>
                <button className="header-btns-btn">
                    Blog
                </button>
            </div>

            <div className="header-connect">
                <button className="header-connect-btn dark-blue-btns">
                    Connect
                </button>
            </div>
        </header>
    )
}

export default Header
