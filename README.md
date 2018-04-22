# material-theme
A material design theme for use with Hexo sites.

## See preview site - [ben.bike/hexo-themes/material-theme](https://ben.bike/hexo-themes/material-theme/)

## Features
- Clean material design
- Syntax highlighting for code blocks

## Uses
- [Material Design Lite](https://getmdl.io/)
- [highlight.js](https://highlightjs.org/)
- [jQuery](https://jquery.com/)
- [Google Material Icons](https://material.io/icons/)


## Installation
### 1. First, create your Hexo site
[Hexo website](https://hexo.io/docs/setup.html)
```
$ hexo init MyBlog
$ cd MyBlog
$ npm install
```
### 2. Add theme to the site
Add either using ```git clone```:
```
$ cd MyBlog
$ git clone https://github.com/benTheBike/material-theme.git themes/material-theme
```

### 3. Change config.yml
In your site's config file (```/MyBlog/_config.yml```), change the value of ```theme``` to ```material-theme```.

### 4. Generate (and view) your site
Run ```hexo clean``` & ```hexo generate``` to generate your site. Then to preview it, run ```hexo serve``` to view your site @ ```http://localhost:4000```.

## Modifying theme
There are a number of ways to modify this theme.
- Config: Modify ```/MyBlog/themes/material-theme/_config.yml```
- Feel free to delve into the code located in ```/material-theme/layout``` & ```/material-theme/source``` to make modifications to core theme elements

## To Do
- Add comments (most likely using Github issues)
- 'File download' page layout
- 'Projects page' page layout
- Social media links
- Rework 'share post' button
- Clean up and document code
- Add copy buttons for code blocks
