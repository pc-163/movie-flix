import { FcAssistant, FcFlashOn, FcLike, FcStart, FcReddit, FcApproval, FcClapperboard, FcVlc, } from 'react-icons/fc';
import "../Assets/Styles/navbar.scss";

const NavBar = () => {
    return (
        <>
            <aside class="is-narrow-mobile is-fullheight is-hidden-mobile">
                <ul class="menu-list">
                    <li>
                        <FcAssistant />
                    </li>

                    <li>
                        <FcFlashOn />
                    </li>
                    <li>
                        <FcApproval />
                    </li>
                    <li>

                        <FcStart />

                    </li>
                    <li>

                        <FcReddit />

                    </li>
                    <li>

                        <FcLike />

                    </li>
                    <li>

                        <FcClapperboard />

                    </li>
                    <li>

                        <FcVlc />

                    </li>
                </ul>
            </aside>
        </>
    )
}

export default NavBar