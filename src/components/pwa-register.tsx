"use client";
import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    let stop: any;
    async function init() {
      try {
        const mod = await import("virtual:pwa-register");
        if (mod && mod.registerSW) {
          stop = mod.registerSW({});
        }
      } catch (e) {
        // ignore - PWA not available in dev or not installed
      }
    }

    init();
    return () => {
      if (typeof stop === "function") stop();
    };
  }, []);

  return null;
}
