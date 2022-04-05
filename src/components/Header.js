import Logo from '../images/Globe.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="" className="header__logo"/>
            <h1 className="header__title">My Travel Journal.</h1>
        </header>
    )
}

export default Header;