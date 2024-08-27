import React, { useState, useEffect, useRef } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setSubMenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button className="p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      {isOpen && (
        <div className="absolute top-14 left-0 w-48  bg-blue text-white shadow-md border-grey border-2 rounded-lg">
          <ul className="flex flex-col">
            <button className="p-2 hover:bg-grey">Home</button>
            <button
              className="p-2 hover:bg-grey flex justify-center items-center"
              onClick={() =>
                setSubMenuOpen(subMenuOpen === "about" ? null : "about")
              }
            >
              About{" "}
              {subMenuOpen === "about" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.68 13.98L15.47 10.77L13.51 8.79999C12.68 7.96999 11.33 7.96999 10.5 8.79999L5.32 13.98C4.64 14.66 5.12999 15.82 6.07999 15.82H11.69H17.92C18.88 15.82 19.36 14.66 18.68 13.98Z"
                    fill="#FFFFFF"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.92 8.18005H11.69H6.07999C5.11999 8.18005 4.63999 9.34005 5.31999 10.0201L10.5 15.2001C11.33 16.0301 12.68 16.0301 13.51 15.2001L15.48 13.2301L18.69 10.0201C19.36 9.34005 18.88 8.18005 17.92 8.18005Z"
                    fill="#FFFFFF"
                  />
                </svg>
              )}
            </button>
            {subMenuOpen === "about" && (
              <ul className="rounded-md flex flex-col bg-grey border-grey">
                <button className="p-2 hover:bg-grey">Team</button>
                <button className="p-2 hover:bg-grey">Company</button>
              </ul>
            )}
            <button className="p-2 hover:bg-grey">Contact</button>
            <button
              className="p-2 hover:bg-grey flex justify-center items-center"
              onClick={() =>
                setSubMenuOpen(subMenuOpen === "services" ? null : "services")
              }
            >
              Services{" "}
              {subMenuOpen === "services" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.68 13.98L15.47 10.77L13.51 8.79999C12.68 7.96999 11.33 7.96999 10.5 8.79999L5.32 13.98C4.64 14.66 5.12999 15.82 6.07999 15.82H11.69H17.92C18.88 15.82 19.36 14.66 18.68 13.98Z"
                    fill="#FFFFFF"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.92 8.18005H11.69H6.07999C5.11999 8.18005 4.63999 9.34005 5.31999 10.0201L10.5 15.2001C11.33 16.0301 12.68 16.0301 13.51 15.2001L15.48 13.2301L18.69 10.0201C19.36 9.34005 18.88 8.18005 17.92 8.18005Z"
                    fill="#FFFFFF"
                  />
                </svg>
              )}
            </button>
            {subMenuOpen === "services" && (
              <ul className="rounded-md flex flex-col  bg-grey border-grey">
                <button className="p-2 hover:bg-grey">Web Development</button>
                <button className="p-2 hover:bg-grey">SEO</button>
              </ul>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
