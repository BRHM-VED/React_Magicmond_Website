# Project Refactoring and Design Improvement Guide

This file acts as a permanent guide and context handoff for any AI assistant working on the **ReactMagicmondWebsite** project. It outlines our ongoing migration from legacy custom CSS to a modern React + Tailwind CSS + shadcn UI implementation, matching the Figma design reference exactly.

---

## 🚀 Core Technology Stack & Guidelines

1. **Framework & Layout**: React (Vite-based) with TypeScript.
2. **Styling**: Pure Tailwind CSS. Avoid adding custom CSS classes to stylesheets (e.g., `home.css`, `base.css`). Instead, write classes directly inline using Tailwind utilities.
3. **Component Libraries**: Reusable UI primitives such as shadcn UI components (if needed) and `lucide-react` for icons.
4. **Figma Reference**: Match all typography, layout, padding, colors, and assets exactly as defined in the Figma Dev Mode nodes.

---

## 📐 Button Sizing Guidelines (Strict Design Token)

Always coordinate button dimensions based on screen sizes and section types:
- **Common Large Button (`.btn` equivalent)**:
  - **Desktop**: Height: `52px` | Text Size: `16px` | font-head font-medium
  - **Mobile**: Height: `45px` | Text Size: `14px`
- **Common Small/Header Button (`.btn--sm` equivalent)**:
  - **Desktop**: Height: `46px` | Text Size: `15.9px`
  - **Mobile**: Height: `45px` | Text Size: `14px`
- Use the central `<Button>` component (`src/common/Button.tsx`) to manage these variants cleanly rather than styling them ad-hoc.

---

## 🛠️ Section-by-Section Refactoring Log & Rules

### 1. About Section (`AboutSection.tsx`)
- **Mobile Adjustments**: Reduced excess top padding (`pt-10`) to eliminate blank space above the team image.
- **CTA Row**: Configured the "Get Started Now" and "Watch video" buttons to align side-by-side in a horizontal row (`flex-row`) on mobile layouts instead of stacking vertically.
- **Typography**: Locked in the `"DM Sans"` font using the `font-body` Tailwind class explicitly for body copy/subtitles, matching the Figma design context.

### 2. Services Section (`ServicesSection.tsx` & `ServiceCard.tsx`)
- **Legacy CSS Removal**: All `.services`, `.services__*`, `.svc-card`, and `.svc-card__*` CSS declarations have been completely deleted from `home.css`.
- **Wing Graphics**:
  - The left and right purple wing shapes from Figma are now rendered using static SVG assets located in `public/assets/images/home/wing-left.svg` and `wing-right.svg`.
  - Statically flanked next to the header inside a relative wrapper. On mobile screens, they are anchored to `bottom-[-25px]` (scaling down to `w-[120px]`) to sit exactly **below the CTA button**, flanking the transition to the cards without center overlap.
- **Card Background & Bleed Fix**:
  - Because cards stack using CSS `sticky` position on scroll, a transparent background gradient causes lower cards to bleed through.
  - **Rule**: Every sticky card must have a solid opaque background color (`bg-[#0e081d]`) matching the page background underneath the gradient to mask stacked elements.
- **Scroll, Stacking & Swipe Smoothness**:
  - **Rule**: Avoid animating `translateY` transforms on sticky elements to prevent layout calculation conflicts with the browser's scroll layout engine.
  - **Rule**: Sticky cards use the native `.reveal-scale` class which animates `scale` smoothly from `scale(0.9)` to `scale(1)` (small to big) alongside `opacity` using `cubic-bezier(.21, .47, .32, .98)` transition for a high-performance stacking feel.
  - **Observer Tweaks**: Lowered IntersectionObserver `threshold` to `0.08` to ensure elements animate earlier on mobile viewports.
- **Responsive Layout & Text Wrapping**:
  - **Heading Wrapping**: Configured heading spans on mobile to use `whitespace-nowrap sm:whitespace-normal` combined with a responsive font size (`text-[22px] sm:text-[32px] md:text-[52px]`) to ensure the main title breaks into exactly **two lines** on mobile viewports.
  - **Image Rounded Corners**: On mobile devices, the card image's top rounded corners are scaled down to `rounded-t-xl` (12px) to match the narrower layout, while retaining `md:rounded-t-[39px]` on desktop.
- **Button Border Light**:
  - **Rule**: The CTA button under the header uses an explicit glowing border light shadow: `border border-white/20 shadow-[0_0_20px_rgba(105,32,131,0.5)] hover:shadow-[0_0_30px_rgba(192,85,229,0.8)]` on both mobile and desktop.
- **Reusable Card**: Extracted into a reusable `<ServiceCard>` component (`src/common/ServiceCard.tsx`) mapping all Figma text styles and badges.

### 3. About Section Heading Layout & Spacing
- **Heading Line Breaks**: Force the white header text (`We’re one of India’s top`) onto the first line on mobile by using a standard `<br />` before the colored text block.
- **Word Gluing Fix**: Always insert a space before hidden line breaks (`<br className="hidden md:inline" />`) to prevent words on either side of the tag from fusing together (e.g., "topDigital", "drivenby") when the tag is hidden on mobile screens.

### 4. USP Ticker Section (`UspTickerSection.tsx`)
- **Tailwind Conversion**: Do not keep any custom CSS styling for the USP section in `home.css`. Migrate everything cleanly to inline Tailwind classes.
- **Typography Tokens**: Always import and use the font tokens from `src/utils/constants/fonts.ts` (e.g. `FONTS.head` for Rethink Sans, `FONTS.serif` for Instrument Serif) rather than passing strings or font class names directly.
- **Figma Alignment**: Align heading size to `48px` (leading `55px`), ticker items to `50px` (leading `62.4px`), and container height to `353px` to match Figma Dev Mode design context exactly.
- **Mobile List Limits & Viewport Crop**: Dynamically check window width and limit the list items to exactly 3 items on mobile viewports (`Tailored solution`, `results that, speak.`, `conversion focused`). Set the ticker viewport height to `h-[150px]` (leading `44px`) so only exactly 3 items (one active in center, one above, one below) are visible in the viewport at a time.
- **Mobile Arrow Placement**: Position the mobile arrow on the right side (`right-[-45px] bottom-[-65px]`), scaled up to `w-[85px]`, and rotated by 110 degrees pointing down-left directly towards the active ticker items.
- **Desktop Arrow Placement**: Shift the desktop arrow position slightly upwards (`md:top-[15px]`) to align with the heading content.


---

## 📋 General Refactoring Checklist for New Sections
When migrating subsequent sections:
1. Examine Figma Dev Mode node details via the MCP server.
2. Locate the corresponding file under `src/website/components/`.
3. In-line all structural layouts, typography, and flex grids using Tailwind.
4. Safely locate and delete the matching CSS selectors in stylesheets.
5. Compile and test the build using `npm run build` to confirm zero TS or bundler errors.
