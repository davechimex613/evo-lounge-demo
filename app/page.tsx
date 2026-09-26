"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Menu as MenuIcon,
  Play,
  X,
} from "lucide-react";

const evoPhotos = [
  "https://vicilook.com/wp-content/uploads/2023/02/09767D65-F4BC-48A9-8601-27DD6D37CC83.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/1F020DDE-F9CE-4D0D-A8B9-381B38989504.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/23ACC452-8FAE-4229-9BCE-E79346770F0B.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/75140E42-F589-48E9-9756-C613249B7676.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/0132F880-B9DA-4706-A420-DFEBF4EF2746.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/B7DB53AB-F935-43C7-8C25-D1256498F983.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/222484AE-B6D2-432B-81B7-A8C67F6EB55A.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/0F4247A5-05C4-4B9E-A24C-01AF71E2538B.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/2349A8D9-E2F9-4FD9-8B80-CAB26FD85F0A.jpeg",
  "https://vicilook.com/wp-content/uploads/2023/02/5E5D4C8E-B637-4BD9-BEE7-2638617ABE32.jpeg",
];

const heroMedia = [
  {
    src: "/food/jollof-rice.jpg",
    label: "Jollof Rice",
  },
  {
    src: "/food/pepper-soup.jpg",
    label: "African Pepper Soup",
  },
  {
    src: "/food/fufu-egusi.jpg",
    label: "Fufu & Egusi",
  },
  {
    src: "/food/shawarma-ice-cream.jpg",
    label: "Shawarma & Ice Cream",
  },
  {
    src: "/food/goat-head.jpg",
    label: "Goat Head · Isi Ewu",
  },
  {
    src: "/food/suya.jpg",
    label: "Suya",
  },
  {
    src: "/food/milkshake.jpg",
    label: "Milkshake",
  },
];

