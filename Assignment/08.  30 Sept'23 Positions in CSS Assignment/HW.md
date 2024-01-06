# 08.  30 Sept'23 Positions in CSS Assignment 

---

## Task 1
### - Code
#### - HTML
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>HW_08 || Q1 </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <div class="boxA box">
        <p>A</p>
    </div>
    <div class="boxB box">
        <p>B</p>
    </div>
    <div class="boxC box">
        <p>C</p>
    </div>
    <div class="boxD box">
        <p>D</p>
    </div>
    <div class="boxE box">
        <p>E</p>
    </div>
</div>
</body>
</html>
```
#### CSS
```css
* {
    background-color: lightslategray;
}

.box {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    background-color: mediumseagreen;
    position: absolute;
}

.container {
    width: 110px;
    height: 110px;
    position: relative;
    left: 200px;
    top: 200px;
}
.boxA {
    left: 30px;
    top: 30px;
}

.boxC {
    left: 60px;
}

.boxD {
    top: 60px;
}

.boxE {
    left: 60px;
    top: 60px;
}
```
### Result Image
![img.png](img.png)

---
---

## Task 2
### Response
#### Absolute Positioning:
- Absolute positioning in CSS is a technique used to precisely place an element within a container based on specific coordinates or relative to its closest positioned ancestor. When you set an element's position to "absolute," it's taken out of the normal document flow, meaning it doesn't affect the layout of other elements around it.
#### Relative Positioning
- Relative positioning in CSS is a method that allows you to shift an element's position relative to its default position in the document flow. When you set an element's position to "relative," it remains in the normal document flow, but you can adjust its position using properties like top, bottom, left, and right.

---
## Task 3
### - Code
#### - HTML
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>HW_08 || Q3 </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <div class="text">
        <div class="title">
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div class="content"><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae, consequuntur impedit nesciunt nihil
            quaerat quo ratione voluptate! Consequuntur culpa ea eligendi est fugiat in mollitia, qui quis quos saepe?
            Eum, nesciunt, veritatis. Adipisci aliquam assumenda consequuntur harum maiores neque nobis optio rem
            repellendus similique. Accusamus asperiores, dicta dolor eligendi illum in ipsa iusto minus molestiae nisi
            officia omnis quidem sequi tempore vel veritatis voluptate voluptates. Accusantium animi assumenda
            blanditiis consequatur consequuntur debitis deleniti, deserunt, doloribus ea fuga fugiat harum id illum in
            ipsam itaque labore, molestiae natus porro praesentium quas repellendus rerum sapiente sit temporibus
            voluptatem voluptatibus! Consequuntur doloribus enim facere harum ullam. Deleniti dolore eligendi excepturi
            magnam veniam. Amet debitis excepturi ipsum necessitatibus officia perspiciatis ut vero! Architecto culpa,
            fugit hic praesentium quaerat ratione repellendus sint soluta unde. Ab asperiores, dolore earum ipsa minima
        </p>
        </div>
    </div>
    <div class="image">
        <img alt="" src="https://picsum.photos/600">
    </div>
</div>
</body>
</html>
```
#### - CSS
```css
*{
    margin: 0;
    padding: 0;
}

body {
    background-color: lightslategray;
}

.container {
    border: 2px solid white;
    padding: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: beige;
}

.text {
    width: 65%;
    height: 300px;
    display: inline-block;
    overflow: hidden;
}

.image {
    display: inline-block;
    max-height: 300px;
    max-width: 35%;
    margin-left: 10px;
}

.image img {
    height: 100%;
    width: 100%;
}

.title {
    font-weight: bold;
    font-size: xx-large;
    color: black;
}

.content {
    font-size: x-large;
    color: black;
}
```
### - Image
![img_1.png](img_1.png)
---

## Task 2
### - Code
#### - HTML
#### - CSS
### - Image