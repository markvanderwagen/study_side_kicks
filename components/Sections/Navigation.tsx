import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useTrail, animated } from "react-spring";
import Slogan from "./Slogan";
import { useRouter } from "next/router";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Our Team", url: "/ourTeam" },
    { name: "Contact", url: "/contact" },
  ];

  const menuItemsAnimation = useTrail(menuItems.length, {
    key: isMenuOpen,
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen
      ? "translate3d(0,0,0)"
      : "translate3d(-100%,0,0)",
    config: { mass: 10, tension: 1000, friction: 100 },
  });

  function handleActiveLink(url): { isActive: boolean } {
    const isActive = router.asPath === url ? true : false;

    return { isActive };
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      className="bg-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={
            isMenuOpen ? "Close menu" : "Open menu"
          }
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              src={"/images/logo_flat.webp"}
              height={50}
              width={200}
              alt="logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="end"
      >
        <NavbarBrand>
          <Link href="/">
            <Image
              src={"/images/logo_flat.webp"}
              height={50}
              width={200}
              alt="logo"
            />
          </Link>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link
            href="/about"
            color={
              handleActiveLink("/about")?.isActive
                ? "primary"
                : "foreground"
            }
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={
              handleActiveLink("/services")?.isActive
                ? "primary"
                : "foreground"
            }
            href="/services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={
              handleActiveLink("/ourTeam")?.isActive
                ? "primary"
                : "foreground"
            }
            href="ourTeam"
          >
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/contact"
            variant="flat"
            className="bg-[#4239DC] text-white font-bold hover:scale-110"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white">
        <div className="">
          {menuItemsAnimation.map((props, index) => (
            <animated.div
              style={props}
              key={index}
              className=""
            >
              <NavbarMenuItem>
                <Link
                  className="w-full text-3xl"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={menuItems[index].url}
                  size="lg"
                >
                  {menuItems[index].name}
                </Link>
              </NavbarMenuItem>
            </animated.div>
          ))}
          <div className="mt-28">
            <Slogan />
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