const foodPhotos = [
  {
    name: "Chicken & Chips",
    image:
      "https://images.pexels.com/photos/14994659/pexels-photo-14994659.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Peppered Chicken",
    image:
      "https://images.pexels.com/photos/5339083/pexels-photo-5339083.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Chicken Pepper Soup",
    image:
      "https://images.pexels.com/photos/37648018/pexels-photo-37648018.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const menuItems = [
  "Chicken & Chips",
  "Indomie & Egg",
  "Peppered Chicken",
  "Chicken Pepper Soup",
  "Catfish Pepper Soup",
  "Peppered Beef",
  "Peppered Goat Meat",
  "Goat Meat Pepper Soup",
  "Goat Head (Isi Ewu)",
];

const galleryMedia = [
  ...evoPhotos.map((image) => ({
    type: "image" as const,
    src: image,
  })),
  {
    type: "video" as const,
    src: "/evo-hero.mp4",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(0);
  const [foodSlide, setFoodSlide] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
    setHeroSlide((current) => (current + 1) % heroMedia.length);
  }, 6000);

  return () => clearInterval(timer);
}, []);

  useEffect(() => {
    if (!galleryOpen) return;

    const timer = setInterval(() => {
      setActiveGallery((current) => (current + 1) % galleryMedia.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [galleryOpen]);

  useEffect(() => {
    document.body.style.overflow = galleryOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#171714]">
      {/* NAVIGATION + HERO */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex items-center justify-between rounded-full border border-white/20 bg-black/25 px-5 py-3 text-white backdrop-blur-xl md:px-7">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3"
            >
              <img
                src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063649896241"
                alt="Evo"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/60 sm:block">
                Eatery Â· Lounge Â· Rooftop Bar
              </span>
            </button>

            <nav className="hidden items-center gap-8 md:flex">
              <button
                onClick={() => scrollTo("experience")}
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                Experience
              </button>

              <button
                onClick={() => scrollTo("menu")}
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                Menu
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                Gallery
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setGalleryOpen(true)}
                className="hidden rounded-full border border-white/35 px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black sm:block"
              >
                View Gallery
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-full border border-white/20 p-2.5 md:hidden"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X size={16} /> : <MenuIcon size={16} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#171714]/95 p-4 text-white backdrop-blur-xl md:hidden"
              >
                {[
                  ["Experience", "experience"],
                  ["Menu", "menu"],
                  ["Gallery", "gallery"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="block w-full border-b border-white/10 py-4 text-left text-[10px] uppercase tracking-[0.2em] text-white/75 last:border-0"
                  >
                    {label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <section id="home" className="px-3 pt-3 md:px-5">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#181714]">
          <div className="relative h-[680px] md:h-[780px]">
            <AnimatePresence mode="sync">
              <motion.img
                key={heroMedia[heroSlide].src}
                src={heroMedia[heroSlide].src}
                alt={heroMedia[heroSlide].label}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.045 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1.4, ease: "easeInOut" },
                  scale: { duration: 7, ease: "linear" },
                }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-12 lg:p-16">
              <div className="max-w-[900px]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-white/70" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/75">
                    Nnewi Â· Anambra Â· Nigeria
                  </p>
                </div>

                <h1 className="max-w-[780px] font-serif text-[42px] font-normal leading-[0.98] tracking-[-0.025em] sm:text-[52px] md:text-[64px] lg:text-[72px]">
                  Good food.
                  <br />
                  Good nights.
                  <br />
                  <span className="text-white/70">All at Evo.</span>
                </h1>

                <p className="mt-6 max-w-[470px] text-[12px] leading-6 text-white/70 md:text-[13px]">
                  Eat, unwind and stay late at Nnewi's eatery, lounge and rooftop destination.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollTo("menu")}
                    className="rounded-full bg-white px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#171714] transition hover:bg-[#e8e2d7]"
                  >
                    Explore Menu
                  </button>

                  <button
                    onClick={() => scrollTo("experience")}
                    className="rounded-full border border-white/35 bg-white/5 px-6 py-3 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                  >
                    Experience Evo
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-7 right-6 hidden items-center gap-2 md:flex">
              {heroMedia.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => setHeroSlide(index)}
                  aria-label={`Show ${item.label}`}
                  className={`h-[2px] transition-all duration-500 ${
                    index === heroSlide
                      ? "w-9 bg-white"
                      : "w-4 bg-white/35 hover:bg-white/65"
                  }`}
                />
              ))}
            </div>

            <div className="absolute right-6 top-28 hidden md:block">
              <div className="rounded-full border border-white/20 bg-black/15 px-4 py-2 backdrop-blur-sm">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/65">
                  {heroMedia[heroSlide].label}
                </p>
              </div>
            </div>
          </div>

          <div className="grid border-t border-white/10 bg-[#171714] text-white sm:grid-cols-3">
            {[
              ["01", "Eatery", "Local & continental dining"],
              ["02", "Lounge", "Music, drinks & nightlife"],
              ["03", "Rooftop", "Views across Nnewi"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-b border-white/10 px-6 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-9"
              >
                <p className="mb-4 text-[9px] tracking-[0.2em] text-white/35">
                  {number}
                </p>
                <h2 className="font-serif text-xl font-normal">{title}</h2>
                <p className="mt-2 text-[11px] text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1240px] px-5 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#777066]">
              Welcome to Evo
            </p>
          </div>

          <div>
            <h2 className="max-w-[820px] font-serif text-[42px] font-normal leading-[1.05] tracking-[-0.025em] md:text-[58px]">
              A place for good food, good music and nights worth remembering.
            </h2>

            <div className="mt-8 flex max-w-[680px] items-start gap-6">
              <div className="mt-2 h-px w-14 shrink-0 bg-[#171714]" />
              <p className="text-[15px] leading-7 text-[#625d55]">
                From the eatery downstairs to the lounge and rooftop above,
                Evo brings together food, drinks, music and nightlife under
                one roof in the heart of Nnewi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD FEATURE */}
      <section className="border-y border-[#d9d3c7] bg-[#ebe6dc]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#777066]">
                From the kitchen
              </p>
              <h2 className="font-serif text-[40px] leading-none tracking-[-0.025em] md:text-[54px]">
                Come hungry.
              </h2>
            </div>

            <p className="hidden max-w-[330px] text-right text-xs leading-6 text-[#777066] md:block">
              A few favourites from the Evo menu, presented with the same
              attention to detail as the experience itself.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {foodPhotos.map((food, index) => (
              <motion.div
                key={food.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[24px]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#d7d1c5]">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 pt-24">
                  <p className="font-serif text-2xl text-white">{food.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#d1cabc] pt-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#777066]">
              Food selection
            </p>

            <button
              onClick={() => scrollTo("menu")}
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.18em]"
            >
              View menu
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#777066]">
              The experience
            </p>

            <h2 className="max-w-[560px] font-serif text-[45px] leading-[1.03] tracking-[-0.025em] md:text-[62px]">
              Three spaces.
              <br />
              One destination.
            </h2>

            <p className="mt-8 max-w-[490px] text-[15px] leading-7 text-[#625d55]">
              Whether you are coming for dinner, meeting friends for drinks or
              staying into the night, every level of Evo has its own rhythm.
            </p>

            <div className="mt-10 space-y-0 border-t border-[#d6d0c4]">
              {[
                ["Eatery", "Food, pastries, shawarma and more."],
                ["Lounge & Club", "Music, drinks and late-night energy."],
                ["Rooftop", "An elevated setting above Nnewi."],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-5 border-b border-[#d6d0c4] py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] text-[#999187]">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-xl">{title}</span>
                  </div>
                  <span className="hidden max-w-[220px] text-right text-xs leading-5 text-[#777066] sm:block">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[26px] bg-[#ded8cd]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={evoPhotos[foodSlide + 2] || evoPhotos[0]}
                  src={evoPhotos[foodSlide + 2] || evoPhotos[0]}
                  alt="Evo Lounge"
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#171714] px-6 py-5 text-white shadow-xl md:-left-7">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/45">
                Location
              </p>
              <p className="mt-1 text-sm">44 Igwe Orizu Road, Nnewi</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#171714] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/40">
                Inside Evo
              </p>

              <h2 className="font-serif text-[45px] leading-none tracking-[-0.025em] md:text-[60px]">
                The gallery
              </h2>
            </div>

            <button
              onClick={() => setGalleryOpen(true)}
              className="hidden items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-[10px] uppercase tracking-[0.16em] transition hover:bg-white hover:text-black sm:flex"
            >
              Open gallery
              <ArrowRight size={13} />
            </button>
          </div>

          <div className="grid auto-rows-[230px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
            <motion.button
              onClick={() => {
                setActiveGallery(0);
                setGalleryOpen(true);
              }}
              className="group relative col-span-2 row-span-2 overflow-hidden rounded-[22px] text-left"
            >
              <img
                src={evoPhotos[0]}
                alt="Evo Lounge"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                  01
                </p>
                <p className="mt-1 font-serif text-2xl">Evo</p>
              </div>
            </motion.button>

            {evoPhotos.slice(1, 5).map((image, index) => (
              <motion.button
                key={image}
                onClick={() => {
                  setActiveGallery(index + 1);
                  setGalleryOpen(true);
                }}
                className="group overflow-hidden rounded-[22px]"
                whileHover={{ y: -3 }}
              >
                <img
                  src={image}
                  alt="Evo Lounge"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => setGalleryOpen(true)}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full border border-white/15 py-4 text-[10px] uppercase tracking-[0.18em] sm:hidden"
          >
            Open full gallery
            <ArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-[#f5f2eb]">
        <div className="mx-auto max-w-[1120px] px-5 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#777066]">
                Food & drinks
              </p>

              <h2 className="font-serif text-[48px] leading-[0.98] tracking-[-0.025em] md:text-[64px]">
                The
                <br />
                menu.
              </h2>

              <p className="mt-7 max-w-[300px] text-sm leading-6 text-[#777066]">
                A selection of dishes available at Evo. Ask our team about
                today's availability.
              </p>
            </div>

            <div className="border-t border-[#d4cec2]">
              {menuItems.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-b border-[#d4cec2] py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[9px] text-[#999187]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[20px] md:text-[23px]">
                      {item}
                    </span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-[#aaa49a] transition-transform group-hover:translate-x-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NIGHTLIFE VIDEO */}
      <section className="px-3 pb-3 md:px-5">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#171714] text-white">
          <div className="px-6 pb-8 pt-14 md:px-12 md:pb-10 md:pt-20">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/40">
                  After dark
                </p>

                <h2 className="font-serif text-[44px] leading-none tracking-[-0.025em] md:text-[60px]">
                  Stay for the night.
                </h2>
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
                <Play size={12} fill="currentColor" />
                Evo nightlife
              </div>
            </div>
          </div>

          <div className="mx-4 mb-4 overflow-hidden rounded-[22px] md:mx-8 md:mb-8">
            <div className="relative aspect-[16/7] min-h-[280px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/evo-hero.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1240px] px-5 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#777066]">
              Find Evo
            </p>

            <h2 className="font-serif text-[48px] leading-[1] tracking-[-0.025em] md:text-[66px]">
              Come
              <br />
              through.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <div className="border-t border-[#d4cec2] pt-6">
              <div className="flex gap-4">
                <MapPin size={17} className="mt-1 shrink-0" />
                <div>
                  <p className="font-serif text-xl">Evo Eatery, Lounge & Rooftop</p>
                  <p className="mt-2 max-w-[350px] text-sm leading-6 text-[#777066]">
                    44 Igwe Orizu Road,
                    <br />
                    Nnewi, Anambra State, Nigeria.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/explore/locations/234800676561774/evo-lounge/recent/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-[#cfc8bb] px-5 py-3 text-[10px] uppercase tracking-[0.16em] transition hover:bg-[#171714] hover:text-white"
              >
                <span className="text-[11px] font-semibold">IG</span>`r`n                Instagram
              </a>

              <a
                href="tel:+2348022248852"
                className="rounded-full bg-[#171714] px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-white transition hover:bg-[#302f2b]"
              >
                Call Evo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-3 pb-3 md:px-5">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[#171714] text-white">

          <div className="relative overflow-hidden">
            <div className="relative h-[360px] md:h-[430px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/evo-hero.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/50">
                  Get in touch
                </p>

                <img
                  src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063649896241"
                  alt="Evo"
                  className="h-14 w-auto object-contain brightness-0 invert md:h-20"
                />

                <p className="mt-6 max-w-[560px] font-serif text-[28px] leading-tight md:text-[42px]">
                  Good food. Great nights.
                  <br />
                  See you at Evo.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr]">

            {/* CONTACT DETAILS */}
            <div className="px-6 py-12 md:px-10 md:py-14">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                Contact
              </p>

              <h2 className="mt-3 font-serif text-[40px] leading-none md:text-[52px]">
                Us
              </h2>

              <div className="mt-10 space-y-7">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Address
                  </p>
                  <p className="mt-2 max-w-[340px] text-sm leading-6 text-white/75">
                    44 Igwe Orizu Road,
                    <br />
                    Nnewi, Anambra State, Nigeria
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Phone
                  </p>

                  <div className="mt-2 flex flex-col gap-1 text-sm text-white/75">
                    <a
                      href="tel:+2348022248852"
                      className="transition hover:text-white"
                    >
                      0802 224 8852
                    </a>

                    <a
                      href="tel:+2349032159753"
                      className="transition hover:text-white"
                    >
                      0903 215 9753
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Email
                  </p>

                  <a
                    href="mailto:evolutionbarjp@gmail.com"
                    className="mt-2 block text-sm text-white/75 transition hover:text-white"
                  >
                    evolutionbarjp@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Social
                  </p>

                  <a
                    href="https://www.instagram.com/explore/locations/234800676561774/evo-lounge/recent/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[9px] font-semibold">
                      IG
                    </span>
                    Follow Evo on Instagram
                  </a>
                </div>

              </div>
            </div>

            {/* MAP */}
            <div className="border-t border-white/10 md:border-l md:border-t-0">
              <div className="h-full min-h-[400px]">
                <iframe
                  title="Evo Lounge Nnewi Location"
                  src="https://www.google.com/maps?q=44+Igwe+Orizu+Road,+Nnewi,+Anambra,+Nigeria&output=embed"
                  className="h-full min-h-[400px] w-full grayscale-[0.25] opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* FOOTER NAV */}
          <div className="grid border-t border-white/10 md:grid-cols-4">

            <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r md:px-8">
              <p className="font-serif text-xl">Evo</p>
              <p className="mt-3 max-w-[240px] text-xs leading-6 text-white/40">
                Eatery, lounge, club and rooftop bar in the heart of Nnewi.
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r md:px-8">
              <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35">
                Navigate
              </p>

              <div className="space-y-3 text-xs text-white/55">
                <button
                  onClick={() => scrollTo("experience")}
                  className="block transition hover:text-white"
                >
                  Experience
                </button>

                <button
                  onClick={() => scrollTo("menu")}
                  className="block transition hover:text-white"
                >
                  Our Menu
                </button>

                <button
                  onClick={() => scrollTo("gallery")}
                  className="block transition hover:text-white"
                >
                  Gallery
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="block transition hover:text-white"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="border-b border-white/10 px-6 py-8 md:border-b-0 md:border-r md:px-8">
              <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35">
                Experience
              </p>

              <div className="space-y-3 text-xs text-white/55">
                <p>Eatery</p>
                <p>Lounge & Club</p>
                <p>VIP</p>
                <p>Rooftop Bar</p>
              </div>
            </div>

            <div className="px-6 py-8 md:px-8">
              <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35">
                Visit
              </p>

              <a
                href="https://maps.app.goo.gl/tnaz8cJGrx5huyfQ7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/55 transition hover:text-white"
              >
                Open location
                <ArrowRight size={12} />
              </a>

              <a
                href="tel:+2348022248852"
                className="mt-3 block text-xs text-white/55 transition hover:text-white"
              >
                Call Evo
              </a>
            </div>

          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-white/10 px-6 py-6 text-[9px] uppercase tracking-[0.16em] text-white/30 md:flex-row md:px-8">
            <p>ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© {new Date().getFullYear()} Evo Eatery, Lounge & Rooftop</p>
            <p>44 Igwe Orizu Road ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· Nnewi ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· Anambra</p>
          </div>

        </div>
      </footer>
      {/* FULL GALLERY MODAL */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#11110f]/95 p-3 backdrop-blur-xl md:p-6"
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#171714]">
              <div className="flex items-center justify-between px-5 py-4 text-white md:px-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    Evo
                  </p>
                  <p className="mt-1 font-serif text-xl">Gallery</p>
                </div>

                <button
                  onClick={() => setGalleryOpen(false)}
                  className="rounded-full border border-white/15 p-3 transition hover:bg-white hover:text-black"
                  aria-label="Close gallery"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="relative min-h-0 flex-1 p-3 pt-0 md:p-5 md:pt-0">
                <div className="relative h-full overflow-hidden rounded-[22px] bg-black">
                  <AnimatePresence mode="wait">
  {galleryMedia[activeGallery].type === "image" ? (
    <motion.img
      key={galleryMedia[activeGallery].src}
      src={galleryMedia[activeGallery].src}
      alt="Evo Lounge gallery"
      className="h-full w-full object-contain"
      initial={{ opacity: 0, scale: 1.015 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.8 }}
    />
  ) : (
    <motion.video
      key={galleryMedia[activeGallery].src}
      src={galleryMedia[activeGallery].src}
      className="h-full w-full object-contain"
      autoPlay
      muted
      loop
      playsInline
    />
  )}
</AnimatePresence>

                  <div className="absolute bottom-5 left-5 rounded-full bg-black/50 px-4 py-2 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {String(activeGallery + 1).padStart(2, "0")} /{" "}
                    {String(galleryMedia.length).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-5 right-5 flex gap-2">
                    <button
                      onClick={() =>
                        setActiveGallery(
                          (activeGallery - 1 + galleryMedia.length) %
                            galleryMedia.length
                        )
                      }
                      className="rounded-full bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
                      ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â
                    </button>

                    <button
                      onClick={() =>
                        setActiveGallery(
                          (activeGallery + 1) % galleryMedia.length
                        )
                      }
                      className="rounded-full bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
                      ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 overflow-x-auto px-5 py-4 md:px-7">
                {galleryMedia.map((media, index) => (
                  <button
                    key={`${media.src}-${index}`}
                    onClick={() => setActiveGallery(index)}
                    className={`h-1.5 shrink-0 rounded-full transition-all ${
                      activeGallery === index
                        ? "w-12 bg-white"
                        : "w-5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

