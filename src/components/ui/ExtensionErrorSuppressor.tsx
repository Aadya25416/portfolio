"use client";

import { useEffect } from "react";

/**
 * Suppresses benign uncaught promise rejection errors thrown by third-party browser
 * extensions (e.g. password managers, email handlers, ad-blockers) when external protocol
 * handlers like mailto: are triggered and abruptly close extension runtime ports.
 */
export default function ExtensionErrorSuppressor() {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const msg = event.reason?.message || String(event.reason || "");
      if (
        msg.includes("message channel closed before a response was received") ||
        msg.includes("A listener indicated an asynchronous response")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
}

