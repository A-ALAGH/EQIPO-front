import SignUpPage from '../../pages/SignUpPage'
const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <ToggleColorMode />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Link as={RouterLink} to="/SignUpPage">
        <Button variant="outline" colorScheme="blue" size="sm">
          Create Account
        </Button>
      </Link>
    </NavBarContainer>
  );
};
