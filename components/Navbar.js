import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-semibold">
            Assignment 11
          </Link>
          <nav className="flex items-center gap-5 text-blue-500 font-medium">
            <Link href="/">Home</Link>
            <Link href="/redirect">Redirect</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
