---
title: "Markdown Guide"
date: 2025-03-02
category: "Documentation"
growth: "evergreen"
aliases:
  - "Markdown"
  - "Markdown Rendering"
externalLink: "https://github.com/"  

---


### Headings 
```
# Heading 1 
## Heading 2
### Heading 3 
#### Heading 4 
##### Heading 5
###### Heading 6
```

# Heading 1 
## Heading 2
### Heading 3 
#### Heading 4 
##### Heading 5
###### Heading 6

###  Emphasis 
```
Emphasis, aka italics, with *asterisks* or _underscores_. 

Strong emphasis, aka bold, with **asterisks** or __underscores__. 

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~ 
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

### Lists
```
1. First ordered list item 
...1. Ordered sublist 
2. Another item 
...* Unordered sublist 
3. Actual numbers don't matter, just that it's a number 
4. And another item. 

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown). 

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅ 
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅ 
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.) 

* Unordered list can use asterisks 
- Or minuses
+ Or pluses
```

1. First ordered list item 
   1. Ordered sublist 
2. Another item 
   - Unordered sublist
3. Actual numbers don't matter, just that it's a number 
4. And another item. 

    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

    To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
    Note that this line is separate, but within the same paragraph.⋅⋅
    (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks 
- Or minuses
+ Or pluses


### Links
```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

### Images
```
Here's our logo (hover to see the title text):

Inline-style: 
![alt text](/images/placeholder.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: /images/placeholder.png "Logo Title Text 2"
```

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](/images/placeholder.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: /images/placeholder.png "Logo Title Text 2"


### Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); 


```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

<pre class="regular-sans"> 
<code>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
</code>
</pre>

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

### Tables
Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.


```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

{:#blockquotes}
### Blockquotes
---


```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

### Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

### Line Breaks
---

My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:


```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.


This is intended as a quick reference and showcase. 
Copied from [Simply Jekyll](https://github.com/raghudotcc/simply-jekyll/blob/master/_posts/2020-01-01-test.md).

### Footnotes
Grdn supports footnotes with automatic back-linking[^1]. You can include multiple footnotes[^2] and they'll be automatically numbered.

[^1]: This is a footnote with a [link to Grdn](https://github.com/hfactor/grdn).
[^2]: Footnotes can contain **formatted text** and multiple paragraphs.

    Indent paragraphs to include them in the footnote.

You can also have inline footnotes^[Like this one] which are more compact.

When writing technical documentation[^tech], you might want to reference multiple sources[^sources].

[^tech]: See the [Hugo documentation](https://gohugo.io/content-management/footnotes/) for more details about footnote syntax.
[^sources]: Multiple sources can be cited:
    * Source 1: [Markdown Guide](https://www.markdownguide.org)
    * Source 2: [Obsidian Help](https://help.obsidian.md)
