import { links } from "../data";

export default function Navbar() {
  return (
    <nav className="hidden md:flex md:grow">
      <ul className="flex grow justify-end flex-wrap items-center gap-4 space-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <a
              className="text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all"
              href={link.hash}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
