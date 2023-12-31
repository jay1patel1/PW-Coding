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

## Task 4
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
    <title>HW_08 || Q4 </title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
<!--<header>-->
    <div class="topText">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet aperiam architecto commodi cum
            cupiditate dicta distinctio dolor dolore dolores eaque esse fugiat in incidunt laborum minima mollitia natus
            nemo, nihil nostrum odit perferendis quasi quia quos ratione recusandae reiciendis rem sint sunt tenetur
            ullam unde vitae voluptate voluptatem?</p>
    </div>
    <div class="navbar">
        <div class="logoImage">
            <p>Logo</p>
        </div>
        <div class="navbar--content">
            <p class="home">Home</p>
            <p class="common">Pricing</p>
            <p class="common">Contact</p>
            <p class="common">Terms and Conditions</p>
            <p class="getStarted">Get Started</p>
        </div>
    </div>
<!--</header>-->
<main>
    <div class="content">
    <div class="text">
    <div class="card">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur debitis deserunt esse ipsum
            optio soluta! Autem, dolores eos itaque modi mollitia nam nemo, nihil quis sequi temporibus unde vel
            voluptatem voluptates? Animi beatae corporis distinctio ex, illo molestias quaerat quas sit sunt voluptatem!
            Commodi cum dolorum esse est, incidunt ipsam laboriosam, molestiae neque non odit officia optio pariatur
            quis quisquam, soluta tempora vitae. Cum dolore, expedita facilis fuga id magni odio pariatur. Consequuntur,
            eius enim esse facilis illo impedit optio porro provident quasi, sed soluta, tempora. Debitis dicta
            dignissimos dolorem ducimus eaque ex excepturi hic ipsum iste itaque iusto laborum libero magni maiores,
            molestiae neque nihil nobis non odit optio perferendis possimus quibusdam quis quod reprehenderit soluta
            suscipit tempore temporibus totam veniam. Amet aut debitis deserunt dignissimos dolorum ipsam itaque magnam
            minus odio quam quibusdam ratione recusandae reiciendis, sed suscipit. Dicta dolore doloribus ducimus eius,
            illum iste iusto libero magni molestias nostrum, perspiciatis repellendus soluta vitae. Amet aperiam autem,
            consectetur culpa cupiditate dolorum eius et expedita incidunt ipsa molestiae nemo neque nisi nostrum
            provident quae quisquam quod reprehenderit soluta tempora veniam vero voluptate. Ad blanditiis consequuntur
            deserunt dolorem fuga iusto nobis praesentium sapiente tempore voluptatum? Commodi consequatur corporis
            cumque eum exercitationem, facere impedit ipsam labore libero mollitia, natus necessitatibus non odio
            officiis pariatur reiciendis rerum? Aliquam delectus, iure laborum non sit voluptate voluptatem.
            Accusantium, assumenda consequatur culpa delectus, deserunt dignissimos doloremque eius eos et eum
            exercitationem expedita fugit hic ipsam itaque minus molestiae nam obcaecati quibusdam quis unde ut, vel
            veniam veritatis voluptatibus. Ad alias aliquam, aspernatur culpa cumque dolorum eaque eligendi, eos est
            exercitationem fuga incidunt iste iure laboriosam nobis officia officiis quam ratione reiciendis suscipit
            ullam vitae voluptatum. Eum iste repellendus reprehenderit veritatis voluptatem. Ad aperiam debitis,
            deserunt dolorem facilis fugiat illo, itaque natus odit porro, suscipit.</p>
    </div>
    <div class="card">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur debitis deserunt esse ipsum
            optio soluta! Autem, dolores eos itaque modi mollitia nam nemo, nihil quis sequi temporibus unde vel
            voluptatem voluptates? Animi beatae corporis distinctio ex, illo molestias quaerat quas sit sunt voluptatem!
            Commodi cum dolorum esse est, incidunt ipsam laboriosam, molestiae neque non odit officia optio pariatur
            quis quisquam, soluta tempora vitae. Cum dolore, expedita facilis fuga id magni odio pariatur. Consequuntur,
            eius enim esse facilis illo impedit optio porro provident quasi, sed soluta, tempora. Debitis dicta
            dignissimos dolorem ducimus eaque ex excepturi hic ipsum iste itaque iusto laborum libero magni maiores,
            molestiae neque nihil nobis non odit optio perferendis possimus quibusdam quis quod reprehenderit soluta
            suscipit tempore temporibus totam veniam. Amet aut debitis deserunt dignissimos dolorum ipsam itaque magnam
            minus odio quam quibusdam ratione recusandae reiciendis, sed suscipit. Dicta dolore doloribus ducimus eius,
            illum iste iusto libero magni molestias nostrum, perspiciatis repellendus soluta vitae. Amet aperiam autem,
            consectetur culpa cupiditate dolorum eius et expedita incidunt ipsa molestiae nemo neque nisi nostrum
            provident quae quisquam quod reprehenderit soluta tempora veniam vero voluptate. Ad blanditiis consequuntur
            deserunt dolorem fuga iusto nobis praesentium sapiente tempore voluptatum? Commodi consequatur corporis
            cumque eum exercitationem, facere impedit ipsam labore libero mollitia, natus necessitatibus non odio
            officiis pariatur reiciendis rerum? Aliquam delectus, iure laborum non sit voluptate voluptatem.
            Accusantium, assumenda consequatur culpa delectus, deserunt dignissimos doloremque eius eos et eum
            exercitationem expedita fugit hic ipsam itaque minus molestiae nam obcaecati quibusdam quis unde ut, vel
            veniam veritatis voluptatibus. Ad alias aliquam, aspernatur culpa cumque dolorum eaque eligendi, eos est
            exercitationem fuga incidunt iste iure laboriosam nobis officia officiis quam ratione reiciendis suscipit
            ullam vitae voluptatum. Eum iste repellendus reprehenderit veritatis voluptatem. Ad aperiam debitis,
            deserunt dolorem facilis fugiat illo, itaque natus odit porro, suscipit.</p>
    </div>
    <div class="card">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur debitis deserunt esse ipsum
            optio soluta! Autem, dolores eos itaque modi mollitia nam nemo, nihil quis sequi temporibus unde vel
            voluptatem voluptates? Animi beatae corporis distinctio ex, illo molestias quaerat quas sit sunt voluptatem!
            Commodi cum dolorum esse est, incidunt ipsam laboriosam, molestiae neque non odit officia optio pariatur
            quis quisquam, soluta tempora vitae. Cum dolore, expedita facilis fuga id magni odio pariatur. Consequuntur,
            eius enim esse facilis illo impedit optio porro provident quasi, sed soluta, tempora. Debitis dicta
            dignissimos dolorem ducimus eaque ex excepturi hic ipsum iste itaque iusto laborum libero magni maiores,
            molestiae neque nihil nobis non odit optio perferendis possimus quibusdam quis quod reprehenderit soluta
            suscipit tempore temporibus totam veniam. Amet aut debitis deserunt dignissimos dolorum ipsam itaque magnam
            minus odio quam quibusdam ratione recusandae reiciendis, sed suscipit. Dicta dolore doloribus ducimus eius,
            illum iste iusto libero magni molestias nostrum, perspiciatis repellendus soluta vitae. Amet aperiam autem,
            consectetur culpa cupiditate dolorum eius et expedita incidunt ipsa molestiae nemo neque nisi nostrum
            provident quae quisquam quod reprehenderit soluta tempora veniam vero voluptate. Ad blanditiis consequuntur
            deserunt dolorem fuga iusto nobis praesentium sapiente tempore voluptatum? Commodi consequatur corporis
            cumque eum exercitationem, facere impedit ipsam labore libero mollitia, natus necessitatibus non odio
            officiis pariatur reiciendis rerum? Aliquam delectus, iure laborum non sit voluptate voluptatem.
            Accusantium, assumenda consequatur culpa delectus, deserunt dignissimos doloremque eius eos et eum
            exercitationem expedita fugit hic ipsam itaque minus molestiae nam obcaecati quibusdam quis unde ut, vel
            veniam veritatis voluptatibus. Ad alias aliquam, aspernatur culpa cumque dolorum eaque eligendi, eos est
            exercitationem fuga incidunt iste iure laboriosam nobis officia officiis quam ratione reiciendis suscipit
            ullam vitae voluptatum. Eum iste repellendus reprehenderit veritatis voluptatem. Ad aperiam debitis,
            deserunt dolorem facilis fugiat illo, itaque natus odit porro, suscipit.</p>
    </div>
    <div class="card">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur debitis deserunt esse ipsum
            optio soluta! Autem, dolores eos itaque modi mollitia nam nemo, nihil quis sequi temporibus unde vel
            voluptatem voluptates? Animi beatae corporis distinctio ex, illo molestias quaerat quas sit sunt voluptatem!
            Commodi cum dolorum esse est, incidunt ipsam laboriosam, molestiae neque non odit officia optio pariatur
            quis quisquam, soluta tempora vitae. Cum dolore, expedita facilis fuga id magni odio pariatur. Consequuntur,
            eius enim esse facilis illo impedit optio porro provident quasi, sed soluta, tempora. Debitis dicta
            dignissimos dolorem ducimus eaque ex excepturi hic ipsum iste itaque iusto laborum libero magni maiores,
            molestiae neque nihil nobis non odit optio perferendis possimus quibusdam quis quod reprehenderit soluta
            suscipit tempore temporibus totam veniam. Amet aut debitis deserunt dignissimos dolorum ipsam itaque magnam
            minus odio quam quibusdam ratione recusandae reiciendis, sed suscipit. Dicta dolore doloribus ducimus eius,
            illum iste iusto libero magni molestias nostrum, perspiciatis repellendus soluta vitae. Amet aperiam autem,
            consectetur culpa cupiditate dolorum eius et expedita incidunt ipsa molestiae nemo neque nisi nostrum
            provident quae quisquam quod reprehenderit soluta tempora veniam vero voluptate. Ad blanditiis consequuntur
            deserunt dolorem fuga iusto nobis praesentium sapiente tempore voluptatum? Commodi consequatur corporis
            cumque eum exercitationem, facere impedit ipsam labore libero mollitia, natus necessitatibus non odio
            officiis pariatur reiciendis rerum? Aliquam delectus, iure laborum non sit voluptate voluptatem.
            Accusantium, assumenda consequatur culpa delectus, deserunt dignissimos doloremque eius eos et eum
            exercitationem expedita fugit hic ipsam itaque minus molestiae nam obcaecati quibusdam quis unde ut, vel
            veniam veritatis voluptatibus. Ad alias aliquam, aspernatur culpa cumque dolorum eaque eligendi, eos est
            exercitationem fuga incidunt iste iure laboriosam nobis officia officiis quam ratione reiciendis suscipit
            ullam vitae voluptatum. Eum iste repellendus reprehenderit veritatis voluptatem. Ad aperiam debitis,
            deserunt dolorem facilis fugiat illo, itaque natus odit porro, suscipit.</p>
    </div>
    </div>
    </div>
