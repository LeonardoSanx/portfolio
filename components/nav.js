import Link from "next/link";

export default function Navbar({ page, isProduct }) {
  const focused =
    "text-green-400 text-base sm:text-lg mx-1 sm:mx-4 cursor-pointer";
  const unfocused =
    "text-gray-500 text-base sm:text-lg mx-1 sm:mx-4 cursor-pointer hover:text-gray-100";

  return isProduct ? (
    <div className="flex z-50 justify-center items-center fixed w-full h-16 sm:h-20 align-center bg-gray-900">
      <Link href="/projects">
        <a className={page == "/projects" ? focused : unfocused}>Projects</a>
      </Link>
    </div>
  ) : (
    <div className="flex z-50 justify-center items-center fixed w-full h-16 sm:h-20 align-center bg-gray-900">
      <Link href="/">
        <a className={page == "/" ? focused : unfocused}>Home</a>
      </Link>
      {/* <Link href="/about">
        <a className={page == "/about" ? focused : unfocused}>About</a>
      </Link> */}
      <Link href="/projects">
        <a className={page == "/projects" ? focused : unfocused}>Projects</a>
      </Link>
      <Link href="/contact">
        <a className={page == "/contact" ? focused : unfocused}>Contact</a>
      </Link>
    </div>
  );
}
