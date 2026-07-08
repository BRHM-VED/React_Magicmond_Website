import type { CaseStudy } from "./common/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "Case-study-ri",
    title: "Reidius Infra Case Study — MagicMond",
    metaDescription:
      "A remarkable transition: From offline business to online powerhouse. How Reidius Infra increased online revenue by 300% through strategic marketing and targeted messaging.",
    brand: { image: "/assets/icons/reidius-mark.svg", name: "Reidius Infra", nameClass: "font-grotesk", sub: "Architectural design-based construction company" },
    visitUrl: "https://reidiusinfra.com/",
    heading: "A remarkable transition: From offline business to online powerhouse",
    subheading: "Increased online revenue by 300% through Strategic Marketing and Targeted Messaging",
    blocks: [
      { type: "label", text: "Highlight" },
      { type: "p", text: "Reidius Infra is an architectural design based construction company in Jaipur. Their mission is to simplify home building by providing a one stop solution to home building. They partnered with us because they needed help in scaling their business online through our digital growth expertise." },
      { type: "figure", image: "/assets/images/casestudy/reidius-brand-visuals.webp", alt: "Reidius Infra brand visuals" },
      { type: "label", text: "Challenge" },
      { type: "p", text: "Their business relied heavily on word of mouth and offline marketing and their online presence wasn’t showing any significant business growth. They also wanted to effectively communicate their brand messages to their target audience." },
      { type: "label", text: "Solution" },
      { type: "h4", text: "The right message" },
      { type: "p", text: "Communicating the right messages across to the different segments of target audience was a crucial step in securing business. Our strategy emphasised Reidius Infra's identity as a one-stop construction company that provides hassle-free construction services with solid estimation and transparency." },
      { type: "pair", images: ["/assets/images/casestudy/reidius-campaign-creative-1.webp", "/assets/images/casestudy/reidius-campaign-creative-2.webp"], alt: "Reidius Infra campaign creatives" },
      { type: "h4", text: "Targeting the right segments" },
      { type: "p", text: "Utilising largest advertising channels like Google and Meta, we ran ads using vernacular creatives. Our approach involved the implementation of microtargeting techniques, enabling us to segment potential clients according to their needs." },
      { type: "pair", images: ["/assets/images/casestudy/reidius-vernacular-ad-1.webp", "/assets/images/casestudy/reidius-vernacular-ad-2.webp"], alt: "Vernacular ad creatives" },
      { type: "figure", image: "/assets/images/casestudy/reidius-project-photo.webp", alt: "Reidius Infra project" },
      { type: "label", text: "Outcome" },
      { type: "p", text: "Reidius Infra achieved an impressive revenue milestone, surpassing 20 crores in 2023, 70% of which was generated online. Through crafting a distinctive identity, utilising targeted messaging, the company seamlessly transitioned from a primarily word-of-mouth, offline-centric construction business to an online powerhouse." },
    ],
  },
];
