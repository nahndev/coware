"use client";

import { useState } from "react";
import { v4 } from "uuid";

export function useVersion() {
  const [version, setVersion] = useState(v4());

  const refresh = () => {
    setVersion(v4());
  };

  return [version, refresh] as const;
}
