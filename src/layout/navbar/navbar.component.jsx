import { Link } from 'react-router-dom';

import MenubarButton from '../../components/ui/menubar-button/menubar-button.component';
import Logo from '../../components/common/logo/logo.component';

const Navbar = () => {
  return (
    <nav className="fixed z-120 top-0 left-0 right-0 flex justify-between items-center mx-5 md:h-22.5 bg-transparent">
      <Link to="/">
        <Logo />
      </Link>
      <MenubarButton />
    </nav>
  );
}
export default Navbar;