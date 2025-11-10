import { NavLink } from "react-router-dom";
import { MadeWithDyad } from "./made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">AVI Enterprises</h3>
            <p className="text-sm">
              Manufacturing excellence in every machine.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-primary">About Us</NavLink></li>
              <li><NavLink to="/products" className="hover:text-primary">Products</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-primary">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Kila No. 17/1, Rakba 2,</li>
              <li>Main Sohna Road,</li>
              <li>Radha Soami Satsang Mor,</li>
              <li>Faridabad, Haryana 121004</li>
              <li>Phone: <a href="tel:+919718335075" className="hover:text-primary">+91-9718335075</a></li>
              <li>Email: <a href="mailto:rohit@avifbd.com" className="hover:text-primary">rohit@avifbd.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/privacy" className="hover:text-primary">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-primary">Terms of Service</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AVI Enterprises. All rights reserved.</p>
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;