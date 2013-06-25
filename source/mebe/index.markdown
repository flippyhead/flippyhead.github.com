---
layout: page
title: "mebe"
date: 2013-03-22 09:31
comments: true
sharing: true
footer: true
---

## TL;DR

Mebe.co is a URL-based API for displaying images. It's pretty damn simple; you just include a keyword or two in the URL and you'll get a highly related image.

[Try it out!](http://mebe.co)

## Motivation

I found myself daily wanting to "talk in pictures." Many of the mobile and desktop messaging tools I use daily provide facilities for including [emoji](http://www.emoji-cheat-sheet.com/) icons or to display images. But the provided icons are always extremely limited, usually to smiley faces and the like.

mebe.co is designed to let you express an idea visually via a simple text (usually chat) interface. Campfire, Facebook even GitHub comments (and countless other apps) will convert a URL that points to an image into the image itself. mebe.co makes it super easy to express any idea in an image.

## Construction

mebe.co is a [Node](http://nodejs.com) app hosted on [NodeJitsu](http://nodejitsu.com). It uses [Amazon S3](http://aws.amazon.com/s3/) to cache image results which it gets from the [Bing Search API](http://www.bing.com/developers/). It doesn't have a data store.

Bing provides reasonably high quality search results; I'd say at least as good as Google's. It simply grabs the first (most relevant) match for your term, displaying a reasonably sized thumbnail of the original. At some point I may have to start paying for search results.


## Discussion

I'd love to hear your thoughts and ideas! Please comment below. There's also a great discussion that happened on [Hacker News](https://news.ycombinator.com/item?id=5618523).