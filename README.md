![hugo-grdn-screenshot](https://github.com/user-attachments/assets/3848fa9b-0846-4dab-8fd5-ddf000b465b3)

# Grdn - A Hugo Theme for Digital Gardens

Grdn is a clean, minimal Hugo theme specifically designed for publishing your [Obsidian](https://obsidian.md/) notes as a beautiful digital garden. It maintains the integrity of your note connections while presenting them in a web-friendly format.

## ✨ Features

- **Obsidian Compatibility**
  - Full support for `[[wikilinks]]` syntax
  - Hover previews for internal links
  - Backlinks section showing connections between notes
  - Graceful handling of broken links

- **Modern Navigation**
  - Dynamic filter bar with real-time updates
  - Full-text title search
  - Category filtering with count indicators
  - Growth stage filtering for digital garden workflows
  - Shareable URLs that preserve filter state

- **Clean Design**
  - Light/Dark mode with system preference detection
  - Responsive design for all devices
  - Minimal JavaScript for fast loading
  - Focused reading experience

- **Content Organization**
  - Flat URL structure regardless of folder hierarchy
  - All notes accessible under configurable base path
  - Support for frontmatter metadata (title, category, growth stage)
  - Easy navigation between connected notes

## 🚀 Getting Started

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (version 0.112.0 or later)
- An [Obsidian](https://obsidian.md/) vault (optional, but recommended)

### Quick Start

1. **Create a new Hugo site** (skip if you already have one)
   ```bash
   hugo new site my-digital-garden
   cd my-digital-garden
   ```

2. **Add the Grdn theme**
   ```bash
   git init
   git submodule add https://github.com/hfactor/Grdn.git themes/Grdn
   ```

3. **Configure your site**
   
   Create or update your `config.toml` file with:
   ```toml
   baseURL = "https://example.com/"
   languageCode = "en-us"
   title = "My Digital Garden"
   theme = "Grdn"
   
   [params]
     # Enable/disable features
     enableSearch = true
     enableCategoryFilter = true
     enableGrowthFilter = true
     
     # Base path for notes
     notesPath = "/notes/"
   ```

4. **Add your notes**
   
   Place your markdown files in the `content/notes/` directory. If you're using Obsidian, you can set this folder as your vault.

5. **Start the Hugo server**
   ```bash
   hugo server -D
   ```

6. **Visit** `http://localhost:1313` to see your digital garden!

## 📝 Note Structure

Grdn works best when your notes include frontmatter with metadata:

```markdown
---
title: "My Note Title"
date: 2023-06-15
category: "Programming"
growth: "seedling"
---

Note content with [[wikilinks]] to other notes.
```

### Growth Stages

The theme supports digital garden growth stages to indicate the maturity of your notes:

- `seedling`: Initial thoughts or early drafts
- `budding`: Developing ideas with some structure
- `evergreen`: Well-developed, mature content
The growth stages are coustomisable. You can change the growth stages by adding it in the frontmatter of your notes. Consider this as a seperate category.

## ⚙️ Configuration Options

Create a `config.toml` file in your site's root directory. Here are the available options:

```toml
[params]
  # Core Features
  enableSearch = true           # Enable/disable search functionality
  enableCategoryFilter = true   # Enable/disable category filter
  enableGrowthFilter = true     # Enable/disable growth stage filter
  
  # Path Configuration
  notesPath = "/notes/"         # Base path for all notes
  
  # UI Configuration
  defaultTheme = "system"       # "light", "dark", or "system"
  
  # Site Information
  description = "My digital garden of interconnected notes"
  author = "Your Name"
```

## 🌐 Deployment

### GitHub Pages

1. Create a `.github/workflows/hugo.yml` file with GitHub Actions configuration
2. Push to GitHub
3. Enable GitHub Pages in your repository settings

### Netlify

1. Connect your GitHub repository to Netlify
2. Set the build command to `hugo --minify`
3. Set the publish directory to `public`

## 🤝 Contributing

Contributions are welcome! This theme was built with a focus on simplicity and usability, but there's always room for improvement.

If you find bugs or have feature requests, please open an issue or submit a pull request.

## 📄 License

This theme is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Obsidian](https://obsidian.md/) for the amazing note-taking experience
- [Hugo](https://gohugo.io/) for the powerful static site generation
- [Fuse.js](https://fusejs.io/) for client-side search capability

---

Built with ❤️ by [@hfactor](https://github.com/hfactor). Feel free to reach out on [Twitter](https://twitter.com/hfactor).
