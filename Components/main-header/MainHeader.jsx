"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
export default function MainHeader() {
  //to highlight the active link
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* <img src={logo.src} alt="Logo" /> */}
          <Image src={logo} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
                  <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
                  <NavLink href='/community'>Foodies Community</NavLink>
              
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
