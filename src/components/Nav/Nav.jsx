import React from 'react';
import './nav.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed py-6 w-full z-50 transition-colors duration-300 text-amber-500 hover:text-amber-300 ${isScrolled ? 'bg-PrimaryBgSurface' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto">
        <ul className="flex">
          <li className="font-bold absolute navlogo"><a href="#"><img src="../public/snl-skeleton.png" className='w-40 h-40' /></a></li>
          <li>
            <ul className="flex space-x-4 ml-56">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
