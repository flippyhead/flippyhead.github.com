---
layout: page
title: "H.E.Ai.D."
date: 2010-03-12 21:11
comments: true
sharing: true
footer: true
---

<iframe width="721" height="561" src="//www.youtube.com/embed/O6OW1RqX6lk?rel=0" frameborder="0" allowfullscreen></iframe>

## TL;DR

The H.E.Ai.D. is a large scale, interactive, collaborative art installation where people dance with laser light and create music together as they move. It uses computer vision to interpret motion then generates a variety of music, sound and light patterns.

The system runs on custom configured Mac-based hardware and is primarily written in JavaScript for the [Max](http://cycling74.com/products/max/) platform. The source code is available [freely on github](https://github.com/flippyhead/heaid).

The software runs on custom assembled hardware including a mac mini, laser, galvanometer, sound system, and cameras.

Learn more at [heaid.com](http://heaid.com).

## History

In winter 2010 a group of fantastically smart engineers, designers and musicians got together and committed to building a large scale interactive musical instrument for Burning Man that year. The following months were an incredible time of thinking, building, designing and generally willing our project into existence. We ended up getting significant funding from [IgnitionNW](http://ignitionnw.org/) and [Burning Man Arts Organization](http://www.burningman.com/installations/art_grants.html), thanks guys!

After about six months of pretty serious effort our project was successfully deployed and generally was a big hit. It was installed at a few other art installations and conferences before being retired in late 2011.

## Design

The general concept was to create a large interactive space that multiple people could inhabit and affect. Movement would be interpreted and feedback provided in form of sound and light.

![General design](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-hardware-0.jpg)

We tried three different technical approaches for the main apparatus before settling on a final solution. All three utilized a single laser beam being rapidly "split" into many beams (and arbitrary patterns) using a galvanometer-based oscillating mirror.

![A single beam split into many](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-hardware-2.jpg)

The first approach for detecting interaction combined the use of lasers for both output and input detection. It was a predominately hardware-based "laser harp" inspired by a [design by Stephen Hobley](http://www.stephenhobley.com/blog/laser-harp-2009/the-laser-harp-pages/). This approach used custom logic chips, light detectors, and a simple arduino program.

![Hardware based electronic harp](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-hardware-1.jpg)

Timing signals were applied to a galvanometer to split a single beam. The timing information was used in conjunction with the backscatter detection to work out which of the "split" beams was being broken at any one time. This produced MIDI signals to whatever instrument was connected.

![galvanometer oscillating mirror and control systemm](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-hardware-3.jpg)

The second approach used [OpenCV](http://opencv.org/) and a custom OSX-based objective-C program to interpret video information. This approach worked OK but wasn't very adaptable and lacked effective techniques for disambiguating visual signal from noise (e.g. shifting backgrounds or changes in lighting).

![Object-C OpenCV software](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-software-1.jpg)

A mac mini with camera, laser systems and sound controllers was housed in a custom built weather proof housing. The hope was that this device could be placed in a variety of locations; containing everything necessary (minus the speakers) to implement the art piece. We took great pains to deal with the unique environmental constraints posed by the Nevada desert in August, including building in a dry ice container to act as a heat sync during the hottest part of the day (which it turned out was not necessary).

![Hardware + computer](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-hardware-5.png)

The final solution we ended up choosing (and investing heavily in) was based on JavaScript and a more sophisticated approach to computer vision. The extreme flexibility of the Max platform for signal processing made it a lot easier to build in background detection, adaptability to changing lighting conditions, better edge detection, and sophisticated sound manipulations. What's more it allowed for some pretty crazy on-the-fly re-programming to experiment with different music and laser response models.

![The main max interface](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-software-3.jpg)

The overall user interface worked in two modes. The first created virtual pads in two dimensions on the ground. Events were triggered as people entered, left or moved within different zones. This activity was used to play and manipulate "DJ sets" provided by different community musicians. The second mode posed an analog continuum in a sound lattice which combined tones based on all people present in the play space. This produced strange harmonies that changed depending on position and number of people involved.

![Detection sound "pad" map](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-software-2.png)

For Burning Man we developed a large lighting truss based structure to suspend the device from. It used custom milled mounting devices to attach all the import parts including the computer systems and speakers. A custom developed ambient lighting device was developed to create optimal static lighting conditions at night.

![Super structure](https://dl.dropbox.com/u/242501/yeahtotally.org/heaid-hardware-6.jpg)