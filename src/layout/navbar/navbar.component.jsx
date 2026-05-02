import MenubarButton from '../../components/ui/menubar-button/menubar-button.component';
import Logo from '../../components/common/logo/logo.component';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center mx-5 z-50 md:h-22.5 bg-transparent">
      <Logo />
      <MenubarButton />
    </nav>
  );
}
export default Navbar;