</main>
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
    background-color: #49c5b6;
    display: unset
}

.topText {
    background-color: #ffffff;
    color: black;
    text-align: center;
    padding: 10px;
}

.navbar {
    position: sticky;
    top: 0;
    background-color: #DF6C4F;
    display: flex;
    padding: 5px;
    z-index: 1;
}

.logoImage {
    width: 50%;
    padding: 20px;
    font-weight: bolder;
    font-size: xx-large;
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
}

.navbar--content {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: large;
    color: white;
}

.home {
    font-weight: bolder;
}

.getStarted {
    border: 2px solid white;
    padding: 10px;
}

.content {
    display: flex;
    justify-content: center;
}
.text {
    width: 60%;
    border: 3px solid white;
    margin-top: 20px;
    padding: 20px;
}

.text h1 {
    margin-top: 60px;
}
```
### - Image
![img_3.png](img_3.png)
![img_2.png](img_2.png)
---

## Task 5
### Response
#### What is Z index?
z-index is a CSS property that controls the stacking order of positioned elements on a web page along the z-axis (depth). It determines which elements appear in front of or behind others.
#### Example
```html
<div class="box red"></div>
<div class="box blue"></div>
<div class="box green"></div>
```
```css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
}

.red {
  background-color: red;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.blue {
  background-color: blue;
  top: 50px;
  left: 50px;
  z-index: 3;
}

.green {
  background-color: green;
  top: 80px;
  left: 80px;
  z-index: 2;
}
```
#### Image
![img_4.png](img_4.png)