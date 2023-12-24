# Modern HTML
---
#### Q1 What are the features of the HTML 5?
##### 1. Semantic Elements:
- `<header>` tags - This tag helps to provide headers in html file for better readability.
- `<footer>` tags - This tag helps to provide footer in html file for better readability.
- `<nav>` tag - This tag is used to provide navigation bar, and menus.
- `<section>`- section tag abel user to provide broad level section in HTML
- `<article>` tag - The HTML article tag defines a self-contained piece of content in a document, page, application, or site. The content in the article tag should be independent and complete from other content on the page.
- `<aside>` tag - as shown in image, by this tag is provided when we want to provide indirect information. 
   ![Alt text](image-1.png)
- __Here is image to summarize all the tags__
![Alt text](image.png)
#### 2. Audio Vedio Support:
- Audio tag - Audio files can be directly added without additional support of the plugin.
- Video tag - Vidio files can be directly added without additional support of the plugin.
#### 3. Canvas Elements:
- A blank drawing surface for dynamic graphic and animation is provided for multiple applications.
#### 4. GeoLocaiton API:
- It helps to share ueser's location with their permission.
#### 5. Local Storage:
- Allows websites to store data locally in the user's browser, enabling capabilites and personalized experiences.
#### 6. Form Enhasment:
- Improved form vaidation, new input types like email, URL,date,paceholder text, and required fields are added in the HTML 5.
#### 7. Responsive Image:
- Ensure images adapt to different screen size.
#### 8. Web Workers:
- Run Javascript code in the background without blocking main threads.
#### 9. Drag and droop API:
- Enable drag-and drop functionality.
#### 10. Websockets:
- Establish persistent, bidrectional communication between browser and server.
#### 11. Microdata:
- Embed structred data into web pages for search engines and other applications.
#### 12. Cross-document Messaging:
- Allow communication between different windows or frames.

---
#### Q2 What are HTML entities? List out 5 commonly used HTML entities.

HTML entities are special codes used to represent reserved characters and symbols in HTML markup. These entities are used to display characters that have a special meaning in HTML, such as `<` (less than), `>` (greater than), and `&` (ampersand), without causing parsing errors. Here are five commonly used HTML entities:

1. `&lt;` - Represents the less than symbol (`<`).
2. `&gt;` - Represents the greater than symbol (`>`).
3. `&amp;` - Represents the ampersand symbol (`&`).
4. `&quot;` - Represents the double quotation mark (`"`).
5. `&apos;` - Represents the apostrophe (`'`).

These entities are particularly useful when you want to display special characters in your HTML document without interfering with the document's structure and rendering.

---
#### Q3 Define accessibility in the context of web development. Discuss why it's essential to create accessible website and how it benefits different user groups.
- __What is accessibility?__
  - accesibility is refres to the practice of design and developing website and web applications in a way that all user group can use it regardless of age, disability and physical abilities.
- __Why it is important?__
  - As mentioned above it ensure that all group of people can access is the biggest factor 
  - Apart from that in USA there is a _ADA_ (American disability act) which mandate that every user should be able access the website.
  - Moreover, it also enhance the user experience.
  - apart from that there are many factors like, it's improve SEO ranking, increase market reach and etc. 
- __what are the benefits different user groups?__
  - __Visual impers__ : This group is benefited as this website uses image assist and alternative text so that they can use it. apart from that it also have the high contrast design and option to make text bigger so low vision people can also use it.
  - __Hearing impers__ : This websites have captions and and transcripts for the multimedia files so they also can interact with the websites.
  - __And there are many more benefits of the creating accessible website but above shown are the most prominent reasons.__

---
#### Q4 List any 3 ways wich help us in improving the accessibility of HTML.
1. __Semantic Markup:__
- Use the right element for the job: Instead of generic `<div>`s, prioritize elements like `<header>`, `<nav>`, `<section>`, `<article>`, and `<aside>` that clearly define the structure and purpose of content. This helps screen readers understand the page layout and makes navigation easier for everyone.

- Structure headings logically: Utilize heading tags (`H1`, `H2`, `H3`) to indicate hierarchy and organize content sections. This allows users to skim and jump to relevant parts easily.

2. __Descriptive Text and Alternatives:__

- Write clear and concise text: Avoid jargon and complex language. Aim for straightforward wording that everyone can understand.

- Add informative alt text to images: Describe the image content accurately, providing context for visually impaired users who rely on screen readers.

- Provide transcripts or captions for audio and video content: This ensures everyone can access the information, regardless of their hearing ability.

3. __Keyboard Navigation and Focus:__

- Ensure all elements are keyboard accessible: Users who rely on keyboards should be able to navigate and interact with all functionalities on the page.

- Clearly indicate focus state: Use styles or visual cues to highlight which element is currently selected, aiding keyboard users in understanding their location and actions.

- Follow logical tab order: Arrange the order in which keyboard focus moves between elements logically, making navigation intuitive and efficient.
