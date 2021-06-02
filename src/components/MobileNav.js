import { useEffect, useRef } from "react";
import logo from "../assets/icons/decbase-logo.svg";
import Button from "./Button";

export default function MobileNav({ openMobileNav }) {
  const drawerRef = useRef();

  useEffect(() => {
    const drawerNode = drawerRef.current;

    if (openMobileNav) {
      drawerNode.style.transform = "translateX(0%)";
    } else {
      drawerNode.style.transform = "translateX(100%)";
    }
  }, [openMobileNav]);

  return (
    <div ref={drawerRef} className="mobile-menu-drawer">
      <img src={logo} alt="Decbase logo" />
      <nav className="mobile-menu">
        <div className="mobile-menu-item">HOME</div>
        <div className="mobile-menu-item">PROJECT</div>
        <div className="mobile-menu-item">SERVICES</div>
        <div className="mobile-menu-item">ABOUT</div>
        <div className="mobile-menu-item">BLOG</div>
        <div className="mobile-menu-item">SHOP</div>
        <Button type="secondary" action="SIGN UP" />
      </nav>
    </div>
  );
}
