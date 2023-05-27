function Header() {
    return (
        <nav className='teal darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://alexpirko.github.io/react-online-store'
                    className='brand-logo'
                    target='_blank'
                    rel='noreferrer'>
                    Online Store
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/AlexPirko/react-online-store' target='_blank' rel='noreferrer'>
                            REPO
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
