import { FcSearch } from 'react-icons/fc';

const Header = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item is-size-4" href="/">
                        MOVIE FLIX
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">

                            <div className="buttons">
                                <a className="button is-light">
                                    <FcSearch />
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                                <a className="button is-primary">
                                    <strong>Register</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header