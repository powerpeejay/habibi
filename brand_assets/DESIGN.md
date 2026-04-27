---
name: Modern Persian Heritage
colors:
  surface: '#faf9f8'
  surface-dim: '#dadad9'
  surface-bright: '#faf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f2'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e1'
  on-surface: '#1a1c1c'
  on-surface-variant: '#594138'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f0f0'
  outline: '#8d7166'
  outline-variant: '#e1bfb3'
  surface-tint: '#a63c00'
  primary: '#a23a00'
  on-primary: '#ffffff'
  primary-container: '#ca4b00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb598'
  secondary: '#006972'
  on-secondary: '#ffffff'
  secondary-container: '#9ff0fb'
  on-secondary-container: '#066f79'
  tertiary: '#755717'
  on-tertiary: '#ffffff'
  tertiary-container: '#90702e'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb598'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7e2c00'
  secondary-fixed: '#9ff0fb'
  secondary-fixed-dim: '#82d3de'
  on-secondary-fixed: '#001f23'
  on-secondary-fixed-variant: '#004f56'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#faf9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e1'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

This design system is built upon the concept of "The Modern Oasis." It bridges the gap between the sleek, functional aesthetics of Hamburg and the warm, storied hospitality of Persian culture. The brand personality is professional yet deeply personal, ensuring that every client feels like a guest rather than just a customer.

The visual style follows a **Minimalist** foundation enriched with **Tactile** details. It uses generous whitespace and a clean layout to convey professionalism, while the color palette and subtle textures introduce warmth. The aesthetic is sophisticated but avoids being "exclusive" or "cold," maintaining a neighborhood-friendly atmosphere that invites conversation and comfort.

## Colors

The color palette is led by a vibrant, energetic orange that signals vitality and the "New Look" promise. To ground this energy, the design system utilizes a deep Persian Teal and a muted Gold, referencing traditional craftsmanship and rich cultural roots. 

The background is never a pure, sterile white; instead, it uses a warm "Linen" neutral to maintain a cozy, welcoming feel. Dark Charcoal is used for typography and high-contrast elements to ensure accessibility and a modern, high-end finish. Gold is reserved for "hero" moments, such as highlighting premium services or special call-to-actions.

## Typography

This design system employs a sophisticated typographic pairing to balance tradition and modernity. **Noto Serif** is used for all headlines to provide an editorial, premium feel that evokes the precision of a master barber. 

**Be Vietnam Pro** serves as the primary sans-serif for body and UI elements. Its contemporary, open letterforms ensure high readability and a friendly, approachable tone for service descriptions and booking flows. Titles should use "sentence case" to remain conversational, while labels and buttons may use "all caps" with slight letter spacing to create a distinct professional hierarchy.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for desktop environments, centering content within a 1200px container to create a focused, boutique experience. For mobile devices, the system transitions to a fluid 4-column grid.

The spacing rhythm is based on an 8px scale. Large vertical gaps are encouraged between sections to create a sense of calm and "breathing room," mimicking the relaxed pace of a high-end salon visit. Internal component padding should be generous to ensure all touch targets are approachable and the UI never feels cramped.

## Elevation & Depth

To maintain the warm, tactile feel of this design system, depth is conveyed through **Ambient Shadows** and **Tonal Layers**. Instead of harsh, black shadows, use soft, diffused shadows with a slight tint of the primary orange or teal to create a more organic look.

Surface-container tiers are used to organize content: 
- **Level 0 (Background):** Warm Linen neutral.
- **Level 1 (Cards/Sections):** Pure white or a very light cream with a soft shadow.
- **Level 2 (Interactive/Floating):** Higher elevation with more pronounced shadows for elements like appointment modals or floating "Book Now" buttons.

Subtle 1px gold borders are used sparingly to elevate specific "Featured" cards or premium service highlights without adding unnecessary visual weight.

## Shapes

The shape language is defined by **Rounded** corners, striking a balance between the precision of a barber's tools and the softness of the brand's hospitality. 

All primary containers, cards, and input fields use a 0.5rem (8px) radius. Larger elements like hero images or service banners should utilize the `rounded-xl` (1.5rem/24px) setting to feel more organic and welcoming. Buttons should be consistently rounded but not fully pill-shaped, maintaining a professional "button" look that provides a clear hit-area.

## Components

### Buttons
Primary buttons use the vibrant orange background with white text for maximum visibility. Secondary buttons use a teal outline or a soft gold fill for less urgent actions. All buttons include a subtle hover transition that deepens the color and slightly increases the shadow depth.

### Cards
Service cards should feature a large image with Noto Serif headers. Use the Level 1 elevation style with a soft shadow. Information like price and duration should be clearly labeled using the `label-md` typographic style.

### Inputs & Booking
Input fields are styled with a warm neutral background and a subtle charcoal border that shifts to orange on focus. The booking calendar component should be clean and spacious, using teal to indicate selected dates and orange for "Today."

### Specialized Components
- **Service Menu:** A clean list component with dashed leaders (connecting service name to price), nodding to classic salon menus but with modern typography.
- **Barber Profiles:** Circular or highly rounded image containers paired with a short bio and "Specialty" badges in teal.
- **Testimonial Slider:** Minimalist cards using Noto Serif for the quote text to emphasize the "authentic voice" of the neighborhood.