## SAFORMCONTROL

You no longer wish to write the JavaScript code for your form control? Don't hesitate to download 'saformcontrol'. 'saformcontrol' is a package that can prove to be useful for this purpose.

### Installation :

```js
npm install saformcontrol
```

### Usage :

First you need to import the package :

-   For global import use :

```js
import * as saFormControl from "saformcontrol";
```

-   If you only need a specific method, you can use :

```js
import { allLetter } from "saformcontrol";
```

### You need to know :

The currently available methods are :

-   allNumber
-   maxLength
-   allLetter
-   toCapitalize
-   toPascalCase
-   toLowerCase
-   toUpperCase

All of these methods take a parameter 'element,' which is the selected input. For the 'maxLength' method, you need to add a second parameter, which represents the input size.

eg :

```js
import { maxLength } from "saformcontrol";

// Select an input element
const input = document.querySelector(".input");

// Restricting the size of values that can be entered in this input
maxLength(input, 10);
```
