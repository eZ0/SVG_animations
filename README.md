SVG Animations
==============

Research project for Web Specialisation

Scalable Vector Graphics (SVG) is an XML-based vector image format for 2D graphics with support for interactivity and animation. 
The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999.

SVG images and their behaviors are defined in XML text files. This means that they can be searched, indexed, scripted, and compressed. As XML files, SVG images can be created and edited with any text editor, but are more often created with drawing software. SVG allows three types of graphic objects: vector graphics, raster graphics, and text.

SVG content can be animated using the built-in animation elements such as ```html <animate>```, ```html<animateMotion>``` and ```html<animateColor>```. Content can be animated by manipulating the DOM using ECMAScript and the scripting language's built-in timers. SVG animation has been designed to be compatible with current and future versions of Synchronized Multimedia Integration Language (SMIL). Animations can be continuous, they can loop and repeat, and they can respond to user events, as mentioned above [source](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

SVG files are significantly smaller then JPEG or GIF. Other advances:

- Zooming: Users can magnify their view of an image without negatively affecting the resolution.
- Text stays text: Text remains editable and searchable. Additionally, any font may be used.
- Small file size: SVG files are typically smaller than other Web-graphic formats and can be downloaded more quickly.
- Display independence: SVG images always appear crisp on your screen, no matter the resolution. 
- Superior color control: SVG offers a palette of 16 million colors.
- Interactivity and intelligence: Since SVG is XML-based, it offers dynamic interactivity that can respond to user actions.

SVG contains the following basic shape elements:
Rectangles
Circles
Ellipses
Lines
Polylines
Polygons
Plus: Paths

You can also create svg in 3D.

<h2>Including SVG in HTML</h2>
```html
<embed src="canvas.svg" width="350" height="176" type="image/svg+xml" name="emap">
<object type="image/svg+xml" name="omap" data="canvas_norelief.svg" width="350" height="176"></object>
<iframe src="canvas_norelief.svg" width="350" height="176" name="imap"></iframe>
```

[My Codepen](http://codepen.io/eZ0/pen/wgqAs)

<h2>Resources</h2>
<h3>References</h3>
- [- ML - Managing Data Exchange](http://en.wikibooks.org/wiki/XML_-_Managing_Data_Exchange/SVG)
- [W3](http://www.w3.org/Graphics/SVG/) - working group w3 on svg 
- [Adobe SVG Dev Center](http://www.adobe.com/devnet/svg.html)
- [SVG Coordinate System](http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#overview)
- [WebPlatform SVG](http://docs.webplatform.org/wiki/svg)
- [Browser Support](http://caniuse.com/#search=svg)
- [Velocity.js](http://julian.com/research/velocity/) for svg animation (solves svg support problem)
- [SVG Circus](http://svgcircus.com) for creating animations
- [Examlpe on server-side svg generation](http://www.carto.net/papers/svg/samples/mysql_svg_php.shtml)
- [SVG Open conference](http://www.svgopen.org/2014/)
- [Snap.svg](http://snapsvg.io)
- [Awesome SVG](https://github.com/willianjusten/awesome-svg) guide for learning svg
- [Z-index on SVG](https://svgwg.org/svg2-draft/painting.html#ZIndexProperty)
- [Optimisation tool for SVG](https://github.com/svg/svgo)
- [Accessible SVG](http://www.sitepoint.com/tips-accessible-svg/)

<h3>People to follow</h3>
- [Dmitry Baranovsky](https://www.youtube.com/watch?v=SeLOt_BRAqc) - dev of snap.svg, raphael etc 
- [Sara Soueidan](https://www.youtube.com/watch?v=hI9roqOKKO8&app=desktop) and [her slides](https://docs.google.com/presentation/d/1Iuvf3saPCJepVJBDNNDSmSsA0_rwtRYehSmmSSLYFVQ/pub?start=false&loop=false&delayms=3000&slide=id.g33a59a964_010)
- [Todd Parker](https://docs.google.com/presentation/d/1CNQLbqC0krocy_fZrM5fZ-YmQ2JgEADRh3qR6RbOOGk/pub?start=true&loop=false&delayms=5000&slide=id.g33516db85_025) Workflow for designers

<h3>Tutorials</h3>
- [Export SVG from AI to web](http://creativedroplets.com/export-svg-for-the-web-with-illustrator-cc/)
- [Quick SVG tutorial](http://svgtutorial.com)
- [Masking SVG animations](https://medium.com/@gordonnl/stylised-line-animations-ded23320ffe5)
- [Styling and animating SVG with CSS](http://www.smashingmagazine.com/2014/11/03/styling-and-animating-svgs-with-css/)
- [Line Animation with SVG](http://css-tricks.com/svg-line-animation-works/)
- [Line Animation with SVG](http://jakearchibald.com/2013/animated-line-drawing-svg/)
- [Manipulating SVG icons](http://webdesign.tutsplus.com/articles/manipulating-svg-icons-with-simple-css--webdesign-15694)
- [SVG filters](http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters)
- [SVG animation tutorials](http://bashooka.com/coding/svg-animation-tutorials/)

<h3>Examples</h3>
- [Loading Icons](http://codepen.io/aurer/pen/jEGbA)
- [Responsive SVG icons](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Anchor Styles](http://tympanus.net/Development/InlineAnchorStyles/)
- [Cool example & portfolio](http://www.cjgammon.com/#work) 
- [Fullscreen-overlay-effects](http://tympanus.net/codrops/2014/02/06/fullscreen-overlay-effects/)
- [Shape hover effect with SVG](http://tympanus.net/codrops/2014/01/07/shape-hover-effect-with-svg/)
- [Animated SVG](http://oak.is/thinking/animated-svgs/)
- [Animated SVG with snap.svg](http://tympanus.net/codrops/2013/11/05/animated-svg-icons-with-snap-svg/)
- [SVG animation for xBox/PS](http://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit)




