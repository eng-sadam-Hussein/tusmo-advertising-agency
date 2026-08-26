// src/pages/Home.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  PenTool,
  Megaphone,
  MonitorSmartphone,
  PencilRuler,
  Quote,
  Users,
  BriefcaseBusiness,
  BarChart3,
  CheckCircle2,
  XCircle,
  Sparkles,
  Target,
} from "lucide-react";

/* =========================================================
   HERO SLIDER IMAGES
   KEEP USING LOCAL ASSETS
========================================================= */

import developerImg from "../assets/team-slider/developer.png";
import graphicDesignerImg from "../assets/team-slider/graphic-designer.png";
import photographerImg from "../assets/team-slider/photographer.png";
import droneOperatorImg from "../assets/team-slider/drone-operator.png";
import videoEditorImg from "../assets/team-slider/video-editor.png";

/* =========================================================
   CLIENT LOGOS
========================================================= */

import c1 from "../assets/client1.png";
import c2 from "../assets/client2.png";
import c3 from "../assets/client3.png";
import c4 from "../assets/client4.png";
import c5 from "../assets/client5.png";
import c6 from "../assets/client6.png";

const BRAND_DARK = "#0B2A4A";
const BRAND_ACCENT = "#1D9BD1";

/* =========================================================
   ONLINE AI TESTIMONIAL PROFILE GENERATOR

   IMPORTANT:
   THESE IMAGES ARE ONLY FOR TESTIMONIALS.
   THEY ARE NOT THE HERO SLIDER IMAGES.
========================================================= */

