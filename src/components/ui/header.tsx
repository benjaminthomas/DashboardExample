import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Logo from "../logo";
export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        bounceDamping: 10,
      }}
      className="absolute w-full z-30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-8">
          <div className="shrink-0 mr-4 max-w-[120px]">
            <Link to="/" className="block" aria-label="Amports">
              <Logo />
            </Link>
          </div>
          <Navbar />

          {/* <MobileMenu /> */}
        </div>
      </div>
    </motion.header>
  );
}
