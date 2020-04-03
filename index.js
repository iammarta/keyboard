window.addEventListener("DOMContentLoaded", () => {

    // create input area
    const keyboard_input = document.createElement("textarea");
    const keyboard_input_wrapper = document.createElement("div");
    keyboard_input_wrapper.classList.add("keyboard-input-wrapper");
    keyboard_input.classList.add("keyboard-input");
    keyboard_input_wrapper.appendChild(keyboard_input);
    document.body.appendChild(keyboard_input_wrapper);

    //create keyboard area
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    document.body.appendChild(keyboard);

    //create keyboard elements
    let keyboardElements = [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete"],
        ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
        ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ArrowUp", "Shift"],
        ["Control", "Meta", "Alt", " ", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"]
    ];

    let ukr = [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї", "\\", "Delete"],
        ["CapsLock", "ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є", "Enter"],
        ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "ArrowUp", "Shift"],
        ["Control", "Meta", "Alt", " ", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Control"]
    ];

    let special = ["~", "!", "@","#","$","%","^","&","*","(",")","_","+","Backspace"];
    

    //add english keyboard elements to DOM
function keyboardDomEng(keyboardElements){
    for (let i = 0; i < keyboardElements.length; i++) {
        let keyboardRow = document.createElement("div");
        keyboard.appendChild(keyboardRow);
        keyboardRow.classList.add("keyboard-row");
        for (let j = 0; j < keyboardElements[i].length; j++) {
            const keyboardItem = document.createElement("button");
            keyboardItem.setAttribute("type", "button");
            keyboardItem.classList.add("keyboard-item");
            keyboardItem.classList.add("eng");
            keyboardItem.value = keyboardElements[i][j];
            keyboardItem.placeholder = keyboardElements[i][j];
            keyboardItem.textContent = keyboardItem.value;
            keyboardRow.appendChild(keyboardItem);
            keyboardItem.addEventListener("click", () => {
                let str = keyboardItem.value;
                keyboard_input.value += str;
            
            });
        }
    }
}
keyboardDomEng(keyboardElements);

 //add ukrainian keyboard elements to DOM
function keyboardDomUkr(keyboardElements){
    for (let i = 0; i < keyboardElements.length; i++) {
        let keyboardRow = document.createElement("div");
        keyboard.appendChild(keyboardRow);
        keyboardRow.classList.add("keyboard-row");
        for (let j = 0; j < keyboardElements[i].length; j++) {
            const keyboardItem = document.createElement("button");
            keyboardItem.setAttribute("type", "button");
            keyboardItem.classList.add("keyboard-item");
            keyboardItem.classList.add("ukr");
            keyboardItem.value = keyboardElements[i][j];
            keyboardItem.placeholder = keyboardElements[i][j];
            keyboardItem.textContent = keyboardItem.value;
            keyboardRow.appendChild(keyboardItem);
            keyboardItem.addEventListener("click", () => {
                let str = keyboardItem.value;
                keyboard_input.value += str;
            
            });
        }
    }
}
keyboardDomUkr(ukr);


// switch the language
let ukrK = document.querySelectorAll(".ukr");
let engK = document.querySelectorAll(".eng");
        document.onkeydown = function(e) {
            e = e || window.event;
            if (e.shiftKey && e.keyCode == 85) {
     [...ukrK].forEach(elem=> elem.style.display="inline-flex");
     [...engK].forEach(elem=> elem.style.display="none");
     spaceStyles(ukrK);
     alt(ukrK);
     control(ukrK);
     shift(ukrK);
     enterb(ukrK);
     backspace(ukrK);
     del(ukrK);
     icons(ukrK);
     win(ukrK);
     tab(ukrK);
     caps(ukrK);
        }   if (e.shiftKey && e.keyCode == 69){
            [...engK].forEach(elem=> elem.style.display="inline-flex");
            [...ukrK].forEach(elem=> elem.style.display="none");
            spaceStyles(engK);
            alt(engK);
            control(engK);
            shift(engK);
            enterb(engK);
            backspace(engK);
            del(engK);
            icons(engK);
            win(engK);
            tab(engK);
            caps(engK);
        }
        if(e.keyCode == 20){
            function CapsKey(a){
                    [...a].forEach(elem => {
                        elem.classList.toggle("caps-lock");
                        elem.classList.contains("caps-lock") ? elem.value = elem.value.toLowerCase() : elem.value = elem.value.toUpperCase();

            });
        }
        CapsKey(engK);
        CapsKey(ukrK);
    }
};

let item = document.getElementsByClassName("keyboard-item");

        //create styles and functionality for space tab
        function spaceStyles(a = engK){
        const space = [...a].filter((elem) => elem.value == " ");
        space[0].classList.add("space-extra-wide");
        const spaceBTN = () => {
            space[0].value = "";
            return keyboard_input.value += "";
        };
        space[0].addEventListener("click", spaceBTN);
        }
        spaceStyles();
  

    //create styles for active buttons
    [...item].forEach((elem) => {
        elem.addEventListener("click", activeClass);
    });

    function activeClass() {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            setTimeout(() => {
                this.classList.remove("active");
            }, 400);
        }
    }

    //Caps Lock
    function caps(a = engK){
        const capsLock = [...a].filter((elem) => elem.value == "CapsLock");
    const capsBTN = () => {
        [...a].forEach(elem => {
            elem.classList.toggle("caps-lock");
            elem.classList.contains("caps-lock") ? elem.value = elem.value.toUpperCase() : elem.value = elem.value.toLowerCase();
        });
    };
    capsLock[0].addEventListener("click", capsBTN);
    capsLock[0].value = "";
}
caps();

    //Tab
    function tab(a = engK){
        const tab = [...a].filter((elem) => elem.value == "Tab");
    const tabBTN = () => {
        return keyboard_input.value += "   ";
    };
    tab[0].addEventListener("click", tabBTN);
    tab[0].value = "";
}
tab();

    //Shift
    function shift(a = engK){
    const shift = [...a].filter((elem) => elem.value == "Shift");
    [...shift].forEach((elem) => {
        elem.value = "";
    });
    }
shift();



    //CTRL
    function control(a = engK){
    const ctrl = [...a].filter((elem) => elem.value == "Control");
    [...ctrl].forEach(elem => {
        elem.value = "";
        elem.addEventListener("click", ctrlBTN);

        function ctrlBTN() {
            return keyboard_input.value += "";
        }
    });
}
control();

    //Win
    function win(a = engK){
    const win = [...a].filter((elem) => elem.value == "Meta");
    const winBTN = () => {
        return keyboard_input.value += "";
    };
    win[0].addEventListener("click", winBTN);
    win[0].value = "";
}
win();

    //Alt
    function alt(a = engK){
    const alt = [...a].filter((elem) => elem.value == "Alt");
    [...alt].forEach(elem => {
        elem.value = "";
        elem.addEventListener("click", altBTN);

        function altBTN() {
            return keyboard_input.value += "";
        }
    });
}
alt();

    //Enter
    function enterb(a = engK){
        const enter = [...a].filter((elem) => elem.value == "Enter");
    const enterBTN = () => {
        return keyboard_input.value += "\n";
    }
    enter[0].addEventListener("click", enterBTN);
    enter[0].value = "";
}
enterb();

    //Backspace
    function backspace(a = engK){
    const backspace = [...a].filter((elem) => elem.value == "Backspace");
    const backspaceBTN = () => {
        return keyboard_input.value = keyboard_input.value.substr(0, keyboard_input.value.length - 1);
    }
    backspace[0].addEventListener("click", backspaceBTN);
    backspace[0].value = "";
    }
    backspace();

    //Del
    function del(a = engK){
        const del = [...a].filter((elem) => elem.value == "Delete");
    const delBTN = () => {
        return keyboard_input.value = keyboard_input.value.substr(0, keyboard_input.value.length - 1);
    }
    del[0].addEventListener("click", delBTN);
    del[0].value = "";
}
del();

    //create icons
    const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
    };
function icons(a = engK){
    const left = [...a].filter((elem) => elem.value == "ArrowLeft");
    const right = [...a].filter((elem) => elem.value == "ArrowRight");
    const down = [...a].filter((elem) => elem.value == "ArrowDown");
    const up = [...a].filter((elem) => elem.value == "ArrowUp");

    const leftBTN = () => {
        left[0].innerHTML = createIconHTML("keyboard_arrow_left");
        left[0].value = "";
    };
    leftBTN();

    const rightBTN = () => {
        right[0].innerHTML = createIconHTML("keyboard_arrow_right");
        right[0].value = "";
    };
    rightBTN();

    const downBTN = () => {
        down[0].innerHTML = createIconHTML("keyboard_arrow_down");
        down[0].value = "";
    };
    downBTN();

    const upBTN = () => {
        up[0].innerHTML = createIconHTML("keyboard_arrow_up");
        up[0].value = "";
    };
    upBTN();
}
icons();

//active styles when click
document.addEventListener('keydown', (e) => {
    let element = [...item].filter((elem) => e.key == elem.placeholder);
    element.forEach(elem => elem.style.backgroundColor = "#e4e4e4");
});

// remove active styles after click
document.addEventListener('keyup', (e) => {
    let element = [...item].filter((elem) => e.key == elem.placeholder);
    element.forEach(elem => elem.style.backgroundColor = "");
});



//create instructions area
const instructions = document.createElement("div");
var para1 = document.createElement("P"); 
var para2 = document.createElement("P"); 
const t1 = document.createTextNode("UKR lang: Shift + U");
const t2 = document.createTextNode("ENG lang: Shift + E");
instructions.classList.add("instructions");
document.body.appendChild(instructions);
para1.appendChild(t1);
para2.appendChild(t2);
instructions.appendChild(para1);
instructions.appendChild(para2);


let iSmile = document.createElement('i');
iSmile.className = 'material-icons smile';
let iconSmile = document.createTextNode('emoji_emotions');
iSmile.appendChild(iconSmile);
document.body.appendChild(iSmile);


let iClose = document.createElement('i');
iClose.className = 'material-icons close';
let iconClose = document.createTextNode('close');
iClose.appendChild(iconClose);
instructions.appendChild(iClose);

let smile = document.querySelector(".smile");
smile.addEventListener("click",()=>{
    instructions.style.display="block"
}
);                                                                                                         
let close = document.querySelector(".close");
close.addEventListener("click",()=>{
    instructions.style.display="none"
}
);
});
