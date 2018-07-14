# UdaciFeeds

## Carlo Bruno | Udacity Front End Nanodegree
### Project \#4 Feed Reader Testing

[DEMO](https://carlo-bruno.github.io/frontend-nanodegree-feedreader/)

## Table of Contents

* [Introduction](#introduction)
* [How it Works](#how-it-works)
* [Built With](#built-with)


## Introduction

This is a simple RSS Feed Reader web app that gathers article links from four different websites, namely the [Udacity Blog](http://blog.udacity.com/), [CSS-Tricks](https://css-tricks.com/),HTML5 Rocks (now [Web Fundamentals by Google](https://developers.google.com/web/), and [Linear Digression](http://lineardigressions.com/) podcast.

The purpose of this project is to familiarize students to Test-Driven Development ([TDD](https://en.wikipedia.org/wiki/Test-driven_development)) using the Jasmine JS framework.

### A Udacity Project

Project forked from [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader)

In this project, we are given a web-based application that reads RSS feeds. The project already includes the [Jasmine](http://jasmine.github.io/) framework. Udacity also provided the page's _index.html_ as well as the stylings within the _css_ folder.

The page also comes with defined classes that work with the included JavaScript file.

_app.js_ contains the RSS feed reader app. We are using jQuery for selecting and working with our DOM elements. We are also using Handlebars.js as a template to render the data from our AJAX request into our HTML.

Students are expected to work on the _feedreader.js_ file for this project. Starting file includes the first test suite, the first spec, as well as _TODO_ comments to guide the developers.

## How it Works

On the Wep App, simply select the feed that you would like to show from the menu button on the top left-hand corner. The articles from the selected website will be reloaded to the page.

The site's footer contains the Jasmine Test Output where we can see the test specifications (or _specs_).

### [Project Rubric](https://review.udacity.com/#!/rubrics/18/view)

## Built With

+ HTML
+ CSS
+ JavaScript

### Toolkits
+ Google Fonts [Roboto](https://fonts.google.com/specimen/Roboto)
+ [IcoMoon](https://icomoon.io/) icons
+ [jQuery](https://jquery.com/) Javascript Library (v2.1.1)
+ [Jasmine](http://jasmine.github.io/) JavaScript Testing Framework (v2.1.2)
+ [Handlebars.js](https://handlebarsjs.com/) JavaScript Templating Engine (v2.0.0)

### Tutorials and Ideas
+ [TLDR Jasmine Tutorial](https://www.youtube.com/watch?v=h2eWfvcAOTI&t=1254s) by Dylan Israel
+ [Unit Testing In JavaScript via Jasmine](https://www.youtube.com/watch?v=eVpXkyN0zOE) by Jesse Warden
+ Udacity Knowledge Forum [Question](https://knowledge.udacity.com/questions/1667) regarding async callbacks (last spec)

