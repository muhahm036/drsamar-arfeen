import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Close, CalendarMonthOutlined } from "@mui/icons-material";
import { BrandMark } from "../BrandMark";
import { ButtonLink } from "../ButtonLink";
import { navItems } from "../../data/navigation";
import { siteConfig } from "../../data/siteConfig";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      solid ? "border-b border-navy-100 bg-white/90 shadow-[0_4px_24px_-16px_rgba(11,31,58,0.35)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`
      }>
      
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.doctor.name} — back to top`}>
          <BrandMark inverted={!solid} />
          <span className="min-w-0 leading-tight">
            <span className={`block truncate font-display text-[16px] font-extrabold uppercase tracking-[0.06em] transition-colors ${solid ? "text-navy-900" : "text-white"}`}>
              {siteConfig.doctor.name}
            </span>
            <span className={`block truncate text-[11.5px] font-medium transition-colors ${solid ? "text-navy-500" : "text-navy-200"}`}>
              {siteConfig.doctor.secondaryTitle}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                    solid ?
                    isActive ?
                    "text-navy-900" :
                    "text-navy-500 hover:text-navy-900" :
                    isActive ?
                    "text-white" :
                    "text-navy-200 hover:text-white"}`
                    }>
                    
                    {item.label}
                    {isActive &&
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-heart-500"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }} />

                    }
                  </a>
                </li>);

            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ButtonLink href="#appointment" size="sm" icon={<CalendarMonthOutlined sx={{ fontSize: 17 }} />}>
              Book Appointment
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 transition xl:hidden ${
            solid ? "text-navy-900 ring-navy-100 hover:bg-navy-50" : "text-white ring-white/20 hover:bg-white/10"}`
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}>
            
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden border-t border-navy-100 bg-white xl:hidden">
          
            <nav aria-label="Mobile" className="mx-auto max-h-[calc(100dvh-72px)] max-w-7xl overflow-y-auto px-4 pb-8 pt-3 sm:px-6">
              <ul className="grid gap-1 sm:grid-cols-2">
                {navItems.map((item, i) =>
              <motion.li key={item.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * i }}>
                    <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[48px] items-center rounded-xl px-4 text-[16px] font-semibold transition ${
                  active === item.id ? "bg-navy-50 text-navy-900" : "text-navy-700 hover:bg-navy-50"}`
                  }>
                  
                      {item.label}
                    </a>
                  </motion.li>
              )}
              </ul>
              <div className="mt-5">
                <ButtonLink href="#appointment" size="lg" fullWidth onClick={() => setOpen(false)} icon={<CalendarMonthOutlined sx={{ fontSize: 20 }} />}>
                  Book Appointment
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}