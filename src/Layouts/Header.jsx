import { FcSearch } from 'react-icons/fc';

const Header = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="/"className="navbar-item is-size-4">
                        MOVIE FLIX
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">

                            <div className="buttons">
                                <a href="#none"className="button is-light">
                                    <FcSearch />
                                </a>
                                <a href="#none"className="button is-light">
                                    Log in
                                </a>
                                <a href="#none"className="button is-primary">
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