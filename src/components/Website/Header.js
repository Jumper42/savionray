const Header = () => {
    return (
        <header id="masthead" className="site-header">
            <nav id="site-navigation" className="main-navigation">
                <a href="https://savionray.com/" className="custom-logo-link" rel="home" aria-current="page">
                    <img width="100" height="100" alt="Savionray" data-src="https://savionray.com/wp-content/uploads/Srlogo.svg" className="custom-logo lazyloaded" src="https://savionray.com/wp-content/uploads/Srlogo.svg" /></a>
                <div className="menu-menu-1-container">
                    <ul id="primary-menu" className="menu">
                        <li id="menu-item-158"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-158"><a
                                href="https://savionray.com/about/">About</a></li>
                        <li id="menu-item-30"
                            className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-25 current_page_item menu-item-30">
                            <a href="https://savionray.com/services/" aria-current="page">Services</a>
                        </li>
                        <li id="menu-item-17"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"><a
                                href="https://savionray.com/work/">Work</a></li>
                        <li id="menu-item-15"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"><a
                                href="https://savionray.com/articles/">Articles</a></li>
                        <li id="menu-item-29"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a
                                href="https://savionray.com/contact-us/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;