# Grid Monkey
This project was a first attempt at creating an app with a desktop-like feel, complete with zooming/scaling capabilities for focusing individual elements or groups of elements. It does so using jQuery to toggle CSS classes containing the `transform: scale` property.

## Usage
Each `.grid-container` element may contain a `div.title` and `div.content`. Cells are placed in the `.content` divs. Grids may be nested as deeply as you like, though the headers become illegible after one or two levels, depending on the number of cells.
