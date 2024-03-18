import { Links } from "../types/contants";
import { LinkType } from "../types/types";
import AppLink from "./AppLink";

type NavBarProps = {
  activeLink: LinkType;
  handleLinkChange: (link: LinkType) => void;
};

function AppNavBar({ activeLink, handleLinkChange }: NavBarProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: ".5rem" }}>
      {Links.map((link) => (
        <AppLink
          key={link}
          link={link}
          activeLink={activeLink}
          handleLinkChange={handleLinkChange}
        />
      ))}
    </div>
  );
}

export default AppNavBar;
