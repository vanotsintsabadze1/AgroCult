"use client";

import { useEffect } from "react";

export default function Error() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-3xl font-bold">Error 404: Page not found</h1>
    </div>
  );
}
