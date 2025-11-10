import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `pb-1 border-b-2 transition-colors ${
      isActive
        ? "text-primary border-primary"
        : "text-foreground/60 border-transparent hover:text-foreground/80"
    }`;

  return (
    <header className="bg-background/95 sticky top-0 z-50 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="Company Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-primary">MachineCo</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={getLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild>
            <NavLink to="/sales-enquiry">Get Quote</NavLink>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <NavLink to="/" className="flex items-center gap-2 mb-4">
                  <img src="/placeholder.svg" alt="Company Logo" className="h-8 w-8" />
                  <span className="font-bold text-xl text-primary">MachineCo</span>
                </NavLink>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `text-lg ${isActive ? "text-primary font-semibold" : "text-foreground/80"}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                <Button asChild className="mt-4">
                  <NavLink to="/sales-enquiry">Get Quote</NavLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;