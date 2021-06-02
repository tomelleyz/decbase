export default function Backdrop({ setOpenMobileNav }) {
  return (
    <div
      onClick={() => setOpenMobileNav(false)}
      className="mobile-menu-drawer-backdrop"
    ></div>
  );
}
