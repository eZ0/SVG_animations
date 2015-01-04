SVG Animations
==============

Research project for Web Specialisation

Scalable Vector Graphics (SVG) is an XML-based vector image format for 2D graphics with support for interactivity and animation. 
The SVG specification is an open standard developed by the World Wide Web Consortium (W3C) since 1999.

SVG images and their behaviors are defined in XML text files. This means that they can be searched, indexed, scripted, and compressed. As XML files, SVG images can be created and edited with any text editor, but are more often created with drawing software. SVG allows three types of graphic objects: vector graphics, raster graphics, and text.

SVG content can be animated using the built-in animation elements such as <animate>, <animateMotion> and <animateColor>. Content can be animated by manipulating the DOM using ECMAScript and the scripting language's built-in timers. SVG animation has been designed to be compatible with current and future versions of Synchronized Multimedia Integration Language (SMIL). Animations can be continuous, they can loop and repeat, and they can respond to user events, as mentioned above. ( source: http://en.wikipedia.org/wiki/Scalable_Vector_Graphics )

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

**********RESOURCES**********
- [- ML - Managing Data Exchange](http://en.wikibooks.org/wiki/XML_-_Managing_Data_Exchange/SVG)
- [W3](http://www.w3.org/Graphics/SVG/) - working group w3 on svg 
- [Adobe SVG Dev Center](http://www.adobe.com/devnet/svg.html)
- [SVG Coordinate System](http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#overview)
- [WebPlatform SVG](http://docs.webplatform.org/wiki/svg)


