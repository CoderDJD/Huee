# Design Guidelines

This is a document which will guide you through custom styles, spacings and sizes and how to use fonts in the project.

# Table of contents

- [Typograhpy](#Typography)
  - [Fonts](#Fonts)
  - [Importing](#Importing)
  - [Classes]()
- [Colors]()
  - [Pallete]()
  - [Classes]()

# Typography

Contrary to many applications, we use two fonts for the entire app.
And uses two weights, regular and bold.

## Fonts

`Roboto :`

[Roboto](https://github.com/googlefonts/roboto) is a font designed by Christian Robertson.
This font was chosen for it's strict, readable, formal and at the same time evergreen typeface.
This font should be used for :

- `Headers` : `h1 - h6`
- `Buttons`
- `Toasts`

`Ubuntu :`
[Ubuntu](https://fonts.google.com/specimen/Ubuntu#standard-styles) is a font designed by [Dalton Maag](https://daltonmaag.com).
This font was chosen for it's casual, readable and good typefaces.
This font should be used for :

- `Paragraphs` : `p`
- `Body Text`
- All forms of secondary texts unless specified as `font-sans` in `classname`.

## Imports

`HTML` :

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@400;700&display=swap"
  rel="stylesheet"
/>
```
