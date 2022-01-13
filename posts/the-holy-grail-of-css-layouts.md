---
title: The Holy Grail of CSS Layouts
description: A Simple Intro to CSS Grids
excerpt: We started from tables, moved to floats, then some positioning and then flexbox*. But, in all these methods for laying out our site, we didn't have something that could handle things in the 2-dimensions ...
date: "2020-08-20"
tags:
  - CSS Grid
layout: layouts/post.njk
---

_A Simple Intro to CSS Grids_

We started from **tables** , moved to **floats**, then some **positioning** and then **flexbox** . But , in all these methods for laying out our site , we didn't have something that could handle things in the 2-dimensions, rows and columns . The elements did not have any relationship with each other, as in they were not aware of each other's presence .

ENTER CSS GRID...

CSS Grid is the best solution for an all-responsive flawless layout with elements having a well defined relationship with each other . Other than just making responsive layouts , it can also solve some of the oldest problems in web design , such as **vertical centering** . Just a few bits of CSS and all elements centered perfectly as long as they are direct children of the **grid container** .

    .grid-container{
       display: grid;
       height: 100%;
       width: 100%;
       place-items: center;
    }

See how easy that was? You won't have to worry about googling how to center a div anymore :) .

## _What is CSS grid anyway?_

In simple words , CSS grid is a layout system in which elements are positioned into rows and columns , and each child has to be the direct descendent of the element on which the display property of grid will be applied, i.e: the grid container .
CSS Grid is amazing in every way and it is a much wanted addition into CSS . It was always in the minds of the creators of CSS , **Dr. Bert Bos** and **Håkon Wium Lie** , as they were highly inspired by the things magazines , books and newspapers were doing with layout . CSS Grid is a modern layout tool which gives us not only a great amount of power for making complex , scalable and maintainable websites , but also allows us to do more with less code .

## _Some important properties_

CSS grid has some properties you need to define in order to have a grid layout .
Before that let's understand the new units of measurement we will use in grid on a regular basis .

- **Fr** : Fr is a fractional unit and _1fr_ is for 1 fraction of the available space.
- **auto** : Although it isn't new , people might be confused as how it applies in grid . Basically auto will give the space which is required to fit the content of the grid element. This gives us many possibilities as you will see further in the article .

In the example below , we are making a grid of two rows and two columns of equal length .
First of all , we have to put all items in a grid container by setting display: grid on it .

    .grid-container{
      display: grid;
    }

Now all elements have to be children of this container . In order to define how columns and rows scale and have different sizes , we have properties called **grid-template-columns** and **grid-template-rows** . To have a layout of two columns of equal size, and two rows of equal size as well , we can define our grid like this :

<iframe height="300" style="width: 100%;" scrolling="no" title="Grid demo" src="https://codepen.io/Rj456/embed/LYNRKYp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/LYNRKYp">
  Grid demo</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## _Article Layout_

I came across this technique by reading [Kevin Pennecamp's](https://twitter.com/vycke_) article on [modern CSS grid solutions](https://vycke.dev/blog/css-layout-patterns/) . This site is using the same technique . You see all of these amazing sites who have their content centered nicely on big screens and small screens alike? ,that can be done by media queries, some margins and padding , but it is not an intuitive solution. With CSS Grid , it's easy . Just have two empty grid columns on either side of your content and have min and max width values for all of the columns so that they scale nicely .

    main {
      display: grid;
      grid-template-columns:
      minmax(2rem, 1fr)
      minmax(auto, 65ch)
      minmax(2rem, 1fr);
    }
    /* Center all children */
    main > * {
      grid-column: 2;
    }

Applying minmax() gives us a minimum and maximum value for the columns . You can see that we have min size of 2rem and max size of 1fr for the columns on the side , and min size of auto and max size of 65ch which will ensure that the main content is not more than 65 characters , and it it's less than 65 then auto will take care of that .
We used grid-column: 2 which means that all content in main will start from column line 2 .

![Article Layout](https://res.cloudinary.com/codepenrishav/image/upload/v1641109319/csskenpai/cssgrid_qhpypt.gif)

This is only one example of how CSS Grid can make responsive layouts . For more insight on this , visit this amazing [website](https://1linelayouts.glitch.me/) by [Una Kravets](https://twitter.com/Una) .

## _What can you animate?_

You can animate the grid-gap property to make amazing things like this :

![Article Layout](https://res.cloudinary.com/codepenrishav/image/upload/v1641109347/csskenpai/cssgridAnimate_lxyrwz.gif)

Firefox nightly supports animating grid-template-columns and grid-template-rows . [Michelle Barker](https://twitter.com/MicheBarks) did a experiment on her [website](https://css-irl.info/animating-css-grid/) about this , go check it out!

## _Support_

It's awesome !

<img src="https://caniuse.bitsofco.de/image/css-grid.png" alt="CSS Grid support"/>

## _Summary_

To summarize , you can do a lot with CSS Grid once you start ! This was just an introductory article to open the doors of CSS grid for you .
Some articles that will help you learning further

- [The Story of CSS Grid, from it's creators](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/#:~:text=Early%20on%2C%20browser%20makers%20wrote,into%20the%20Template%20Layout%20Module.) by [Aaron Gustafson](https://twitter.com/AaronGustafson)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Docs for CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout#:~:text=CSS%20Grid%20Layout%20excels%20at,elements%20into%20columns%20and%20rows.)

Thanks for reading ! If this helps you in any way , you can always comment on twitter ;)
