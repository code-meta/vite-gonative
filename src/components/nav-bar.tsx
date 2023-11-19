import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const NavBar = () => {
  return (
    <nav className="container py-4 bg-secondary">
      <div className="flex items-center justify-between">
        <div className="text-foreground text-2xl font-medium">
          <Link to="/">Gonative</Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
