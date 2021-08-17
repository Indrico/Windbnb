import logo from '../logo.png'
import SearchBar from './SearchBar'

const Header = ({location, setLocation}) => {
    return(
        <header className="max-w-screen-xl m-auto p-4 flex justify-between items-center mb-12">
            <img src={logo} alt="logo"/>
            <SearchBar location={location} setLocation={setLocation}/>
        </header>
    )
}

export default Header;