---
title: My Introduction to TailwindCSS
date: "2021-07-19"
excerpt: "TailwindCSS is the most controversial but the most amazing thing CSS devs have been gifted after grid and flex ..."
tags:
  - TailwindCSS
layout: layouts/post.njk
---

_"TailwindCSS is the most controversial but the most amazing thing CSS devs have been gifted after grid and flex"_
-- **Loki the crocodile**

In this article we will learn what is TailwindCSS, the basics, how to make a simple card with it, and be cool. Let's get it.
![gif](https://media.giphy.com/media/DuDfMU7OulG8Zsdu9K/giphy.gif)

# What is TailwindCSS?

It's a utility first framework for CSS, which basically means it provides predefined classes to do everything in CSS, but it's not like bootstrap where they have thier own implementation of things like grid, buttons, accordions, etc. It provides classes on the lower level, i.e; if you want to make a grid of your own specifications, you can do so easily with tailwind classes. It is more intuitive and faster, and once you get the hang of it you will create components and layouts like a wizard.

# Installation

There are many ways to install tailwind:

- Using CDN:
  Adding a link to the CDN for tailwind will add tailwind in your project, and you can start using it right away.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Section Tailwind Demo</title>
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
</head>
```

- Using NPM:
  <code>npm install tailwindcss@latest postcss@latest autoprefixer@latest</code>.

This will get you started with using tailwind, for more information on installation, you can go [here](https://tailwindcss.com/docs/installation).

One **important** thing while using tailwind with npm is, it will add a file called tailwind.config.js, which might look like this:

```js
// Example `tailwind.config.js` file
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};
```

So you can see two sections, namely **theme** and **variants**. According to TailwindCSS documentation:

- The `theme` section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visuals.
- The `variants` section lets you control which [variants](https://tailwindcss.com/docs/hover-focus-and-other-states) are generated for each core utility plugin.

# Basics

When coming to CSS, there are some major things to focus on:

- Layout
- Positioning
- Grid and Flex
- Styling(colors, backgrounds)
- Spacing and sizing
- Typography

We have other areas as well like filters, borders, but these are the main parts. Now why i'm stating this is if you take care of these then rest will follow.

Taliwind has the concept of adding **breakpoint classes** before classes with a colon( : ) which define the breakpoints in which they will work. It has **five** breakpoints, and you can change these in the **tailwind.config.js** file.

- **sm**: screens equal 640px width or more
- **md** :screens equal 768px width or more
- **lg**: screens equal 1024px width or more
- **xl**: screens equal 1280px width or more
- **2xl** : screens equal 1536px width or more

You can apply these breakpoints to anything. Suppose you want a button to have blue color on middle sceen sizes but red on smaller screens, and it should be centered. You can do this:

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Rj456/embed/bGWRGgR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/bGWRGgR">
  Untitled</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Here are the classes I added:

- **flex**: for the flex container
- **h-full and w-full**: gives the container height and width of 100%.
- **absolute**: for <code>position:absolute;</code>
- **items-center and justify-center** for <code>align-items:center;</code> and <code>justify-items:center;</code>
- **sm:bg-red-400**: Basically this says that apply red-400 color to this button if screen width is sm(640px) or bigger.
- **md:bg-blue-400**: Apply blue background on the button for md or bigger screens.
- **bg-yellow-300**: default background color.
- **border border-black**: a black border on the button,
- **px-4 py-2**: padding of 1rem on x-axis, padding of 0.5rem on y-axis.
- **transition transform**: putting transition property on transform.
- **hover:-translate-y-1**: on hover, translating the button on negative y axis.
- **hover:scale-50**: on hover, scale the button to 0.5

Okay that was a lot of classes for a single button! But just imagine, these classes make up for each and every scenario of the button, you **can add breakpoints without media queries, add hover, active and focus states,animations, etc** with just some classes. This makes writing css very fast and really enjoyable!

# Colors

Colors in tailwind are defined on a scale of 50 to 700, 50 being the lightest shade, and 700 the darkest. They have a nice color palette of their own:

<iframe height="300" style="width: 100%;" scrolling="no" title="Tailwind Color palette" src="https://codepen.io/Rj456/embed/dyWRRJP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/dyWRRJP">
  Tailwind Color palette</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

But if you need a different color scheme, you will need to go into the **colors** section in **tailwind.config.js**. From here you can go two directions, either **curate your colors from tailwind** or **make your own color palette from scratch**.

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      // Configure your color palette here
      // you can use these in your HTML like 'bg-blue-light' or 'bg-pink' for DEFAULT
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
    },
  },
};
```

