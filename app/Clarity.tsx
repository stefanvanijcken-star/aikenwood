"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CONSENT_KEY = "analytics-consent";

export default function ClarityInit() {
  useEffect(() => {
    const initClarity = () => {
      const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

      if (!clarityId) return;

      Clarity.init(clarityId);
    };

    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      initClarity();
    }

    window.addEventListener("analytics-consent-accepted", initClarity);

    return () => {
      window.removeEventListener("analytics-consent-accepted", initClarity);
    };
  }, []);

  return null;
}