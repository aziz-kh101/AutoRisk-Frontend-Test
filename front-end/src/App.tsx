import { useCallback, useEffect, useState } from "react";
import AppNavBar from "./components/AppNavBar";
import { LinkType, ResultTpe } from "./types/types";
import AppContent from "./components/AppContent";

const controller: AbortController = new AbortController();

function App() {
  const [activeLink, setActiveLink] = useState<LinkType>("targets");
  const [result, setResult] = useState<ResultTpe | null>(null);

  const handleLinkChange = useCallback((link: LinkType) => {
    setActiveLink(link);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/result", { signal: controller.signal })
      .then((response) => response.json())
      .then((data: ResultTpe) => {
        setResult(data);
      });

    () => {
      controller.abort();
    };
  }, []);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <AppNavBar activeLink={activeLink} handleLinkChange={handleLinkChange} />
      <AppContent activeLink={activeLink} result={result} />
    </div>
  );
}

export default App;
