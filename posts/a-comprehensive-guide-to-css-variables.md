---
title: A comprehensive guide to CSS Variables
description: This is a post on CSS Custom Variables AKA properties
date: "2020-08-09"
excerpt: I started using CSS variables when i came across them while building a loader. They are amazing!. In simple terms, they are ...
tags:
  - CSS custom properties
  - CSS variables
layout: layouts/post.njk
---

### (commonly known as CSS variables)

I started using CSS variables when i came across them while building a loader. They are amazing!. In simple terms, they are variables prefixed with --, and can be used by putting them in a <code>var()</code> function.One of the best reasons to use CSS variables is that they reduce repition.You can use them like this:

```css/1/5
 :root{
      --red: #ff0000;
     }

.el{
     background: var(--red);
    }

```

#### Further in this article ,we will call them CSS variables.

## Some important points : -

- CSS variables are scoped to the element they are declared.
- They are case sensitive,i.e: <code>--bgColor</code> and <code>--BgColor</code> will be two different CSS variables.
- CSS variables are not actually variables as in programming languages, they will be set only in the elements they are applied on.

CSS variables can be used in many ways, and should not be limited to just use them as variables. There can be many interesting use cases and i'll discuss the ones which i have come across so far.

# Use cases

### - Animating Pixel art

### - Making tints and shades

### - Global and Component scoped styles

### - Dark/Light Mode

### and many more...

# Animating Pixel art

If you like to make your pixel art with <code>box-shadow</code>, animating or even changing the values can be really hard because there are so many box-shadows that rewriting them again and again in <code>@keyframes</code> can be tiring. Instead of writing box-shadow values again and again,we can use css variables.I made a Calavera pixel art on Codepen and changed the css variables in my <code>@keyframes</code>.

<iframe height="300" style="width: 100%;" scrolling="no" title="Calavera -First Pixel Art" src="https://codepen.io/Rj456/embed/WNrMNKE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/WNrMNKE">
  Calavera -First Pixel Art</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

# Making tints and shades

If you don't know what tints and shades are, you can learn about it in basic color theory. I'll explain here in simple terms:

- Choose a color. Let's say blue, now the<b> tints </b>would be the lighter versions of blue, and the<b> shades </b>will be the darker versions.

![Tints and Shades](/img/tints.jpg)

So, to make tints and shades easily, we can use css variables. We will use <code>hsl()</code> for our colors, as we will change the lightness in HSL(hue, saturation, lightness).
The idea is to use <code>hsl()</code> on the main color for which we want the tints and shades,and change the lightness by using css variables.

<iframe height="300" style="width: 100%;" scrolling="no" title="Tints and shades" src="https://codepen.io/Rj456/embed/eYZNpZV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/eYZNpZV">
  Tints and shades</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

As you can see, I made two variables<code> --main-color </code>, and<code> --lightness </code>, and set different classes for different tints and shades. Then i changed the <code> --lightness </code>variable in each tint and shade, and therefore we can see different colors as their lightness is different!

# Global and Component scoped styles

Global css variables can be declared by putting them in a <code>:root </code>selector. <a href="https://twitter.com/SaraSoueidan">Sara Soueidan</a> has a great <a href="https://www.sarasoueidan.com/blog/style-settings-with-css-variables/">article</a> on this which will give you more insight into this particular use case.

# Dark/Light mode

We can also implement Dark and Light mode by using css variables. <a href="https://twitter.com/_ananyaneogi">Ananya Neogi </a> has a wonderful <a href="https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8">article</a> on this implementation.

<hr>

So I guess that's it! I hope you got a teeny tiny idea of what css variables are and what they can do. If this helped you, you can drop a comment<a href="https://twitter.com/rovenclasher/status/1292477510328946688"> here</a>.
