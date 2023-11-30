# Class Notes - September 3, 2023

## Attributes to Consider
1. **Title:** Describes the title of an element.
   - Example: `<title>Page Title</title>`
2. **Class:** Identifies the element's class for styling or scripting.
   - Example: `<div class="container">Content</div>`
3. **ID:** Provides a unique identifier for the element.
   - Example: `<p id="uniquePara">This is a unique paragraph.</p>`

## Additional Useful Attributes
- **Aria:** Enhances accessibility by providing additional information to assistive technologies.
   - Example: `<button aria-label="Close">X</button>`
- **Data:** Used to store custom data private to the page or application.
   - Example: `<div data-author="John Doe">Article Content</div>`

## Global Attributes
Global attributes can be used with any HTML tag, offering flexibility and consistency across elements.
   - Example: `<div class="example" id="uniqueExample" data-info="important">Content</div>`

## Style Attributes
Style attributes are employed to add CSS (Cascading Style Sheets) to HTML elements, enabling visual customization.
   - Example: `<p style="color: blue; font-size: 16px;">Styled Text</p>`

## Text Types
1. **Inline Text:** Requires only the necessary space.
2. **Block Text:** Occupies an entire block, allowing for more space manipulation using CSS attributes.

## Formatting Tags
1. `<b>` Tag: Makes text bold.
   - Example: `<p>This is **bold** text.</p>`
2. `<strong>` Tag: Emphasizes text in bold; especially effective for search engines.
   - Example: `**Important Information**`
3. `<u>` Tag
4. `<em>` Tag
5. `<i>` Tag
6. `<small>` Tag
7. `<sub>` Tag
8. `<sup>` Tag
9. `<mark>` Tag
10. `<del>` Tag
11. `<ins>` Tag

## Linking Tags
- `<a>` Tag: Utilizes the `href` attribute for hyperlinking.
   - Example: `[Visit Example](https://example.com)` (Opens link in a new page)

## Table Tags
1. `<tr>` Tag: Defines a table row.
2. `<th>` Tag: Represents a table header cell.
3. `<td>` Tag: Denotes a table data cell.
   - **Attributes:**
     - `colspan`: Specifies the number of columns a cell should span.
     - `rowspan`: Indicates the number of rows a cell should span.
   - Example:
     ```html
     <table>
       <tr>
         <th colspan="2">Header Cell</th>
       </tr>
       <tr>
         <td>Row 1, Cell 1</td>
         <td>Row 1, Cell 2</td>
       </tr>
     </table>
     ```

Understanding and utilizing these attributes and tags will enhance your proficiency in HTML coding.
