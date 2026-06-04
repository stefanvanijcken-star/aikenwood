"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "analytics-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event("analytics-consent-accepted"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <div className="cookie-content">
          <h4>Cookie consent</h4>

          <p>
            We use analytics cookies to understand how visitors interact
            with our website. This helps us improve performance, content,
            and user experience. No advertising cookies are used. Learn more in our{" "}
            <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-link">
              Privacy Policy.
            </a>
          </p>
        </div>

        <div className="cookie-actions">
          <button onClick={accept} className="cookie-button cookie-accept">
            Accept
          </button>

          <button onClick={decline} className="cookie-button cookie-decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}