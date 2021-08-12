import React, {Children} from "react";
import Link from "next/link";
import { useRouter } from "next/router"

// todo: cf - hella cleanup
const PageLink = ({ children, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} font-extrabold`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

function NavBar() {

  return (
    <nav>
      <ul>
        <li>
          <PageLink href="/">
            <a>Spell List</a>
          </PageLink>
        </li>
        <li>
          <PageLink href="/loot-xp-calc">
            <a>Loot & XP Calculator</a>
          </PageLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
