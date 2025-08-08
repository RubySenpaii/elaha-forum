"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const doSomething = () => {};

const ForumHeader = () => {
  return (
    <>
      <header>
        <div className="forum-navbar">
          <nav className="forum-navigation hide" id="navigation">
            <ul className="forum-nav-list">
              <li className="forum-nav-item">
                <a href="index.html">Forums</a>
              </li>
              <li className="forum-nav-item">
                <a href="forum.html">Create A Forum</a>
              </li>
              <li className="forum-nav-item">
                <a href="signup.html">Sign Up</a>
              </li>

              <li className="forum-nav-item">
                <Link href="/pages/auth/login">Login</Link>
              </li>
            </ul>
          </nav>
          <a className="forum-bar-icon" id="iconBar" onClick={doSomething}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </header>
    </>
  );
};

export default ForumHeader;
