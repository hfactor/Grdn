# GRDN Theme for Hugo

A minimal, modern Hugo theme optimized for digital gardens and Obsidian-compatible note management.

## Core Features

### Content Management
- [x] Flat URL structure regardless of folder hierarchy
- [x]All notes accessible under configurable base path (default: `/notes/`)
- [x] Hover previews for internal links
- [x] Backlinks section after content
- [x] Wiki-style internal linking with [[wikilinks]]
- [x] Graceful handling of broken links

### Navigation & Discovery
- Modern, minimal design
- Dynamic filter bar with:
  - [x] Full-text title search
  - [x] Category filter with count indicators
  - [x] Growth stage filter with count indicators
  - [x] Configurable visibility of each filter component
- [x] Real-time results updating
- [x] Shareable URLs with filter state

### Theme & Appearance
- [x] Light/Dark mode support
- [x] System preference detection
- [x] Persistent theme choice
- [x] Responsive design

## Technical Architecture

### URL Structure
- [x] Content in `notes/coffee/brewing.md` → accessible at `/notes/brewing`
- [x] Flat URL structure achieved through Hugo page bundles and custom taxonomy

### Filter Implementation
- [x] Client-side search
- [x] Combined (AND) filtering logic
- [x] Dynamic URL updates using History API
- [x] Count indicators, configurable. 


## Future Enhancements
1. Filename conflict resolution
2. Transclusion support
3. Extended hover preview options
4. Advanced backlink features

## Development Phases
1. Base theme setup and styling
2. Content rendering and markdown support
3. Wiki-links implementation
4. Filter-bar development
5. Theme switching
6. URL management
7. Performance optimization
8. Documentation

## Technical Dependencies
- Hugo Extended (for SCSS)
- Fuse.js (for search)
- No other external dependencies

## Notes
- All features configurable through hugo.toml
- No blog-specific features included
- Focus on performance and minimal JavaScript
- Mobile-first approach

