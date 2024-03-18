import { ReactNode, useMemo } from "react";

type AppLinkProps<T> = {
  link: T;
  activeLink: T;
  handleLinkChange: (link: T) => void;
  size?: "small" | "medium" | "large";
};

function AppLink<T extends ReactNode>({
  link,
  activeLink,
  handleLinkChange,
  size = "medium",
}: AppLinkProps<T>) {
  const active = activeLink === link;

  const config = useMemo(() => {
    if (size === "small") {
      return {
        fontSize: "0.75rem",
        padding: "0.5rem",
        border: "1px",
      };
    } else if (size === "medium") {
      return {
        fontSize: "1rem",
        padding: "1rem",
        border: "3px",
      };
    } else {
      return {
        fontSize: "1.5rem",
        padding: "1.5rem",
        border: "5px",
      };
    }
  }, [size]);

  return (
    <div
      style={{
        fontSize: config.fontSize,
        fontWeight: "bold",
        color: active ? "var(--primary)" : "gray",
        padding: config.padding,
        borderBottom: active ? `${config.border} solid var(--primary)` : "none",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
      onClick={() => handleLinkChange(link)}
    >
      {link}
    </div>
  );
}

export default AppLink;
