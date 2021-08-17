import logo from '../logo.png'
import SearchBar from './SearchBar'

const Header = ({location, setLocation}) => {
    return(
        <header className="max-w-screen-xl m-auto p-4 flex flex-col sm:flex-row items-start sm:justify-between sm:items-center mb-8 sm:mb-12">
            <img src={logo} alt="logo" className="mb-8 sm:mb-0"/>
            <SearchBar location={location} setLocation={setLocation}/>
        </header>
    )
}

export default Header;