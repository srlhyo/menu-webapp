import React from 'react';

function Header(props) {
  // const [y, setY] = React.useState(window.scrollY);
  // const header = React.useRef(null);
  // const menunav = React.useRef(null);

  // const handleNavigation = React.useCallback(
  //   e => {
  //     const window = e.currentTarget;
  //     if (y < window.scrollY) {
  //       header.current.classList.add("-translate-y-48");
  //       header.current.classList.remove("h-48");
  //       //   menunav.current.classList.remove("top-48");
  //     } else if (window.scrollY < 50) {
  //       header.current.classList.remove("-translate-y-48");
  //       header.current.classList.add("h-48");
  //       // menunav.current.classList.add("top-48");
  //     }

  //     setY(window.scrollY);
  //   }, [y]
  // );

  // React.useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  return (
    <header className="w-full">
      <div style={{ backgroundImage: `url(${props.img})` }} className="h-48 bg-cover bg-center flex items-end justify-center relative mb-[-57px] z-[2]">
      </div>
    </header>
  )
}

export default Header;