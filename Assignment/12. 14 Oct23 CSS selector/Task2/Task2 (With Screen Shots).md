![Alt text](image.png)

```css
body {
    background-color: slategray;
    color: white;
}

nav ul li {
    list-style: none;
    text-decoration: none;
}
nav > ul > li {
    display: inline-block;
    color: white;
}

ul > li + li {
    margin: 20px;
}
nav > ul > li > a {
    color: white;
}
nav {
    display: flex;
    justify-content: center;
}
```