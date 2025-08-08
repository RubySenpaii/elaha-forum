"use client"
const doSomething = () => {

}

const Header = () => {
    return (<>
        <header>
            <div className="navbar">
                <nav className="navigation hide" id="navigation">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="index.html">Forums</a></li>
                        <li className="nav-item"><a href="forum.html">Create A Forum</a></li>
                        <li className="nav-item"><a href="signup.html">Sign Up</a></li>

                        <li className="nav-item"><a href="/Users/elahaabuzar/Downloads/Archive/login.html">Login</a></li>
                    </ul>
                </nav>
                <a className="bar-icon" id="iconBar" onClick={doSomething}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </header >
    </>);
}

export default Header;