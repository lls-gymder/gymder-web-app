import { useAuth } from 'Common/hooks';
import { IBaseUser } from 'Common/models';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'Public/vercel.svg'

export function Header() {
  const { isAuthenticated, user, signout } = useAuth();

  return (
    <nav className="bg-green-200 h-16 flex justify-between items-center px-10 relative">
      <Link href="/">
        <Image src={logo.src} height="100" width="200" object-fit="contain" alt="logo"/>
      </Link>
      <nav className="grid gap-10 grid-flow-col">
        {
          isAuthenticated && user
            ? authenticatedNav(user, signout)
            : defaultNav
        }
      </nav>
    </nav>
  )
}

const defaultNav = (
  <>
    <Link href="/about">
      About lls
    </Link>
    <Link href="/signin">
      Signin
    </Link>
    <Link href="/signup">
      Signup
    </Link>
  </>
)

const authenticatedNav = (user: IBaseUser, signout: () => void) => (
  <>
    <span>
      {user.name}
    </span>
    <button type="button" onClick={() => signout()}>
      Sign Out
    </button>
  </>
)