If you want to use tailwind colors and customize them you can curate your colors by importing `'tailwindcss/colors'` .

```js
// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
};
```

![gif](https://media.giphy.com/media/KEYEpIngcmXlHetDqz/giphy.gif)

# Spacing and Sizing

You must have gotten it by now, but how **margin, padding and height/width** are defined in tailwind are quite simple.

- **Padding** is **p**, and **p-1** means padding of **0.25rem**. **px** and **py** can be used to add padding on individual axes. These scales are defined by tailwind itself and go from **0 to 96, 96 being 24rem**, and you can refer to them [here](https://tailwindcss.com/docs/padding).
- **Margin** works the same.
- **Height** and **Width** can be added as **w** and **h**, so if you want height/width of an element be **1rem** each, add **w-4** and **h-4**. They can also be added as percentages, meaning w-1/2 is width:50%, h-3/4 is height:75%.

Adding **full** to any of these will amount to 100%, meaning if you add **w-full**, it means width is set to 100%.

# Grid and Flex

Although these are big topic in itself, and needs a seperate article, I will just explain enough to get you started.
Classes in tailwind are quite intuitive, say you want a flex container, with `justify-items:between;`, you can just do:

```html
<div class="flex justify-between"></div>
```

For grid, if you want a grid with two columns three rows, you can do this:

```html
<div class="grid grid-cols-2 grid-rows-3"></div>
```

`grid-cols-2` translates to `grid-template-columns: repeat(2, minmax(0,1fr));`

For gap between flex or grid items, use **gap** property with the same syntax for other spacing/sizing properties like **w**, meaning **gap-4** means 1rem gap, gap-y-4 means 1rem gap between elements on y-axis and so on.

# Typography

### font-family

Here are the default classes provided for `font-family`, which can be customized in the config file:

- **font-sans**: ` font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`
- **font-serif**: `font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`
- **font-mono**: `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;`

And obviously, you can customize them like this:

```js
// tailwind.config.js
  module.exports = {
    theme: {
      fontFamily: {
       'sans': ['ui-sans-serif', 'system-ui', ...],
       'serif': ['ui-serif', 'Georgia', ...],
       'mono': ['ui-monospace', 'SFMono-Regular', ...]
      }
    }
  }
```

### font-size

`font-size` can be set using **text** class , with **text-xs** being the smallest( 0.75rem ), and **text-9xl** the biggest( 8rem ).

### text-color

If you want a gray color text, you can use **text-gray-400**, for blue use **text-blue-600** and so on. I'm sure you get the idea now, how the syntax is, you can guess the tailwind classes even if you don't know them, and most of the times you will be right.

There are so many more different classes for typography and other sections and you can look them up straight into the official [documentation](https://tailwindcss.com/docs/).

# Let's make a card component

<iframe height="300" style="width: 100%;" scrolling="no" title="Tailwind responsive card" src="https://codepen.io/Rj456/embed/XWRgmWB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/XWRgmWB">
  Tailwind responsive card</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- I added a **flex** container on top, added the two children, which is the image, and the right section containing the top heading and the buttons. I added **md** breakpoints for the width and height, so if i have the class **md:w-1/2** on the image, it means on screens with 768px or more width, the width of image will be 50%. Other classes work in the same way and are self-explanatory.
- Hover classes on the buttons, so on hover I added a darker color on the blue button than the background color : **hover:bg-blue-700**. Same for the secondary button, but for **border color** instead of background.

For further learning, I will suggest stick with the official docs and if you learn better by videos, [Shruti Balasa](https://twitter.com/shrutibalasa) has a whole playlist of tailwind tutorials on her [Youtube](https://www.youtube.com/watch?v=VdwgXg6Vuug&list=PLrC_WsW4VdT4k3LWVFpTGM4ryYlDnrEvz) channel.

That's it! I'm posting after a long time, and I hope you learned something by reading this article. Thanks for reading!
