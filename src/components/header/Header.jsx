import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import ToggleColorMode from "../toggleColorMode/toggleColorMode";
import Logo from "../logo/Logo";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

const LogoWithButton = ({ text }) => {
  return (
    <Flex align="center">
      <Link to="/">
        <Logo />
      </Link>
      <Text ml={2}>{text}</Text>
    </Flex>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { authUser } = useAuthUser();

  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      <>
        <LogoWithButton />
        <ToggleColorMode />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        {authUser ? (
          <ProfileButton handleLogout={handleLogout} />
        ) : (
          <MenuLinks isOpen={isOpen} />
        )}
      </>
    </Flex>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const ProfileButton = ({ handleLogout }) => {
  return (
    <Button size="sm" rounded="md" onClick={handleLogout}>
      Logout
    </Button>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/sports">Sports</MenuItem>
        <MenuItem to="/loisirs">Loisirs</MenuItem>
        <MenuItem to="/travailgroupe">Travail De Groupe</MenuItem>
        <MenuItem to="/profile" isLast>
          <Button size="sm" rounded="md">
            Profile
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default NavBar;
