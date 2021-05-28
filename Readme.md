# Assembly UI

## Install

需要配置一个无密码的 GitHub ssh key，然后通过下面的命令在项目中安装组件库。

```
npm i assemblyfin/assembly-ui#0.1.0
```

## Usage

### Globally add Google fonts

Add the following code into the `<head>` tag of the html template.

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
```

### Globaly import global styles

Import the `global.css` in page template. This file contains the essential CSS styles of the entire project.

```
import "assembly-ui/build/global.css";
```
