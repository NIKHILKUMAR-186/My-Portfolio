import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function PWARegister() {
  reactExports.useEffect(() => {
    let stop;
    async function init() {
      try {
        const mod = await import("./virtual_pwa-register-BsSE6A1N.mjs");
        if (mod && mod.registerSW) {
          stop = mod.registerSW({});
        }
      } catch (e) {
      }
    }
    init();
    return () => {
      if (typeof stop === "function") stop();
    };
  }, []);
  return null;
}
const isClient = () => typeof window !== "undefined";
const getPerformanceMode = () => {
  if (!isClient()) return false;
  const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 3;
  const hasLowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  const saveData = navigator.connection?.saveData;
  return Boolean(hasLowMemory || hasLowCPU || saveData);
};
const usePerformanceMode = () => {
  const [performanceMode, setPerformanceMode] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isClient()) return;
    const updateMode = () => setPerformanceMode(getPerformanceMode());
    updateMode();
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMode);
    } else {
      mediaQuery.addListener(updateMode);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMode);
      } else {
        mediaQuery.removeListener(updateMode);
      }
    };
  }, []);
  return performanceMode;
};
const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);
  return reduced;
};
const HydroBackground = () => {
  const canvasRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const timeRef = reactExports.useRef(0);
  reactExports.useRef({ frameCount: 0, lastTime: Date.now(), fps: 60 });
  const performanceMode = usePerformanceMode();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });
  const [isMobile, setIsMobile] = reactExports.useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });
  reactExports.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    const updateTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };
    const observer = new MutationObserver(() => updateTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    updateTheme();
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);
  const shouldAnimate = !performanceMode && !prefersReducedMotion && !isMobile;
  reactExports.useEffect(() => {
    if (!shouldAnimate || theme !== "dark") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    const particles = [];
    const floatingOrbs = [];
    const particleCount = 100;
    const orbCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.8 + 0.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 0.5,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        life: Math.random(),
        maxLife: Math.random() * 0.5 + 0.5
      });
    }
    for (let i = 0; i < orbCount; i++) {
      floatingOrbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 8 + 4,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.2,
        color: Math.random() > 0.5 ? [0, 255, 255] : [0, 150, 255]
      });
    }
    const drawGradientCircle = (x, y, r, color, opacity) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
      const [r_, g_, b_] = color;
      gradient.addColorStop(0, `rgba(${r_},${g_},${b_},${opacity * 0.8})`);
      gradient.addColorStop(0.5, `rgba(${r_},${g_},${b_},${opacity * 0.3})`);
      gradient.addColorStop(1, `rgba(${r_},${g_},${b_},0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };
    const drawWaveLines = (time) => {
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `rgba(0,200,255,${0.1 - i * 0.02})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const amplitude = 30 + i * 5;
        const frequency = 0.01 - i * 2e-3;
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height * 0.3 + Math.sin(x * frequency + time * 0.02) * amplitude + i * 40;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };
    const draw = () => {
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "rgba(5, 15, 30, 0)");
      bgGradient.addColorStop(1, "rgba(2, 8, 20, 0.3)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 1;
      if (timeRef.current % 2 === 0) {
        drawWaveLines(timeRef.current);
      }
      floatingOrbs.forEach((orb) => {
        orb.x += orb.dx;
        orb.y += orb.dy;
        orb.opacity += Math.sin(timeRef.current * 0.01) * 0.1;
        orb.opacity = Math.max(0.1, Math.min(0.6, orb.opacity));
        if (orb.x > canvas.width + 50) orb.x = -50;
        if (orb.x < -50) orb.x = canvas.width + 50;
        if (orb.y > canvas.height + 50) orb.y = -50;
        if (orb.y < -50) orb.y = canvas.height + 50;
        drawGradientCircle(orb.x, orb.y, orb.r * 2, orb.color, orb.opacity * 0.5);
        drawGradientCircle(orb.x, orb.y, orb.r, orb.color, orb.opacity);
      });
      particles.forEach((p) => {
        p.x += p.dx + Math.sin(timeRef.current * 0.01 + p.baseX) * 0.2;
        p.y += p.dy + Math.cos(timeRef.current * 0.01 + p.baseY) * 0.2;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        const pulse = Math.sin(timeRef.current * 0.02 + p.life * Math.PI * 2) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const particleGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
        particleGradient.addColorStop(0, `rgba(100,200,255,${0.6 * pulse})`);
        particleGradient.addColorStop(1, `rgba(0,150,255,${0.2 * pulse})`);
        ctx.fillStyle = particleGradient;
        ctx.fill();
        ctx.strokeStyle = `rgba(0,255,255,${0.3 * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      if (!isMobile && timeRef.current % 3 === 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.strokeStyle = `rgba(0,200,255,${0.1 * (1 - distance / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldAnimate, isMobile, theme]);
  if (theme !== "dark") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "hydro-bg-light",
        style: {
          position: "fixed",
          inset: 0,
          background: "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.12), transparent 22%), radial-gradient(circle at 80% 15%, rgba(168,85,247,0.08), transparent 18%), linear-gradient(180deg, rgba(249,250,251,0.96) 0%, rgba(255,255,255,0.82) 100%)",
          zIndex: -2,
          pointerEvents: "none"
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "hydro-bg-overlay",
        style: {
          position: "fixed",
          inset: 0,
          background: "linear-gradient(135deg, rgba(2,12,27,0.75) 0%, rgba(0,50,100,0.6) 50%, rgba(2,12,27,0.75) 100%)",
          zIndex: -1
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "hydro-bg-radial",
        style: {
          position: "fixed",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(0,100,150,0.1), transparent 50%)",
          zIndex: -1,
          pointerEvents: "none"
        }
      }
    ),
    shouldAnimate && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "canvas",
      {
        className: "hydro-bg-canvas",
        ref: canvasRef,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          filter: "brightness(1.1)"
        }
      }
    )
  ] });
};
const appCss = "/assets/styles-wPKgsBcG.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-bold gradient-text", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:scale-105",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. Try again or head home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:scale-105",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b1024" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Nikhil Kumar — Portfolio" },
      { title: "Nikhil Kumar — Portfolio" },
      { name: "description", content: "Welcome To Profesional portfolio of Nikhil Kumar." },
      { name: "author", content: "Nikhil Kumar" },
      { property: "og:title", content: "Nikhil Kumar — Portfolio" },
      { name: "twitter:title", content: "Nikhil Kumar — Portfolio" },
      { property: "og:description", content: "Welcome To Profesional portfolio of Nikhil Kumar." },
      { name: "twitter:description", content: "Welcome To Profesional portfolio of Nikhil Kumar." },
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1d95ab60-8f0f-4fd7-a43a-87eed72d5cde"
      },
      {
        name: "twitter:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/1d95ab60-8f0f-4fd7-a43a-87eed72d5cde"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/avatar2.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JF5EW6H39Z');
      `
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PWARegister, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HydroBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] });
}
const BASE_URL = "";
const Route$1 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter = () => import("./index-Dxr0m7tr.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Nikhil Kumar — Engineer · Learner · Builder"
    }, {
      name: "description",
      content: "Personal portfolio of Nikhil Kumar — engineering student at MIT Muzaffarpur and IIT Madras BS Data Science, building IoT, AI, and full-stack products."
    }, {
      property: "og:title",
      content: "Nikhil Kumar — Engineer · Learner · Builder"
    }, {
      property: "og:description",
      content: "A living digital timeline of an engineering journey — projects, milestones, and what's next."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$1.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
