---
title: Wondrous CSS filters
description: Article about CSS filters
excerpt: CSS filters have too many possibilities and the reason why is because CSS filters can use SVG filters as well, and this makes them so much powerful ...
date: "2020-09-08"
tags:
  - CSS filters
layout: layouts/post.njk
---

_They are awesome_<br>

CSS filters have too many possibilities and the reason why is because CSS filters can use **SVG** filters as well, and this makes them so much powerful.
Filters are mostly misunderstood as properties only to change some colors or give some blurry effect, but they are so much more than that! Let's see them in action.

# _What are they?_

In a nutshell, they are a bunch of functions applied with the <code>filter</code> property, to change things like opacity, brightness, contrast and also apply some cool masks like sepia, which you will see later on in this article!

<iframe height="300" style="width: 100%;" scrolling="no" title="Filters and Nostalgia" src="https://codepen.io/Rj456/embed/oNxzYvO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/oNxzYvO">
  Filters and Nostalgia</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

That was me and my father :) . Okay,getting back to filters...

The <code>filter</code> property can have these functions as **values**, other than **initial, inherit and none** :

- blur()
- brightness()
- saturate()
- hue-rotate()
- sepia()
- invert()
- grayscale()
- opacity()
- contrast()
- drop-shadow()
- url()

Some of these are self-explanatory, like blur, brightness, grayscale,opacity, etc. But let's look at each of them.
So the original image looks like this:

![Starry Night](https://res.cloudinary.com/codepenrishav/image/upload/v1597404885/starry_night_full_iyqyun.jpg)

# _blur()_

Takes a length value, like px, em, rem as the radius for the gaussian blur applied to the element.

![blur](https://res.cloudinary.com/codepenrishav/image/upload/v1599485482/Codepen/blur_nhxjch.png)

# _brightness()_

Takes numbers and percentages as arguments. Percentages more than 100% brighten the image, and less than 100% darkens it. Play with it and you'll understand better.

![brightness](https://res.cloudinary.com/codepenrishav/image/upload/v1599484999/Codepen/brightness_uuekht.png)

# _saturate()_

Saturation defines the intensity of the colors in an image.
This function saturates/desaturates the image, takes a number or a percentage and values greater than 100% saturates the image, and less than 100% desaturates it.

![saturate](https://res.cloudinary.com/codepenrishav/image/upload/v1599485454/Codepen/saturate_qhri99.png)

# _hue-rotate()_

Yep, you guessed it right. This function rotates the hue of the element, and takes values in "angles".

![hue rotate](https://res.cloudinary.com/codepenrishav/image/upload/v1599485355/Codepen/hure_rotate_ojhbyx.png)

Let's just assume now that all of these functions take either numbers, angles or percentages as arguments, and filter the elements accordingly.

# _contrast()_

Changes the contrast of an image, takes numbers or percentages as inputs.

![contrast](https://res.cloudinary.com/codepenrishav/image/upload/v1599489806/Codepen/contrast_zowzgq.png)

# _invert()_

![invert](https://res.cloudinary.com/codepenrishav/image/upload/v1599490129/Codepen/invert1_thjbgr.png)

# _drop-shadow()_

This one is like the elder brother of <code>box-shadow</code>. <code>box-shadow</code> always gives us a rectangular shadow, but if we want a shadow which feels real, we can use this filter. Hover on the SVG to see the effect.

<iframe height="300" style="width: 100%;" scrolling="no" title="drop-shadow()" src="https://codepen.io/Rj456/embed/WNwdPKX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/WNwdPKX">
  drop-shadow()</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

# _grayscale()_

![grayscale](https://res.cloudinary.com/codepenrishav/image/upload/v1599490193/Codepen/grayscale_w0zexb.png)

# _opacity()_

![opacity](https://res.cloudinary.com/codepenrishav/image/upload/v1599489861/Codepen/opacity_fza8pv.png)

# _sepia()_

![sepia](https://res.cloudinary.com/codepenrishav/image/upload/v1599489861/Codepen/sepia_u7gtzb.png)

# _url()_

This is one function which gives greater power to our CSS filters, as this takes the url of an [SVG Filter](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) which is a compelety different topic, and not in the scope of this article. But, just understand that it applies SVG filters by getting a url to the SVG file, or the ID of the inline SVG filter in HTML. It brings in many possibilities.

<iframe height="300" style="width: 100%;" scrolling="no" title="filter demo 2" src="https://codepen.io/Rj456/embed/QWNagKJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/QWNagKJ">
  filter demo 2</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

# Animating filters

They are animatable, so you can do this:

<iframe height="300" style="width: 100%;" scrolling="no" title="Animated Filters" src="https://codepen.io/Rj456/embed/oNxpOYq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rj456/pen/oNxpOYq">
  Animated Filters</a> by Rishav (<a href="https://codepen.io/Rj456">@Rj456</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

So that is all for CSS filters, they are relatively new, and as IE is gone (sigh), support is good enough.
