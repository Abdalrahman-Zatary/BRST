import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import MenubarButton from '../../components/ui/menubar-button/menubar-button.component';
import Logo from '../../components/common/logo/logo.component';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const navigate = useNavigate();
  const isSmallMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <nav className="fixed z-120 top-0 left-0 right-0 flex justify-between items-center mx-6 md:h-22.5 bg-transparent">
      <Link to="/">
        <Logo />
      </Link>
      <MenubarButton />
      {!isSmallMobile && (
        <div
          onClick={() => navigate("/stores")}
          className="text-deep-navy bg-[#fff9ee] transition-colors duration-300 hover:bg-mango-burst uppercase font-bold sm:text-[13px] text-[11px] rounded-full md:p-2.5 p-2 md:px-6 px-5 cursor-pointer"
        >
          <a>Find in Stores</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;