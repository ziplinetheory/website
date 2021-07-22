import style from '../styles/Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <ul>
                <li>
                    <a href="https://google.com">MISSION</a>
                </li>
                <li>
                    <a href="https://google.com">EVENTS</a>
                </li>
                <li>
                    <a href="https://google.com">IMPACT</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
