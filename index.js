//1) Fill all input with only number
export const allNumber = (el) => {
    el.addEventListener("input", (e) => {
        e.preventDefault();
        const selectionStart = el.selectionStart;
        el.value = el.value.replace(/[^0-9]/g, "");
        el.setSelectionRange(selectionStart, selectionStart);
    });
};

//2) Limit the length of an input
export const maxLength = (el, maxLength) => {
    el.addEventListener("input", (e) => {
        e.preventDefault();
        const selectionStart = el.selectionStart;
        if (el.value.length >= maxLength) {
            el.value = el.value.slice(0, maxLength);
        }
        el.setSelectionRange(selectionStart, selectionStart);
    });
};

//3) Fill all input with only letter
export const allLetter = (el) => {
    el.addEventListener("input", (e) => {
        e.preventDefault();
        const selectionStart = el.selectionStart;
        el.value = el.value.replace(/[^a-zA-Z]/g, "");
        el.setSelectionRange(selectionStart, selectionStart);
    });
};

//4) Capitalize an input
export const toCapitalize = (el) => {
    el.addEventListener("input", (e) => {
        e.preventDefault();
        const selectionStart = el.selectionStart;
        el.value = el.value.toUpperCase();
        el.setSelectionRange(selectionStart, selectionStart);
    });
};

//5) To PascalCase
export const toPascalCase = (el) => {
    el.addEventListener("input", (e) => {
        e.preventDefault();
        let newValue = "";
        const selectionStart = el.selectionStart;
        if (el.value.length > 0 && el.value.length <= 1)
            el.value = el.value.toUpperCase();
        if (el.value[el.value.length - 2] === " ") {
            newValue =
                el.value.slice(0, el.value.length - 1) +
                el.value
                    .slice(el.value.length - 1, el.value.length)
                    .toUpperCase();
            el.value = newValue;
        }
        el.setSelectionRange(selectionStart, selectionStart);
    });
};
