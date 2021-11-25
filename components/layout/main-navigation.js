import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <li>
        <div>
          <a
            download="cvwijnie.pdf"
            className="btn btn-success"
            href="/images/site/cvwijnie.pdf"
          >
            CV
          </a>
        </div>
      </li>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
