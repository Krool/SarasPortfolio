export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  role: string;
  responsibilities: string[];
  team: string[];
  categories?: string[];
  challenge: string;
  solution: string;
  impact: string;
  thumbnail: string;
  heroTitle?: string;
  heroImage?: string;
  images: string[];
  contentSections?: ContentSection[];
}

export interface ContentSection {
  heading?: string;
  text?: string;
  columns?: number; // 1, 2, 3, or 4 — how many images per row
  images: string[];
  videoPlaceholder?: string; // description of video to be added later
}

export const projects: Project[] = [
  {
    slug: "colorsolve-launch",
    title: "ColorSolve Launch",
    heroTitle: "ColorSolve Product Launch",
    subtitle: "Madison Reed",
    role: "Art Director",
    responsibilities: [
      "Video Art Direction and Post Production",
      "Product Launch Creative Strategy",
      "Campaign and Design Direction",
      "Photo Art Direction",
    ],
    team: ["Sr Designer", "Creative Director"],
    challenge:
      "Madison Reed entered a competitive haircare market dominated by legacy brands. The objective was to communicate a unique value proposition: customizable care designed specifically for color-treated hair across ecommerce, social, and retail channels.",
    solution:
      'Campaign centered on personalization with the core concept: "haircare should adapt to you — not the other way around." Featured bold product visuals and pigment-rich imagery showcasing customization options across omnichannel platforms.',
    impact:
      "86% more units sold than forecasted in the first month. Expanded Madison Reed's presence in broader haircare category. Reinforced brand reputation for innovation beyond hair color.",
    thumbnail: "/images/colorsolve/cs_mixedcollectionofshampoos_tiledbathset.jpg",
    heroImage: "/images/colorsolve/cs_dailymoistureshampooandconditioner_purpletile.jpg",
    images: [
      "/images/colorsolve/cs_dailymoistureshampooandconditioner_tiledbathnook.jpg",
      "/images/colorsolve/cs_mixedcollectionofshampoosconditionersandcolorshots_styled_hero_1120.jpg",
      "/images/colorsolve/bond-building---benefits---icons.jpg",
      "/images/colorsolve/daily-moisture---benefits---icons.jpg",
      "/images/colorsolve/total-volume---benefits---icons.jpg",
      "/images/colorsolve/frizz-away---benefits---icons.jpg",
      "/images/colorsolve/bond-building---benefits---infographic.jpg",
      "/images/colorsolve/daily-moisture---benefits---infographic.jpg",
      "/images/colorsolve/total-volume---benefits---infographic.jpg",
      "/images/colorsolve/frizz-away---benefits---infographic-1.jpg",
      "/images/colorsolve/cs_mixedcollectionofshampoos_styled_version2_nightshade.jpg",
      "/images/colorsolve/bond-building---before-after-side-side.jpg",
      "/images/colorsolve/daily-moisture---before-after-side-side-fronr.jpg",
      "/images/colorsolve/total-volume---before-after-side-side.jpg",
      "/images/colorsolve/frizz-away---before-after-side-side.jpg",
      "/images/colorsolve/cs_mixedcollectionofshampoos_styled_version1_nightshade.jpg",
      "/images/colorsolve/cs_mixedcollectionofshampoos_tiledbathset.jpg",
      "/images/colorsolve/cs_bondbuildingshampooconditioner_v1towel.jpg",
      "/images/colorsolve/cs_mixedcollectionofcolorshots_styled_version2_white.jpg",
      "/images/colorsolve/cs_frizzaway_shampooconditionerplusbrunettecolorshot_pouring_step2.jpg",
      "/images/colorsolve/cs_ingredients_group.jpg",
      "/images/colorsolve/cs_collectionofshampoosconditionerscolorshotstyled_cs02_hero_1023.jpg",
      "/images/colorsolve/pdp.jpg",
      "/images/colorsolve/bb-hero_email1.gif",
      "/images/colorsolve/mobile-mock-ups.gif",
    ],
    contentSections: [
      {
        videoPlaceholder: "ColorSolve Launch Video",
        images: [],
      },
      {
        heading: "Website Launch Assets",
        text: "PDP Content",
        columns: 4,
        images: [
          "/images/colorsolve/bond-building---benefits---icons.jpg",
          "/images/colorsolve/daily-moisture---benefits---icons.jpg",
          "/images/colorsolve/total-volume---benefits---icons.jpg",
          "/images/colorsolve/frizz-away---benefits---icons.jpg",
          "/images/colorsolve/bond-building---benefits---infographic.jpg",
          "/images/colorsolve/daily-moisture---benefits---infographic.jpg",
          "/images/colorsolve/total-volume---benefits---infographic.jpg",
          "/images/colorsolve/frizz-away---benefits---infographic-1.jpg",
          "/images/colorsolve/bond-building---before-after-side-side.jpg",
          "/images/colorsolve/daily-moisture---before-after-side-side-fronr.jpg",
          "/images/colorsolve/total-volume---before-after-side-side.jpg",
          "/images/colorsolve/frizz-away---before-after-side-side.jpg",
          "/images/colorsolve/pdp.jpg",
        ],
      },
      {
        heading: "Launch Emails",
        columns: 2,
        images: [
          "/images/colorsolve/bb-hero_email1.gif",
          "/images/colorsolve/mobile-mock-ups.gif",
        ],
      },
      {
        heading: "On Shelf Merchandising at Ulta",
        columns: 1,
        images: [
          "/images/colorsolve/chatgpt-image-mar-9%2c-2026%2c-06_46_41-am.png",
        ],
      },
      {
        videoPlaceholder: "Before and After Videos",
        images: [],
      },
      {
        heading: "Product Photography",
        columns: 4,
        images: [
          "/images/colorsolve/cs_mixedcollectionofshampoosconditionersandcolorshots_styled_hero_1120.jpg",
          "/images/colorsolve/cs_mixedcollectionofshampoos_styled_version2_nightshade.jpg",
          "/images/colorsolve/cs_mixedcollectionofshampoos_styled_version1_nightshade.jpg",
          "/images/colorsolve/cs_mixedcollectionofcolorshots_styled_version2_white.jpg",
          "/images/colorsolve/cs_collectionofshampoosconditionerscolorshotstyled_cs02_hero_1023.jpg",
          "/images/colorsolve/cs_ingredients_group.jpg",
          "/images/colorsolve/cs_frizzaway_shampooconditionerplusbrunettecolorshot_pouring_step2.jpg",
          "/images/colorsolve/cs_bondbuildingshampooconditioner_v1towel.jpg",
          "/images/colorsolve/cs_mixedcollectionofshampoos_tiledbathset.jpg",
          "/images/colorsolve/cs_dailymoistureshampooandconditioner_tiledbathnook.jpg",
        ],
      },
    ],
  },
  {
    slug: "root-perfection-launch",
    title: "Root Perfection Launch",
    subtitle: "Madison Reed",
    role: "Art Director",
    responsibilities: [
      "Video Art Direction and Post Production",
      "Creative Strategy",
      "Campaign and Design Direction",
      "Photo Art Direction",
    ],
    team: ["Sr Designer", "Creative Director"],
    challenge:
      "Gray regrowth frustration between salon visits motivated Madison Reed's product development. Root Perfection was positioned as a first-of-its-kind, ammonia-free solution designed to deliver 100% gray coverage in just 10 minutes.",
    solution:
      "The campaign emphasized fast, effortless root coverage that extends the life of your color through benefit-driven storytelling highlighting speed, convenience, and salon-quality results across ecommerce, social, retail, and brand channels.",
    impact:
      'Root Perfection became Madison Reed\'s largest product launch of 2022. The campaign achieved 13% higher sales than forecasted in its first week.',
    thumbnail: "/images/root-perfection/mr_lpg01c_3344.jpg",
    heroImage: "/images/root-perfection/hero.jpg",
    images: [
      "/images/root-perfection/mr_lpg01b_31253-copy.jpeg",
      "/images/root-perfection/mr_pdp01b_31411-added-background.jpg",
      "/images/root-perfection/mr_pdp10c_31145.jpg",
      "/images/root-perfection/mr_pdp01b_31284.jpg",
      "/images/root-perfection/mr_shot10__rp_34163.jpg",
      "/images/root-perfection/mr_pdp01b_31336.jpg",
      "/images/root-perfection/mr_pdp10c_31110.jpg",
      "/images/root-perfection/mr_pdp11b_3153.jpg",
      "/images/root-perfection/frame-2.jpg",
      "/images/root-perfection/screen-shot-2022-06-05-at-2.08.59-pm.png",
      "/images/root-perfection/frame-3.jpg",
      "/images/root-perfection/infographic---ingredients---full-of.jpg",
      "/images/root-perfection/infographic---ingredients---free-of.jpg",
      "/images/root-perfection/infographic---full-kit-contents---mr-direct.jpg",
      "/images/root-perfection/infographic---in-action-application-shot.jpg",
      "/images/root-perfection/root-perfection-social-gif.gif",
    ],
    contentSections: [
      {
        videoPlaceholder: "Launch Video",
        images: [],
      },
      {
        heading: "Product Photography",
        columns: 2,
        images: [
          "/images/root-perfection/mr_pdp01b_31411-added-background.jpg",
          "/images/root-perfection/mr_pdp10c_31145.jpg",
          "/images/root-perfection/mr_pdp01b_31284.jpg",
          "/images/root-perfection/mr_pdp01b_31336.jpg",
          "/images/root-perfection/mr_pdp10c_31110.jpg",
          "/images/root-perfection/mr_pdp11b_3153.jpg",
          "/images/root-perfection/mr_lpg01b_31253-copy.jpeg",
          "/images/root-perfection/mr_shot10__rp_34163.jpg",
        ],
      },
      {
        heading: "Landing Page",
        columns: 1,
        images: [
          "/images/root-perfection/frame-2.jpg",
        ],
      },
      {
        heading: "PDP Tiles",
        columns: 4,
        images: [
          "/images/root-perfection/infographic---ingredients---full-of.jpg",
          "/images/root-perfection/infographic---ingredients---free-of.jpg",
          "/images/root-perfection/infographic---full-kit-contents---mr-direct.jpg",
          "/images/root-perfection/infographic---in-action-application-shot.jpg",
        ],
      },
      {
        heading: "Launch Email",
        columns: 2,
        images: [
          "/images/root-perfection/screen-shot-2022-06-05-at-2.08.59-pm.png",
          "/images/root-perfection/frame-3.jpg",
        ],
      },
      {
        heading: "In Store Activation",
        columns: 2,
        images: [
          "/images/root-perfection/screen-shot-2022-06-05-at-12.33.51-pm.jpg",
          "/images/root-perfection/screen-shot-2022-06-03-at-12.13.03-pm.jpg",
          "/images/root-perfection/screen-shot-2022-06-02-at-9.31.04-am.jpg",
        ],
      },
      {
        heading: "Digital Marketing",
        columns: 2,
        images: [
          "/images/root-perfection/root-perfection-social-gif.gif",
        ],
      },
    ],
  },
  {
    slug: "team-colorwonder",
    title: "Team ColorWonder",
    subtitle: "Madison Reed x UConn Women's Basketball",
    role: "Art Director",
    responsibilities: [
      "Video and Post Production",
      "Creative Social Strategy",
      "Campaign and Design Direction",
      "Photo Art Direction",
    ],
    team: ["Sr Designer", "Creative Director"],
    challenge:
      "Madison Reed partnered with UConn Women's Basketball to launch an NIL collaboration introducing demi-permanent hair color while championing female athletes. The goal was connecting beauty and sport authentically for younger audiences.",
    solution:
      'Campaign centered on "confidence shows up both on and off the court." Featured athletes Paige Bueckers, Azzi Fudd, Morgan Cheli, KK Arnold, and Ice Brady. Introduced "UConnic Blonde" signature shade. Creative spanned photography, video, social content, and brand activations.',
    impact:
      "Positioned brand at intersection of beauty, sport, and women's athletics. Generated highest-performing social engagement of the year. Expanded brand awareness with younger demographics.",
    thumbnail: "/images/team-colorwonder/thumb-image3.png",
    heroImage: "/images/team-colorwonder/hero.jpg",
    images: [
      "/images/team-colorwonder/mr_uconn_shot_02_0954.jpg",
      "/images/team-colorwonder/mr_uconn_shot_03_1332.jpg",
      "/images/team-colorwonder/mr_uconn_shot_05_1653.jpg",
      "/images/team-colorwonder/image2.jpg",
      "/images/team-colorwonder/mr_uconn_shot_06_2238.jpg",
      "/images/team-colorwonder/mr_uconn_shot_08_2818.jpg",
      "/images/team-colorwonder/mr_uconn_shot_07_2544.jpg",
      "/images/team-colorwonder/mr_uconn_shot_01_0339_2.jpg",
      "/images/team-colorwonder/mr_uconn_shot_05_1518.jpg",
      "/images/team-colorwonder/mr_uconn_shot_01_0521.jpg",
      "/images/team-colorwonder/image3.png",
      "/images/team-colorwonder/mr_uconn_shot_08_2892.jpg",
      "/images/team-colorwonder/mr_uconn_shot_02_0855.jpg",
      "/images/team-colorwonder/mr_uconn_shot_07_2364.jpg",
      "/images/team-colorwonder/mr_uconn_shot_03_1304.jpg",
    ],
    contentSections: [
      {
        videoPlaceholder: "Team ColorWonder Launch Video 2025",
        images: [],
      },
      {
        heading: "Photography",
        columns: 3,
        images: [
          "/images/team-colorwonder/mr_uconn_shot_02_0954.jpg",
          "/images/team-colorwonder/mr_uconn_shot_03_1332.jpg",
          "/images/team-colorwonder/mr_uconn_shot_05_1653.jpg",
          "/images/team-colorwonder/mr_uconn_shot_06_2238.jpg",
          "/images/team-colorwonder/mr_uconn_shot_08_2818.jpg",
          "/images/team-colorwonder/mr_uconn_shot_07_2544.jpg",
          "/images/team-colorwonder/mr_uconn_shot_01_0339_2.jpg",
          "/images/team-colorwonder/mr_uconn_shot_05_1518.jpg",
          "/images/team-colorwonder/mr_uconn_shot_01_0521.jpg",
          "/images/team-colorwonder/mr_uconn_shot_08_2892.jpg",
          "/images/team-colorwonder/mr_uconn_shot_02_0855.jpg",
          "/images/team-colorwonder/mr_uconn_shot_07_2364.jpg",
          "/images/team-colorwonder/mr_uconn_shot_03_1304.jpg",
        ],
      },
      {
        videoPlaceholder: "UConnic Blonde Launch Video",
        images: [],
      },
    ],
  },
  {
    slug: "hair-color-bars",
    title: "Hair Color Bars",
    subtitle: "Madison Reed",
    role: "Lead Designer + Art Director",
    responsibilities: [
      "Visual Merchandising",
      "Experience Design",
      "Out of Home Advertising",
      "Print Design",
      "Interaction Design",
      "Project Management",
    ],
    team: [],
    categories: [
      "Visual Merchandising",
      "Experience Design",
      "Out of Home Advertising",
      "Print Design",
      "Interaction Design",
      "Project Management",
    ],
    challenge:
      "Madison Reed launched its first pop-up location in New York in 2017. After a successful launch, the challenge was to scale the design system across dozens of new locations nationwide.",
    solution:
      "Led design for all new Hair Color Bars, developing streamlined processes for on-time delivery of assets across multiple locations. Executed visual redesigns based on client research across 60+ locations.",
    impact:
      "25% increase in bookings in New York locations from Out of Home advertising. 60+ locations designed and launched. 7 price markets managed across 4 execution cycles.",
    thumbnail: "/images/hair-color-bars/df7a0116.jpg",
    heroImage: "/images/hair-color-bars/hero.jpg",
    images: [
      "/images/hair-color-bars/madison-reed-bklyn-5.jpg",
      "/images/hair-color-bars/madison-reed-bklyn-4.jpg",
      "/images/hair-color-bars/screen-shot-2022-06-03-at-9.50.54-pm.jpg",
      "/images/hair-color-bars/mock-up.jpg",
      "/images/hair-color-bars/df7a0212-1.jpg",
      "/images/hair-color-bars/df7a0172.jpg",
      "/images/hair-color-bars/madison-reed-brea11.jpg",
      "/images/hair-color-bars/_dsc0611_c.jpg",
      "/images/hair-color-bars/hair-color-bar.jpg",
      "/images/hair-color-bars/hcb21.014-light-works-service-card_25-off-04.jpg",
      "/images/hair-color-bars/hcb21.014-light-works-service-card_25-off-03.jpg",
      "/images/hair-color-bars/coming-soon.jpg",
    ],
    contentSections: [
      {
        heading: "Hair Color Bar Overview",
        columns: 1,
        images: [
          "/images/hair-color-bars/madison-reed-bklyn-5.jpg",
          "/images/hair-color-bars/madison-reed-bklyn-4.jpg",
          "/images/hair-color-bars/screen-shot-2022-06-03-at-9.50.54-pm.jpg",
          "/images/hair-color-bars/mock-up.jpg",
        ],
      },
      {
        heading: "Visual Merchandising",
        columns: 2,
        images: [
          "/images/hair-color-bars/df7a0212-1.jpg",
          "/images/hair-color-bars/df7a0172.jpg",
        ],
      },
      {
        heading: "Hair Color Bar Marketing",
        columns: 1,
        images: [
          "/images/hair-color-bars/madison-reed-brea11.jpg",
          "/images/hair-color-bars/_dsc0611_c.jpg",
          "/images/hair-color-bars/hair-color-bar.jpg",
        ],
      },
      {
        columns: 2,
        images: [
          "/images/hair-color-bars/hcb21.014-light-works-service-card_25-off-04.jpg",
          "/images/hair-color-bars/hcb21.014-light-works-service-card_25-off-03.jpg",
          "/images/hair-color-bars/coming-soon.jpg",
        ],
      },
    ],
  },
  {
    slug: "wholesale",
    title: "Wholesale Planograms",
    subtitle: "Madison Reed",
    role: "Lead Designer + Art Director",
    responsibilities: [
      "Visual Merchandising",
      "Experience Design",
      "Print Design",
      "Project Management",
    ],
    team: [],
    categories: [
      "Visual Merchandising",
      "Experience Design",
      "Print Design",
      "Project Management",
    ],
    challenge:
      "Madison Reed dramatically expanded its wholesale footprint. What started as a small business with Ulta grew into partnerships spanning Ulta Beauty at Target and Bed Bath and Beyond.",
    solution:
      "Led in-store planogram signage, price strips, promotional end cap signage, etagere wraps, magazine spreads, and digital banners for multiple wholesale partners with varying design criteria.",
    impact:
      "Successfully scaled retail presence across multiple major retail partners with cohesive brand presentation.",
    thumbnail: "/images/wholesale/untitled-1.jpg",
    heroImage: "/images/wholesale/hero.jpg",
    images: [
      "/images/wholesale/ulta-planogram-4ft-01.jpg",
      "/images/wholesale/target_beauty_header_abv.jpeg",
      "/images/wholesale/ulta-planogram-mock-up-v2-01.jpg",
      "/images/wholesale/screen-shot-2022-06-02-at-11.44.35-am.png",
      "/images/wholesale/960x0.jpeg",
      "/images/wholesale/ulta-4x9-signs3.jpg",
      "/images/wholesale/ulta22.13-ulta-beauty-at-target-5x7-signs.jpg",
      "/images/wholesale/ulta22.13-ulta-beauty-at-target-5x7-signs2.jpg",
      "/images/wholesale/ulta-4x9-signs.jpg",
      "/images/wholesale/ulta-4x9-signs4.jpg",
      "/images/wholesale/ulta-4x9-signs2.jpg",
      "/images/wholesale/ulta-4x9-signs5.jpg",
    ],
    contentSections: [
      {
        columns: 1,
        images: [
          "/images/wholesale/mr_shot30_keilani-jenny-jo_37806-2.jpg",
        ],
      },
      {
        heading: "Ulta Beauty Store Display",
        columns: 2,
        images: [
          "/images/wholesale/ulta-planogram-4ft-01.jpg",
          "/images/wholesale/ulta-planogram-mock-up-v2-01.jpg",
        ],
      },
      {
        heading: "Ulta Beauty At Target Store Display",
        columns: 2,
        images: [
          "/images/wholesale/target_beauty_header_abv.jpeg",
          "/images/wholesale/960x0.jpeg",
        ],
      },
      {
        heading: "Bed Bath and Beyond Store Display",
        columns: 1,
        images: [
          "/images/wholesale/screen-shot-2022-06-02-at-11.44.35-am.png",
        ],
      },
    ],
  },
  {
    slug: "models",
    title: "Model Photography",
    subtitle: "Art Direction",
    role: "Art Director",
    responsibilities: ["Photo Art Direction", "Creative Direction"],
    team: [],
    challenge: "",
    solution: "",
    impact: "",
    thumbnail: "/images/models/screen-shot-2022-08-02-at-3.56.47-pm.png",
    heroImage: "/images/models/cs_evergreen_chantel_02_0597_hero.jpg",
    images: [
      "/images/models/cs_evergreen_chantel_02_0597_hero.jpg",
      "/images/models/cs_evergreen_nikki_05_1515_hero.jpg",
      "/images/models/cs_evergreen_nadeesha_02_0114_hero.jpg",
      "/images/models/cs_evergreen_liyliy_01_2143_hero.jpg",
      "/images/models/cs_evergreen_nikki_05_1544_hero.jpg",
      "/images/models/cs_evergreen_chantel_06_1351_hero.jpeg",
      "/images/models/mr_shot04_elle_32791.jpg",
      "/images/models/cs_evergreen_nadeesha_02_0197_hero.jpg",
      "/images/models/cs_evergreen_chantel_0959_hero.jpg",
      "/images/models/cs_evergreen_liyliy_03_2920_hero.jpg",
      "/images/models/cs_evergreen_nadeesha_02_0290_hero.jpg",
      "/images/models/cs_evergreen_nikki_04_1168_hero-1.jpg",
      "/images/models/cs_evergreen_chantel_02_0601_hero.jpg",
    ],
    contentSections: [
      {
        columns: 3,
        images: [
          "/images/models/cs_evergreen_chantel_02_0597_hero.jpg",
          "/images/models/cs_evergreen_nikki_05_1515_hero.jpg",
          "/images/models/cs_evergreen_nadeesha_02_0114_hero.jpg",
          "/images/models/cs_evergreen_liyliy_01_2143_hero.jpg",
          "/images/models/cs_evergreen_nikki_05_1544_hero.jpg",
          "/images/models/cs_evergreen_chantel_06_1351_hero.jpeg",
          "/images/models/mr_shot04_elle_32791.jpg",
          "/images/models/cs_evergreen_nadeesha_02_0197_hero.jpg",
          "/images/models/cs_evergreen_chantel_0959_hero.jpg",
          "/images/models/cs_evergreen_liyliy_03_2920_hero.jpg",
          "/images/models/cs_evergreen_nadeesha_02_0290_hero.jpg",
          "/images/models/cs_evergreen_nikki_04_1168_hero-1.jpg",
          "/images/models/cs_evergreen_chantel_02_0601_hero.jpg",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Madison Reed & Bag Borrow or Steal",
    role: "Designer",
    responsibilities: ["Digital Campaign Design", "Social Media Assets", "Email Marketing"],
    team: [],
    challenge: "",
    solution: "",
    impact: "",
    thumbnail: "/images/digital-marketing/thumb-96cdc114.jpg",
    heroImage: "/images/digital-marketing/hero.jpg",
    images: [
      "/images/digital-marketing/50bc61e7-d06a-44d3-9e9f-0fafa3f1751e_rw_1200.gif",
      "/images/digital-marketing/92b1ce04-e7fa-42c0-aca7-962573b228c5_rw_600.png",
      "/images/digital-marketing/5ac7c3c3-9db8-4a70-9e49-13d82eff8a49_rw_1200.gif",
      "/images/digital-marketing/cce9874c-5777-4d72-921f-8ec3c5df42c1_rw_600.png",
      "/images/digital-marketing/0d8e3398-8af9-445c-8d22-946e554115ca_rw_1200.jpeg",
      "/images/digital-marketing/4d0bd970-917b-4c13-8a86-c16ca087b8e4_rw_1920.jpeg",
      "/images/digital-marketing/b5c7f242-c835-42d3-9974-3c14f4ab3635_rw_1920.jpeg",
      "/images/digital-marketing/afc77e363a308aef51319168_rw_1920.gif",
      "/images/digital-marketing/6a59051053429aed89756f54_rw_1200.jpeg",
      "/images/digital-marketing/24126f218c9d52c68eb2d3a3_rw_1920.jpeg",
      "/images/digital-marketing/297e34e32264d5b871a8d9c8_rw_1200.jpeg",
      "/images/digital-marketing/869fb06a6af5ef991dd546bd_rw_1200.jpeg",
    ],
    contentSections: [
      {
        heading: "Madison Reed Digital Marketing",
        columns: 2,
        images: [
          "/images/digital-marketing/50bc61e7-d06a-44d3-9e9f-0fafa3f1751e_rw_1200.gif",
          "/images/digital-marketing/92b1ce04-e7fa-42c0-aca7-962573b228c5_rw_600.png",
          "/images/digital-marketing/5ac7c3c3-9db8-4a70-9e49-13d82eff8a49_rw_1200.gif",
          "/images/digital-marketing/cce9874c-5777-4d72-921f-8ec3c5df42c1_rw_600.png",
          "/images/digital-marketing/0d8e3398-8af9-445c-8d22-946e554115ca_rw_1200.jpeg",
          "/images/digital-marketing/4d0bd970-917b-4c13-8a86-c16ca087b8e4_rw_1920.jpeg",
          "/images/digital-marketing/b5c7f242-c835-42d3-9974-3c14f4ab3635_rw_1920.jpeg",
        ],
      },
      {
        heading: "Bag Borrow or Steal",
        columns: 2,
        images: [
          "/images/digital-marketing/afc77e363a308aef51319168_rw_1920.gif",
          "/images/digital-marketing/6a59051053429aed89756f54_rw_1200.jpeg",
          "/images/digital-marketing/24126f218c9d52c68eb2d3a3_rw_1920.jpeg",
          "/images/digital-marketing/297e34e32264d5b871a8d9c8_rw_1200.jpeg",
          "/images/digital-marketing/869fb06a6af5ef991dd546bd_rw_1200.jpeg",
        ],
      },
    ],
  },
  {
    slug: "education-in-sight",
    title: "Education In Sight",
    subtitle: "Nonprofit Branding",
    role: "Designer",
    responsibilities: ["Brand Identity", "Logo Design", "Print Design", "Web Graphics"],
    team: [],
    challenge:
      "Education In Sight, a nonprofit with headquarters in Beijing, China, needed a complete brand identity that communicated their mission of providing vision care to students.",
    solution:
      'Created a brand identity with a logo referencing the eye chart used for vision testing in China. Developed comprehensive branding materials including website graphics, printed advertisements, and corporate stationery. Tagline: "Every student deserves to see clearly."',
    impact:
      "Delivered a cohesive brand system that effectively communicates the organization's mission across all touchpoints.",
    thumbnail: "/images/education-in-sight/thumb-d3debfa1.jpg",
    heroImage: "/images/education-in-sight/screen-shot-2022-08-04-at-5.35.21-pm.png",
    images: [
      "/images/education-in-sight/screen-shot-2022-08-04-at-5.35.21-pm.png",
      "/images/education-in-sight/logo.jpeg",
      "/images/education-in-sight/branding.jpeg",
      "/images/education-in-sight/branding-5.jpeg",
      "/images/education-in-sight/branding-4.jpeg",
      "/images/education-in-sight/branding-2.jpeg",
      "/images/education-in-sight/branding-3.jpeg",
    ],
    contentSections: [
      {
        columns: 1,
        images: [
          "/images/education-in-sight/screen-shot-2022-08-04-at-5.35.21-pm.png",
          "/images/education-in-sight/logo.jpeg",
          "/images/education-in-sight/branding.jpeg",
          "/images/education-in-sight/branding-5.jpeg",
          "/images/education-in-sight/branding-4.jpeg",
          "/images/education-in-sight/branding-2.jpeg",
          "/images/education-in-sight/branding-3.jpeg",
        ],
      },
    ],
  },
  {
    slug: "airstream-experience",
    title: "Airstream Experience",
    subtitle: "Madison Reed ColorWonder\u2122",
    role: "Art Director",
    responsibilities: [
      "Video and Post Production",
      "Creative Strategy",
      "Campaign and Design Direction",
      "Photo Art Direction",
    ],
    team: ["Sr Designer", "Art Director", "Creative Director"],
    challenge:
      "Madison Reed needed an experiential activation to celebrate the launch of ColorWonder\u2122, bringing the product experience directly to consumers in Los Angeles.",
    solution:
      "Created the ColorWonder\u2122 Experience featuring an Airstream activation offering ColorWonder services, makeup applications, meet-and-greets with brand ambassadors, and experiential opportunities. Tagline: \"Come play with us!\"",
    impact:
      "Successfully launched an immersive brand experience that generated buzz and drove product trial in a key market.",
    thumbnail: "/images/airstream/airstream-image.jpg",
    heroImage: "/images/airstream/hero.jpg",
    images: [
      "/images/airstream/screenshot-2025-06-13-at-3.46.02%e2%80%afpm.png",
    ],
    contentSections: [
      {
        text: "COMING SOON...",
        columns: 1,
        images: [
          "/images/airstream/screenshot-2025-06-13-at-3.46.02%e2%80%afpm.png",
        ],
      },
    ],
  },
];
