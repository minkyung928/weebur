import { useEffect, useState } from "react";

type ViewMode = "grid" | "list";

export default function useViewMode(defaultMode: ViewMode = "grid") {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultMode);

  useEffect(() => {
    const storedMode = localStorage.getItem("viewMode") as ViewMode | null;
    const storedTime = localStorage.getItem("viewModeSetAt");
    const now = Date.now();

    if (
      storedMode &&
      storedTime &&
      now - parseInt(storedTime, 10) < 1000 * 60 * 60 * 24
    ) {
      setViewMode(storedMode);
    } else {
      const random = Math.random() < 0.5 ? "grid" : "list";
      localStorage.setItem("viewMode", random);
      localStorage.setItem("viewModeSetAt", String(now));
      setViewMode(random);
    }
  }, []);

  return viewMode;
}
