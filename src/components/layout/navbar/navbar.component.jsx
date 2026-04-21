import Logo from '../../ui/logo/logo.component';

const Navbar = () => {
  return(
    <nav className="fixed flex justify-between items-center mx-5 top-0 left-0 z-50 md:h-22.5">
      <Logo />
    </nav>
  )
}
export default Navbar;