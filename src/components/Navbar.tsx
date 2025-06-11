
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Shield, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Claims", href: "/claims" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SecureLife
              </span>
              <div className="text-xs text-gray-500 font-medium">Insurance Company</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:1800123456" 
              className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              1800-123-456
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 shadow-md hover:shadow-lg transition-all">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="sm" className="border-gray-300">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-6 border-b border-gray-200">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">SecureLife</span>
                </div>
                
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-blue-50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <a 
                    href="tel:1800123456" 
                    className="text-blue-600 font-semibold flex items-center mb-4 p-2"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    1800-123-456
                  </a>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
