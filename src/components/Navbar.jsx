import React from "react";
import NavButton from "./NavButton";

function Navbar({
  contactPageState,
  setContactPageState,
  imgIndex,
  setImgIndex,
}) {
  const handleHomeClick = () => {
    setContactPageState(false);
    setImgIndex(0);
  };

  const handleProjetClick = () => {
    setContactPageState(false);
    setImgIndex(1);
  };

  const handleContactClick = () => {
    setContactPageState(!contactPageState);
  };

  return (
    <ul className="flex justify-center w-full max-w-5xl z-30">
      <NavButton onClick={handleHomeClick} text="Home" />
      {imgIndex === 0 ? (
        <NavButton onClick={handleProjetClick} text="Projets" />
      ) : null}
      <NavButton
        onClick={handleContactClick}
        text={contactPageState ? "X" : "Contact"}
      />
    </ul>
  );
}

export default Navbar;
