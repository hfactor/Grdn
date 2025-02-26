---
title: "Markdown Guide"
date: 2024-03-21
category: "Documentation"
growth: "Evergreen"
---

# Markdown Guide

This is a comprehensive guide to Markdown formatting. Text can be **bold**, *italic*, or ***both***. You can also use ~~strikethrough~~.

## Links and References

You can create [inline links](https://example.com) or use [reference links][ref-link].

[ref-link]: https://example.com "Optional Title"

## Code Blocks

Inline code: `const greeting = "Hello World";`

```javascript
// Fenced code block with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}

const result = greet('World');
console.log(result);
```

## Lists

### Unordered Lists
- First item
- Second item
  - Nested item
  - Another nested item
    - Deep nested item
- Third item

### Ordered Lists
1. First step
2. Second step
   1. Sub-step one
   2. Sub-step two
3. Third step

## Blockquotes

> This is a blockquote
> 
> It can span multiple lines
> 
> > And can be nested

## Tables

| Feature | Support | Notes |
|---------|---------|-------|
| Tables | ✅ | With alignment |
| Lists | ✅ | Nested supported |
| Code | ✅ | With highlighting |

## Task Lists

- [x] Write markdown guide
- [ ] Add more examples
- [ ] Review formatting

## Images

![Example Image](https://hiran.in/assets/img/hiran-2020-asif.png "Optional title")

## Definition Lists

Term 1
: Definition 1
: Another definition

Term 2
: Definition 2

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

## Mathematical Expressions

Inline math: $E = mc^2$

Block math:

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

## Horizontal Rule

---

## Custom Containers

:::note
This is a note container
:::

:::warning
This is a warning container
:::
