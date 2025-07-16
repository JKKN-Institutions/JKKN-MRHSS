// Typography scale for consistent font sizes across the application
export const typography = {
  // Headings
  h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
  h2: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold',
  h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold',
  h4: 'text-base sm:text-lg md:text-xl font-bold',
  h5: 'text-sm sm:text-base md:text-lg font-bold',
  h6: 'text-xs sm:text-sm md:text-base font-bold',
  
  // Subtitles
  subtitle1: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold',
  subtitle2: 'text-base sm:text-lg md:text-xl lg:text-2xl font-semibold',
  subtitle3: 'text-sm sm:text-base md:text-lg lg:text-xl font-semibold',
  
  // Body text
  body1: 'text-xs sm:text-sm md:text-base leading-relaxed',
  body2: 'text-xs sm:text-sm md:text-base leading-relaxed',
  body3: 'text-2xs sm:text-xs md:text-sm leading-relaxed',
  
  // Caption and small text
  caption: 'text-2xs sm:text-xs font-medium',
  small: 'text-2xs font-medium',
  
  // Button text
  button: 'text-xs sm:text-sm md:text-base font-semibold',
  buttonSmall: 'text-2xs sm:text-xs font-semibold',
  
  // Card titles
  cardTitle: 'text-base sm:text-lg md:text-xl font-bold',
  cardSubtitle: 'text-xs sm:text-sm md:text-base font-medium',
  cardBody: 'text-xs sm:text-sm leading-relaxed',
  
  // Stats and numbers
  statNumber: 'text-base md:text-xl xl:text-2xl font-bold',
  statLabel: 'text-2xs md:text-xs font-medium',
  
  // Navigation
  navLink: 'text-xs sm:text-sm md:text-base font-medium',
  navTitle: 'text-base md:text-lg font-bold',
  
  // Form elements
  label: 'text-xs font-medium',
  input: 'text-xs sm:text-sm md:text-base',
  placeholder: 'text-xs sm:text-sm md:text-base text-gray-500',
  
  // Badges and tags
  badge: 'text-2xs font-semibold',
  tag: 'text-2xs sm:text-xs font-medium',
  
  // Display text (for hero sections)
  display1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
  display2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
  display3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold',
} as const;

// Spacing utilities for consistent margins and padding
export const spacing = {
  // Sections
  sectionPadding: 'py-16 md:py-20 lg:py-24',
  sectionMargin: 'mb-16 md:mb-20 lg:mb-24',
  
  // Containers
  containerPadding: 'px-4 sm:px-6 lg:px-8',
  containerMaxWidth: 'max-w-7xl mx-auto',
  
  // Cards
  cardPadding: 'p-4 md:p-6 lg:p-8',
  cardGap: 'gap-4 md:gap-6 lg:gap-8',
  
  // Elements
  elementGap: 'gap-2 md:gap-3 lg:gap-4',
  elementMargin: 'mb-4 md:mb-6 lg:mb-8',
  
  // Buttons
  buttonPadding: 'px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4',
  buttonGap: 'gap-2 md:gap-3 lg:gap-4',
} as const;

// Grid system
export const grid = {
  // Common grid patterns
  cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  cardsLarge: 'grid grid-cols-1 md:grid-cols-2',
  subjects: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  stats: 'grid grid-cols-2 md:grid-cols-4',
  features: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  
  // Responsive gaps
  gapSmall: 'gap-4 md:gap-6',
  gapMedium: 'gap-6 md:gap-8',
  gapLarge: 'gap-8 md:gap-10 lg:gap-12',
} as const;

export type TypographyKey = keyof typeof typography;
export type SpacingKey = keyof typeof spacing;
export type GridKey = keyof typeof grid; 