function makeAiProfile(prompt, seed) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?width=512&height=512&seed=${seed}&nologo=true`;
}

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Branding",
    text: "We create memorable brand identities that connect and leave a lasting impression.",
    icon: PenTool,
  },
  {
    title: "Social Media Marketing",
    text: "Engage your audience and grow your brand with data-driven social strategies.",
    icon: Megaphone,
  },
  {
    title: "Web Design",
    text: "Beautiful, responsive websites designed to deliver amazing user experiences.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content Creation",
    text: "Compelling content that tells your story and drives real results.",
    icon: PencilRuler,
  },
];

/* =========================================================
   PRICING PLANS
========================================================= */

const pricingPlans = [
  {
    name: "MACIIN PACKAGE",
    audience: "Small businesses",
    price: "$120.00",
    featured: false,

    features: [
      {
        label: "Page Setup",
        included: true,
      },
      {
        label: "Facebook Cover (1)",
        included: true,
      },
      {
        label: "Ads Management",
        included: false,
      },
      {
        label: "12 Posters Design",
        included: true,
      },
      {
        label: "Voice Over",
        included: false,
      },
      {
        label: "2 Footage Video",
        included: true,
      },
      {
        label: "Content Creation",
        included: true,
      },
      {
        label: "Talo siin",
        included: true,
      },
    ],
  },

  {
    name: "MAHDIYE PACKAGE",
    audience: "Growing businesses",
    price: "$180.00",
    featured: true,

    features: [
      {
        label: "Page Setup",
        included: true,
      },
      {
        label: "Facebook Cover (2)",
        included: true,
      },
      {
        label: "Ads Management",
        included: true,
      },
      {
        label: "21 Posters Design",
        included: true,
      },
      {
        label: "2 Voice Over",
        included: true,
      },
      {
        label: "3 Footage Videos",
        included: true,
      },
      {
        label: "Content Creation",
        included: true,
      },
      {
        label: "Talo siin",
        included: true,
      },
    ],
  },

  {
    name: "MAQSUUD PACKAGE",
    audience: "Established brands",
    price: "$230.00",
    featured: false,

    features: [
      {
        label: "Page Setup",
        included: true,
      },
      {
        label: "Facebook Cover (3)",
        included: true,
      },
      {
        label: "Ads Management",
        included: true,
      },
      {
        label: "50 Posters Design",
        included: true,
      },
      {
        label: "4 Voice Over",
        included: true,
      },
      {
        label: "4 Footage Videos",
        included: true,
      },
      {
        label: "Content Creation",
        included: true,
      },
      {
        label: "Talo siin",
        included: true,
      },
    ],
  },
];

/* =========================================================
   AWESOME PROJECTS
========================================================= */

const awesomeProjects = [
  {
    title: "Ministry of Health & Human Services",
    category: "Media Coverage",
    image: c1,

    text: "Workshop and seminar photography, video documentation, and campaign poster coverage for public communication activities.",
  },

  {
    title: "Gobolka Banaadir",
    category: "Event Coverage",
    image: c2,

    text: "Professional workshop and event photography, video coverage, and promotional poster content for official activities.",
  },

  {
    title: "UNICEF",
    category: "Photo & Video",
    image: c3,

    text: "Seminar and workshop media coverage including professional photography, video recording, and supporting visual content.",
  },

  {
    title: "Save the Children",
    category: "Creative Coverage",
    image: c4,

    text: "Workshop and campaign coverage through photography, video production, and poster-ready creative content.",
  },
];

/* =========================================================
   CLIENT TESTIMONIALS

   COMPLETELY DIFFERENT FROM HERO SLIDER.

   ORDER:
   1 MAN
   2 WOMAN
   3 MAN
   4 WOMAN
   5 MAN
   6 WOMAN
========================================================= */

const testimonials = [
  {
    name: "Ahmed Warsame",

    role: "Business Owner",

    image: makeAiProfile(
      `
      photorealistic professional headshot portrait of a Somali man,
      early 30s,
      East African Somali appearance,
      successful business owner,
      smart navy business casual clothing,
      confident friendly expression,
      clean modern studio background,
      professional corporate profile photo,
      natural skin texture,
      realistic photography,
      centered face,
      shoulders visible,
      no text,
      no logo
      `,
      101
    ),

    text:
      "Tusmo helped our business build a stronger and more professional visual identity. Their communication was clear, the creative process was organized, and the final work represented our brand very well.",
  },

  {
    name: "Hodan Ali",

    role: "Program Coordinator",

    image: makeAiProfile(
      `
      photorealistic professional headshot portrait of a Somali woman,
      late 20s,
      East African Somali appearance,
      wearing an elegant modest professional hijab,
      program coordinator,
      warm confident expression,
      clean bright corporate studio background,
      realistic professional photography,
      natural skin texture,
      centered portrait,
      shoulders visible,
      no text,
      no logo
      `,
      202
    ),

    text:
      "Our workshop media coverage was handled professionally from beginning to end. The photography, video documentation, and final creative materials were organized, clean, and delivered on time.",
  },

  {
    name: "Abdirahman Yusuf",

    role: "Operations Manager",

    image: makeAiProfile(
      `
      photorealistic corporate profile portrait of a Somali man,
      mid 30s,
      East African Somali appearance,
      operations manager,
      professional dark shirt and blazer,
      confident calm expression,
      modern office studio background,
      realistic professional headshot photography,
      natural lighting,
      centered face,
      shoulders visible,
      no text,
      no logo
      `,
      303
    ),

    text:
      "Tusmo understood our requirements quickly and delivered professional creative materials with strong attention to detail. Their reliability and communication made the entire project easy to manage.",
  },

  {
    name: "Fadumo Hassan",

    role: "Marketing Manager",

    image: makeAiProfile(
      `
      photorealistic professional portrait of a Somali woman,
      early 30s,
      East African Somali appearance,
      elegant black hijab,
      professional marketing manager,
      stylish modest business clothing,
      confident friendly smile,
      premium modern corporate background,
      realistic studio headshot photography,
      centered portrait,
      shoulders visible,
      no text,
      no logo
      `,
      404
    ),

    text:
      "The Tusmo team improved the quality and consistency of our campaign visuals and digital content. Their designs were modern, clear, professional, and aligned with the audience we wanted to reach.",
  },

  {
    name: "Mohamed Nur",

    role: "Event Coordinator",

    image: makeAiProfile(
      `
      photorealistic professional headshot portrait of a Somali man,
      late 20s,
      East African Somali appearance,
      event coordinator,
      modern smart casual professional outfit,
      friendly confident expression,
      subtle creative agency office background,
      high quality realistic photography,
      natural skin texture,
      centered face,
      shoulders visible,
      no text,
      no logo
      `,
      505
    ),

    text:
      "Their event media team was dependable, organized, and easy to work with. We received strong photography, useful video footage, and professional content for our post-event communication.",
  },

  {
    name: "Ayaan Mohamed",

    role: "Communications Officer",

    image: makeAiProfile(
      `
      photorealistic professional corporate headshot of a Somali woman,
      late 20s,
      East African Somali appearance,
      elegant navy hijab,
      communications officer,
      modest professional clothing,
      approachable confident smile,
      clean modern office studio background,
      realistic photography,
      natural lighting,
      centered face,
      shoulders visible,
      no text,
      no logo
      `,
      606
    ),

    text:
      "Tusmo listened carefully to our ideas and transformed them into polished digital content. Communication throughout the project was smooth and the final presentation exceeded our expectations.",
  },
];

/* =========================================================
   CUSTOMERS
========================================================= */

const customers = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
];

/* =========================================================
   HERO SLIDER

   THESE ARE THE ORIGINAL LOCAL ASSET IMAGES.
========================================================= */

const heroSlides = [
  {
    image: developerImg,
    label: "Web Developer",
  },

  {
    image: graphicDesignerImg,
    label: "Graphic Designer",
  },

  {
    image: photographerImg,
    label: "Photographer",
  },

  {
    image: droneOperatorImg,
    label: "Drone Operator",
  },

  {
    image: videoEditorImg,
    label: "Video Editor",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const [
    activeHeroSlide,
    setActiveHeroSlide,
  ] = useState(0);

  /* =======================================================
     HERO SLIDER
     1 SECOND
  ======================================================= */

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        setActiveHeroSlide(
          (current) =>
            (current + 1) %
            heroSlides.length
        );
      }, 1000);

    return () =>
      window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white text-slate-900 [font-family:Inter,sans-serif]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(29,155,209,0.14),_transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">

        <div
          className="pointer-events-none absolute left-[-90px] top-[-80px] h-[220px] w-[220px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${BRAND_ACCENT}18`,
          }}
        />

        <div
          className="pointer-events-none absolute right-[-70px] top-[20px] h-[180px] w-[180px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${BRAND_DARK}10`,
          }}
        />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* HERO TEXT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.05,
                duration: 0.5,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm"
            >

              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor:
                    BRAND_ACCENT,
                }}
              />

              Smart Creative Agency

            </motion.div>

            <h1 className="mt-6 max-w-[660px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-[48px] lg:text-[64px]">

              <span className="block">
                Grow Your Brand with
              </span>

              <span className="mt-2 block text-slate-800">

                Creative{" "}

                <span
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      `linear-gradient(90deg, ${BRAND_ACCENT}, #55c4ff, ${BRAND_DARK})`,
                  }}
                >
                  Digital Solutions
                </span>

              </span>

            </h1>

            <p className="mt-6 max-w-[620px] text-[15px] leading-8 text-slate-600 md:text-[16px]">

              We help businesses build strong brands,
              engage audiences, and drive growth through
              smart design, effective marketing, and
              powerful digital strategies.

            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(29,155,209,0.28)] transition duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor:
                    BRAND_ACCENT,
                }}
              >

                Get Started

                <ArrowRight
                  className="ml-2"
                  size={17}
                />

              </Link>

              <Link
                to="/highlights"
                className="inline-flex items-center justify-center rounded-2xl border border-sky-100 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600"
              >

                View Portfolio

                <ArrowRight
                  className="ml-2"
                  size={17}
                />

              </Link>

            </div>

          </motion.div>

          {/* =================================================
              HERO IMAGE SLIDER

              ORIGINAL LOCAL ASSET IMAGES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 28,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative h-[520px] w-full max-w-[610px] overflow-hidden sm:h-[610px] lg:h-[660px]">

              <div
                className="absolute inset-x-8 bottom-8 top-8 rounded-[44px] blur-3xl"
                style={{
                  backgroundColor:
                    `${BRAND_ACCENT}16`,
                }}
              />

              {heroSlides.map(
                (slide, index) => (
                  <motion.div
                    key={slide.label}
                    initial={false}
                    animate={{
                      opacity:
                        activeHeroSlide ===
                        index
                          ? 1
                          : 0,

                      x:
                        activeHeroSlide ===
                        index
                          ? 0
                          : index <
                            activeHeroSlide
                          ? -50
                          : 50,

                      scale:
                        activeHeroSlide ===
                        index
                          ? 1
                          : 0.94,
                    }}
                    transition={{
                      duration: 0.48,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 flex items-end justify-center"
                    style={{
                      pointerEvents:
                        activeHeroSlide ===
                        index
                          ? "auto"
                          : "none",
                    }}
                  >

                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="h-full w-full object-contain object-bottom drop-shadow-[0_24px_38px_rgba(11,42,74,0.18)]"
                    />

                  </motion.div>
                )
              )}

              {/* HERO SLIDER DOTS */}

              <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-lg backdrop-blur">

                {heroSlides.map(
                  (slide, index) => (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() =>
                        setActiveHeroSlide(
                          index
                        )
                      }
                      aria-label={`Show ${slide.label}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeHeroSlide ===
                        index
                          ? "w-7"
                          : "w-2"
                      }`}
                      style={{
                        backgroundColor:
                          activeHeroSlide ===
                          index
                            ? BRAND_ACCENT
                            : "#cbd5e1",
                      }}
                    />
                  )
                )}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-white py-8 md:py-12">

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-8 text-center"
          >

            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-bold"
              style={{
                backgroundColor:
                  `${BRAND_ACCENT}12`,
                color:
                  BRAND_ACCENT,
              }}
            >

              Our Core Services

            </span>

            <h2 className="mt-4 text-[30px] font-extrabold tracking-[-0.02em] text-slate-900 md:text-[42px]">

              Services That Build Your Brand

            </h2>

          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

            {services.map(
              (item, index) => {
                const Icon =
                  item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 22,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-70px",
                    }}
                    transition={{
                      duration: 0.45,
                      delay:
                        index * 0.06,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_34px_rgba(2,6,23,0.05)] transition duration-300 hover:border-sky-200 hover:shadow-[0_18px_40px_rgba(29,155,209,0.14)]"
                  >

                    <div
                      className="absolute inset-x-0 top-0 h-0.5 scale-x-0 transition duration-300 group-hover:scale-x-100"
                      style={{
                        backgroundColor:
                          BRAND_ACCENT,
                      }}
                    />

                    <div className="flex items-start gap-4">

                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white transition duration-300 group-hover:scale-110"
                        style={{
                          background:
                            `linear-gradient(135deg, ${BRAND_ACCENT}, #55c4ff)`,
                        }}
                      >

                        <Icon
                          size={23}
                        />

                      </div>

                      <div>

                        <h3 className="text-[18px] font-extrabold text-slate-900 transition duration-300 group-hover:text-sky-600">
                          {
                            item.title
                          }
                        </h3>

                        <p className="mt-3 text-[14px] leading-7 text-slate-600">
                          {
                            item.text
                          }
                        </p>

                      </div>

                    </div>

                    <div
                      className="pointer-events-none absolute -bottom-16 right-[-20px] h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
                      style={{
                        backgroundColor:
                          `${BRAND_ACCENT}18`,
                      }}
                    />

                  </motion.div>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="bg-white py-6 md:py-10">

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="grid overflow-hidden rounded-[28px] md:grid-cols-3"
            style={{
              background:
                `linear-gradient(135deg, ${BRAND_DARK} 0%, #0f3561 100%)`,
            }}
          >

            <CountCard
              icon={
                <Users
                  size={26}
                />
              }
              end={25}
              label="Happy Clients"
            />

            <CountCard
              icon={
                <BarChart3
                  size={26}
                />
              }
              end={30}
              label="Campaigns Delivered"
              bordered
            />

            <CountCard
              icon={
                <BriefcaseBusiness
                  size={26}
                />
              }
              end={45}
              label="Completed Projects"
              bordered
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          AWESOME PROJECTS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-16 md:py-20">

        <div
          className="pointer-events-none absolute left-[-90px] top-10 h-[220px] w-[220px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${BRAND_ACCENT}12`,
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
                style={{
                  backgroundColor:
                    `${BRAND_ACCENT}12`,
                  color:
                    BRAND_ACCENT,
                }}
              >

                <Sparkles
                  size={14}
                />

                Awesome Projects From Team

              </span>

              <h2 className="mt-4 text-[32px] font-extrabold tracking-[-0.03em] text-slate-900 md:text-[44px]">

                Creative Work Built With Strategy

              </h2>

              <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">

                Real media and creative work
                delivered for organizations through
                workshop coverage, seminar photography,
                video production, and posters.

              </p>

            </motion.div>

            <Link
              to="/highlights"
              className="inline-flex items-center justify-center rounded-2xl border border-sky-100 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600"
            >

              View More Projects

              <ArrowRight
                className="ml-2"
                size={17}
              />

            </Link>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            {awesomeProjects.map(
              (project, index) => (
                <motion.article
                  key={
                    project.title
                  }
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-70px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      index * 0.06,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(2,6,23,0.06)] transition duration-300 hover:border-sky-200 hover:shadow-[0_20px_45px_rgba(29,155,209,0.13)]"
                >

                  <div className="relative flex h-[190px] items-center justify-center bg-[#f3f8fc] p-8">

                    <img
                      src={
                        project.image
                      }
                      alt={
                        project.title
                      }
                      className="max-h-[110px] w-auto max-w-[170px] object-contain transition duration-500 group-hover:scale-110"
                    />

                    <div
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold"
                      style={{
                        backgroundColor:
                          `${BRAND_ACCENT}13`,
                        color:
                          BRAND_ACCENT,
                      }}
                    >

                      {
                        project.category
                      }

                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-[18px] font-extrabold text-slate-900">

                      {
                        project.title
                      }

                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-slate-600">

                      {
                        project.text
                      }

                    </p>

                    <Link
                      to="/highlights"
                      className="mt-6 inline-flex items-center text-sm font-bold"
                      style={{
                        color:
                          BRAND_ACCENT,
                      }}
                    >

                      View Details

                      <ArrowRight
                        className="ml-2"
                        size={15}
                      />

                    </Link>

                  </div>

                </motion.article>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          PRICING PLANS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 md:py-20">

        <div
          className="pointer-events-none absolute right-[-80px] top-10 h-[230px] w-[230px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${BRAND_ACCENT}14`,
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
              style={{
                backgroundColor:
                  `${BRAND_ACCENT}12`,
                color:
                  BRAND_ACCENT,
              }}
            >

              <Target
                size={14}
              />

              Our Pricing Plans

            </span>

            <h2 className="mt-4 text-[32px] font-extrabold tracking-[-0.03em] text-slate-900 md:text-[44px]">

              Choose a Plan That Fits Your Brand

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-slate-600">

              Flexible creative and marketing
              packages designed for businesses
              that want professional branding,
              content, and growth.

            </p>

          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            {pricingPlans.map(
              (plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-70px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`relative overflow-hidden rounded-[30px] border bg-white p-8 shadow-[0_14px_35px_rgba(2,6,23,0.06)] transition duration-300 ${
                    plan.featured
                      ? "border-sky-300 ring-4 ring-sky-100"
                      : "border-slate-200 hover:border-sky-200"
                  }`}
                >

                  {plan.featured && (
                    <div
                      className="absolute right-5 top-5 rounded-full px-3 py-1 text-[11px] font-black text-white"
                      style={{
                        backgroundColor:
                          BRAND_ACCENT,
                      }}
                    >

                      Popular

                    </div>
                  )}

                  <h3 className="pr-20 text-[22px] font-black text-slate-900">

                    {
                      plan.name
                    }

                  </h3>

                  <div className="mt-2 text-sm font-bold text-slate-500">

                    {
                      plan.audience
                    }

                  </div>

                  <div className="mt-6 text-[38px] font-black tracking-[-0.04em] text-slate-900">

                    {
                      plan.price
                    }

                  </div>

                  <ul className="mt-8 space-y-4">

                    {plan.features.map(
                      (feature) => (
                        <li
                          key={
                            feature.label
                          }
                          className={`flex items-center gap-3 text-[14px] ${
                            feature.included
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >

                          {feature.included ? (
                            <CheckCircle2
                              size={16}
                              className="shrink-0"
                              style={{
                                color:
                                  BRAND_ACCENT,
                              }}
                            />
                          ) : (
                            <XCircle
                              size={16}
                              className="shrink-0 text-rose-400"
                            />
                          )}

                          {
                            feature.label
                          }

                        </li>
                      )
                    )}

                  </ul>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex w-full items-center justify-between rounded-full border border-slate-200 px-5 py-3.5 text-xs font-black uppercase transition"
                    style={{
                      backgroundColor:
                        plan.featured
                          ? BRAND_ACCENT
                          : "white",

                      color:
                        plan.featured
                          ? "white"
                          : "#0f172a",
                    }}
                  >

                    Get Started

                    <ArrowRight
                      size={15}
                    />

                  </Link>

                </motion.div>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          CLIENT TESTIMONIALS

          ONLINE AI SOMALI PROFILE PHOTOS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-14 md:py-20">

        <div
          className="pointer-events-none absolute left-[-90px] top-10 h-[220px] w-[220px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${BRAND_ACCENT}14`,
          }}
        />

        <div
          className="pointer-events-none absolute bottom-10 right-[-70px] h-[220px] w-[220px] rounded-full blur-3xl"
          style={{
            backgroundColor:
              `${BRAND_DARK}0D`,
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm"
            >

              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor:
                    BRAND_ACCENT,
                }}
              />

              Clients Feedback

            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.05,
                duration: 0.5,
              }}
              className="mt-4 text-[30px] font-extrabold tracking-[-0.02em] text-slate-900 md:text-[42px]"
            >

              Client’s{" "}

              <span
                style={{
                  color:
                    BRAND_ACCENT,
                }}
              >

                Testimonials

              </span>

            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-slate-600"
            >

              Real feedback from clients who trusted
              Tusmo with branding, content, websites,
              and digital marketing.

            </motion.p>

          </div>

          {/* =================================================
              6 CLIENTS

              DESKTOP:
              3 TOP
              3 BOTTOM
          ================================================= */}

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map(
              (item, index) => (
                <TestimonialCard
                  key={item.name}
                  item={item}
                  index={index}
                />
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          CUSTOMERS
      ====================================================== */}

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-12 md:py-16">

        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-[30px] font-extrabold tracking-[-0.02em] text-slate-900 md:text-[40px]">

            Some of Our

            <br />

            <span
              style={{
                color:
                  BRAND_ACCENT,
              }}
            >

              Valued Customers

            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-slate-600">

            A selection of organizations we’ve
            supported with brand, marketing,
            and digital solutions.

          </p>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

            {customers.map(
              (logo, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index * 0.04,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="flex h-[120px] items-center justify-center rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_25px_rgba(2,6,23,0.04)] transition duration-300 hover:border-sky-200 hover:shadow-[0_18px_38px_rgba(29,155,209,0.1)]"
                >

                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-[72px] w-auto max-w-[150px] object-contain"
                  />

                </motion.div>
              )
            )}

          </div>

        </div>

      </section>

    </div>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  item,
  index,
}) {
  const [
    imageError,
    setImageError,
  ] = useState(false);

  const initials =
    item.name
      .split(" ")
      .slice(0, 2)
      .map(
        (word) =>
          word[0]
      )
      .join("");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.45,
        delay:
          index * 0.05,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_14px_38px_rgba(2,6,23,0.06)] transition duration-300 hover:border-sky-200 hover:shadow-[0_22px_48px_rgba(29,155,209,0.13)]"
    >

      {/* TOP BLUE LINE */}

      <div
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"
        style={{
          backgroundColor:
            BRAND_ACCENT,
        }}
      />

      {/* PROFILE HEADER */}

      <div className="flex items-center justify-between gap-5">

        <div className="flex min-w-0 items-center gap-4">

          {/* PROFILE PHOTO */}

          <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#1D9BD1,#55c4ff)] shadow-[0_8px_20px_rgba(29,155,209,0.18)] ring-4 ring-sky-50">

            {!imageError ? (
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() =>
                  setImageError(true)
                }
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <span className="text-lg font-black text-white">
                {initials}
              </span>
            )}

          </div>

          {/* CLIENT INFO */}

          <div className="min-w-0">

            <div className="text-[17px] font-extrabold text-slate-900">

              {item.name}

            </div>

            <div
              className="mt-1 inline-flex rounded-full px-3 py-1 text-[11px] font-bold"
              style={{
                backgroundColor:
                  `${BRAND_ACCENT}10`,

                color:
                  BRAND_ACCENT,
              }}
            >

              {item.role}

            </div>

          </div>

        </div>

        {/* QUOTE */}

        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
          style={{
            backgroundColor:
              `${BRAND_ACCENT}10`,

            color:
              BRAND_ACCENT,
          }}
        >

          <Quote
            size={21}
          />

        </div>

      </div>

      {/* MESSAGE */}

      <p className="mt-7 min-h-[120px] text-[14px] leading-7 text-slate-600">

        “{item.text}”

      </p>

      {/* RATING */}

      <div className="mt-7 flex items-center gap-1 border-t border-slate-100 pt-5">

        {[1, 2, 3, 4, 5].map(
          (star) => (
            <span
              key={star}
              className="text-[15px] leading-none"
              style={{
                color:
                  BRAND_ACCENT,
              }}
            >

              ★

            </span>
          )
        )}

        <span className="ml-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">

          Client Feedback

        </span>

      </div>

      {/* HOVER BACKGROUND */}

      <div
        className="pointer-events-none absolute -bottom-16 right-[-20px] h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
        style={{
          backgroundColor:
            `${BRAND_ACCENT}18`,
        }}
      />

    </motion.article>
  );
}

/* =========================================================
   COUNT CARD
========================================================= */

function CountCard({
  icon,
  end,
  label,
  bordered = false,
}) {
  const value =
    useCounter(
      end,
      1200
    );

  return (
    <div
      className={`relative flex items-center justify-center gap-4 px-6 py-7 text-white md:px-8 md:py-8 ${
        bordered
          ? "border-t border-white/10 md:border-l md:border-t-0"
          : ""
      }`}
    >

      <div className="rounded-2xl bg-white/10 p-3 text-white">

        {icon}

      </div>

      <div className="text-left">

        <div className="text-[34px] font-black leading-none tracking-[-0.03em] md:text-[40px]">

          {value}+

        </div>

        <div className="mt-2 text-sm font-medium text-white/75">

          {label}

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   COUNTER
========================================================= */

function useCounter(
  target,
  duration = 1200
) {
  const [
    count,
    setCount,
  ] = useState(0);

  useEffect(() => {
    let animationFrameId;

    let startTime = null;

    const animateCounter = (
      currentTime
    ) => {
      if (
        startTime === null
      ) {
        startTime =
          currentTime;
      }

      const elapsedTime =
        currentTime -
        startTime;

      const progress =
        Math.min(
          elapsedTime /
            duration,
          1
        );

      const currentCount =
        Math.floor(
          progress *
            target
        );

      setCount(
        currentCount
      );

      if (
        progress < 1
      ) {
        animationFrameId =
          requestAnimationFrame(
            animateCounter
          );
      } else {
        setCount(
          target
        );
      }
    };

    animationFrameId =
      requestAnimationFrame(
        animateCounter
      );

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, [
    target,
    duration,
  ]);

  return count;
}