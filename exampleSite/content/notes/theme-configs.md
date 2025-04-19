---
title: "Grdn Configuration"
date: 2025-03-08
category: "Documentation"
growth: "evergreen"
aliases: 
  - "Configuration"
  - "Theme Configs"
  
---

Grdn offers various configuration options to customize your digital garden's appearance and functionality. These parameters to your site's `config.toml` file, are are set to a default value. Change them based on your preferences.

# Configuration Reference
# Markdown Configuration Reference

| Configuration | Description |
|---------------|-------------|
| `notesPath` | Base path for all notes |
| `enableSearch` | Enables title-based search functionality |
| `enableCategory` | Activates category-based filtering of notes |
| `enableGrowth` | Enables filtering by growth/maturity stage |
| `showCategoryCount` | Shows note count in category filter |
| `showGrowthCount` | Shows note count in growth stage filter |
| `defaultDark` | Start site in dark mode when enabled |
| `persistChoice` | Remembers user's theme choice |
| `brokenLinkTooltip` | Shows custom tooltip message for non-existent linked pages |
| `matchFilename` | When enabled, wikilinks (`[[link]]`) match by filename instead of title |
| `enableAliases` | Allows matching content through aliases defined in front matter |
| `footer.enabled` | Enables or disables the footer |
| `footer.text` | Custom text to display in the footer |
| `unsafe` | Allows raw HTML in markdown files |
| Flat URLs | All notes use `/note/:filename/` permalink structure |