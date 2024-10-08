import React from "react";
import HeaderTemplate from "../Elements/HeaderTemplate";

export default function Header() {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <HeaderTemplate imageURL="/images/background_mobile_1.webp" />
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <HeaderTemplate imageURL="/images/background_desktop_1.webp" />
      </div>
    </>
  );
}
