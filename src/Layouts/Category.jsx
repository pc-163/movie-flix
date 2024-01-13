

const Category = () => {

    return (
        <>
            <div className="tabs is-toggle is-fullwidth">
                <ul>
                    <li className="is-primary">
                        <a href="#none">
                            <span className="icon is-small">All</span>
                        </a>
                    </li>
                    <li>
                        <a href="#tvchannels">
                            <span className="icon is-small">TV Movie</span>
                        </a>
                    </li>
                    <li>
                        <a href="#trending">
                            <span className="icon is-small">Trending</span>
                        </a>
                    </li>
                    <li>
                        <a href="#toprated">
                            <span className="icon is-small">Top Rated</span>
                        </a>
                    </li>
                    <li>
                        <a href="#action">
                            <span className="icon is-small">Action</span>
                        </a>
                    </li>
                    <li>
                        <a href="#horror">
                            <span className="icon is-small">Horror</span>
                        </a>
                    </li>
                    <li>
                        <a href="#romanticmovies">
                            <span className="icon is-small">Romance</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#animation">
                            <span className="icon is-small">Animation</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Category