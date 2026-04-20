import Logo from '../../ui/logo/logo.component';

const Navbar = () => {
  return(
    <nav className="fixed top-0 left-0 z-50 md:p-6 p-3">
      <Logo />
    </nav>
  )
}
export default Navbar;