// Light Theme Palettes

let palette1 = {
    name: "Soft Sunrise",
    colors: [
        "#FFA726",
        "#FFB74D",
        "#FFCC80",
        "#FFE0B2",
        "#FFF5E1"
    ]
}

let palette2 = {
    name: "Gentle Moonlight",
    colors: [
        "#26C6DA",
        "#4DD0E1",
        "#80DEEA",
        "#B2EBF2",
        "#E0F7FA"
    ]
}

let palette3 = {
    name: "Serene Sky",
    colors: [
        "#B2E0E6",
        "#C4F1F4",
        "#E0F7FA",
        "#E8F9FD",
        "#F0FDFF"
    ]
}

let palette4 = {
    name: "Whispering Breeze",
    colors: [
        "#468FAF",
        "#61A5C2",
        "#89C2D9",
        "#A9D6E5",
        "#D0E8F2"
    ]
}

let palette5 = {
    name: "Delicate Petals",
    colors: [
        "#EC407A",
        "#F06292",
        "#F48FB1",
        "#F8BBD0",
        "#FADADD"
    ]
}

let currentPalette = palette1;

// Switch to Dark Theme
let isLightTheme = true;
const changeThemeBut = document.getElementById('changeTheme');

changeThemeBut.onclick = function () {
    if(isLightTheme){
        // Changing Palette 1 Colors
        palette1.name = "Obsidian Depths"
        palette1.colors[0] = "#C5C6C7"
        palette1.colors[1] = "#66FCF1"
        palette1.colors[2] = "#45A29E"
        palette1.colors[3] = "#1F2833"
        palette1.colors[4] = "#0B0C10"

        // Changing Palette 2 Colors
        palette2.name = "Twilight Huess"
        palette2.colors[0] = "#FFFFFF"
        palette2.colors[1] = "#F5F5F5"
        palette2.colors[2] = "#DA70D6"
        palette2.colors[3] = "#8A2BE2"
        palette2.colors[4] = "#4B0082"

        // Changing Palette 3 Colors
        palette3.name = "Raven's Wing"
        palette3.colors[0] = "#FFFFFF"
        palette3.colors[1] = "#BFBFBF"
        palette3.colors[2] = "#595959"
        palette3.colors[3] = "#2F2F2F"
        palette3.colors[4] = "#000000"

        // Changing Palette 4 Colors
        palette4.name = "Midnight Mirage"
        palette4.colors[0] = "#F4F5F7"
        palette4.colors[1] = "#3AAED8"
        palette4.colors[2] = "#A5ADBB"
        palette4.colors[3] = "#2C2F48"
        palette4.colors[4] = "#1B1F3B"

        // Changing Palette 5 Colors
        palette5.name = "Deep Sea Abyss"
        palette5.colors[0] = "#AEEEEE"
        palette5.colors[1] = "#0059B3"
        palette5.colors[2] = "#004080"
        palette5.colors[3] = "#003366"
        palette5.colors[4] = "#001F3F"

        document.getElementById('changeTheme').innerHTML = "Dark Theme 🌙"

        updateColors();

        // Change Visual Palette Colors
        document.getElementById('color11').style.backgroundColor = palette1.colors[4];
        document.getElementById('color12').style.backgroundColor = palette1.colors[3];
        document.getElementById('color13').style.backgroundColor = palette1.colors[2];
        document.getElementById('color14').style.backgroundColor = palette1.colors[1];
        document.getElementById('color15').style.backgroundColor = palette1.colors[0];

        document.getElementById('color21').style.backgroundColor = palette2.colors[4];
        document.getElementById('color22').style.backgroundColor = palette2.colors[3];
        document.getElementById('color23').style.backgroundColor = palette2.colors[2];
        document.getElementById('color24').style.backgroundColor = palette2.colors[1];
        document.getElementById('color25').style.backgroundColor = palette2.colors[0];

        document.getElementById('color31').style.backgroundColor = palette3.colors[4];
        document.getElementById('color32').style.backgroundColor = palette3.colors[3];
        document.getElementById('color33').style.backgroundColor = palette3.colors[2];
        document.getElementById('color34').style.backgroundColor = palette3.colors[1];
        document.getElementById('color35').style.backgroundColor = palette3.colors[0];

        document.getElementById('color41').style.backgroundColor = palette4.colors[4];
        document.getElementById('color42').style.backgroundColor = palette4.colors[3];
        document.getElementById('color43').style.backgroundColor = palette4.colors[2];
        document.getElementById('color44').style.backgroundColor = palette4.colors[1];
        document.getElementById('color45').style.backgroundColor = palette4.colors[0];

        document.getElementById('color51').style.backgroundColor = palette5.colors[4];
        document.getElementById('color52').style.backgroundColor = palette5.colors[3];
        document.getElementById('color53').style.backgroundColor = palette5.colors[2];
        document.getElementById('color54').style.backgroundColor = palette5.colors[1];
        document.getElementById('color55').style.backgroundColor = palette5.colors[0];

        // Change Shadows
        const squares = document.getElementsByClassName('changeShadow');
        for(let i = 0; i < squares.length; i++){
            squares[i].style.boxShadow = "0 0 10px white";
        }

        const palettes = document.getElementsByClassName('changeShadow2');
        for(let i = 0; i < palettes.length; i++){
            palettes[i].style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.1)";
        }

        isLightTheme = false;
    }

    else{

       // Revert Palette 1 Colors
       palette1.name = "Soft Sunrise"
       palette1.colors[0] = "#FFA726"
       palette1.colors[1] = "#FFB74D"
       palette1.colors[2] = "#FFCC80"
       palette1.colors[3] = "#FFE0B2"
       palette1.colors[4] = "#FFF5E1"

       // Revert Palette 2 Colors
       palette2.name = "Gentle Moonlight"
       palette2.colors[0] = "#26C6DA"
       palette2.colors[1] = "#4DD0E1"
       palette2.colors[2] = "#80DEEA"
       palette2.colors[3] = "#B2EBF2"
       palette2.colors[4] = "#E0F7FA"

       // Revert Palette 3 Colors
       palette3.name = "Serene Sky"
       palette3.colors[0] = "#B2E0E6"
       palette3.colors[1] = "#C4F1F4"
       palette3.colors[2] = "#E0F7FA"
       palette3.colors[3] = "#E8F9FD"
       palette3.colors[4] = "#F0FDFF"

       // Revert Palette 4 Colors
       palette4.name = "Serene Sky"
       palette4.colors[0] = "#468FAF"
       palette4.colors[1] = "#61A5C2"
       palette4.colors[2] = "#89C2D9"
       palette4.colors[3] = "#A9D6E5"
       palette4.colors[4] = "#D0E8F2"

       // Revert Palette 5 Colors
       palette5.name = "Delicate Petals"
       palette5.colors[0] = "#EC407A"
       palette5.colors[1] = "#F06292"
       palette5.colors[2] = "#F48FB1"
       palette5.colors[3] = "#F8BBD0"
       palette5.colors[4] = "#FADADD"

       document.getElementById('changeTheme').innerHTML = "Light Theme ☀️";

       updateColors();

       // Change Visual Palette Colors
       document.getElementById('color11').style.backgroundColor = palette1.colors[0];
       document.getElementById('color12').style.backgroundColor = palette1.colors[1];
       document.getElementById('color13').style.backgroundColor = palette1.colors[2];
       document.getElementById('color14').style.backgroundColor = palette1.colors[3];
       document.getElementById('color15').style.backgroundColor = palette1.colors[4];

       document.getElementById('color21').style.backgroundColor = palette2.colors[0];
       document.getElementById('color22').style.backgroundColor = palette2.colors[1];
       document.getElementById('color23').style.backgroundColor = palette2.colors[2];
       document.getElementById('color24').style.backgroundColor = palette2.colors[3];
       document.getElementById('color25').style.backgroundColor = palette2.colors[4];

       document.getElementById('color31').style.backgroundColor = palette3.colors[0];
       document.getElementById('color32').style.backgroundColor = palette3.colors[1];
       document.getElementById('color33').style.backgroundColor = palette3.colors[2];
       document.getElementById('color34').style.backgroundColor = palette3.colors[3];
       document.getElementById('color35').style.backgroundColor = palette3.colors[4];

       document.getElementById('color41').style.backgroundColor = palette4.colors[0];
       document.getElementById('color42').style.backgroundColor = palette4.colors[1];
       document.getElementById('color43').style.backgroundColor = palette4.colors[2];
       document.getElementById('color44').style.backgroundColor = palette4.colors[3];
       document.getElementById('color45').style.backgroundColor = palette4.colors[4];

       document.getElementById('color51').style.backgroundColor = palette5.colors[0];
       document.getElementById('color52').style.backgroundColor = palette5.colors[1];
       document.getElementById('color53').style.backgroundColor = palette5.colors[2];
       document.getElementById('color54').style.backgroundColor = palette5.colors[3];
       document.getElementById('color55').style.backgroundColor = palette5.colors[4];

       const squares = document.getElementsByClassName('changeShadow');
       for(let i = 0; i < squares.length; i++){
           squares[i].style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
       }

       const palettes = document.getElementsByClassName('changeShadow2');
       for(let i = 0; i < palettes.length; i++){
           palettes[i].style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
       } 

       isLightTheme = true;

    }
}

// Palette Buttons
const paletteBut1 = document.getElementById("colorPalette1");
const paletteBut2 = document.getElementById("colorPalette2");
const paletteBut3 = document.getElementById("colorPalette3");
const paletteBut4 = document.getElementById("colorPalette4");
const paletteBut5 = document.getElementById("colorPalette5");

/* 
Color 0: Headings
    - h1
    - textIcon
Color 1: Active States
    - paragraph
Color 2: Button Backgrounds
    - Theme Changer Button Hover
Color 3: Secondary Backgrounds
    - Button Backgrounds
Color 4: Backgrounds
    - Header Background
    - Footer Background
    - Body Background
    - Palette Container Background
    - Palette Button Background
*/

// Update All Colors
function updateColors() {
    const backgrounds = document.getElementsByClassName('background-colors');
    for (let i = 0; i < backgrounds.length; i++) {
        backgrounds[i].style.transition = "background-color 0.5s ease";
        backgrounds[i].style.backgroundColor = currentPalette.colors[4];
    }
    const secondaryBackgrounds = document.getElementById('changeTheme');
    secondaryBackgrounds.style.transition = "background-color 0.5s ease";
    secondaryBackgrounds.style.backgroundColor = currentPalette.colors[3];
    secondaryBackgrounds.style.color = currentPalette.colors[0];
    secondaryBackgrounds.onmouseover = function () {
        secondaryBackgrounds.style.backgroundColor = currentPalette.colors[2];
    }
    secondaryBackgrounds.onmouseout = function () {
        secondaryBackgrounds.style.backgroundColor = currentPalette.colors[3];
    }
    const activeStates = document.getElementById('active-states');
    activeStates.style.transition = "color 0.5s ease";
    activeStates.style.color = currentPalette.colors[1];
    const heading = document.getElementsByClassName('headings');
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.transition = "color 0.5s ease";
        heading[i].style.color = currentPalette.colors[0];
    }

    document.getElementById('square1').style.transition = "background-color 0.5s ease";
    document.getElementById('square1').style.backgroundColor = currentPalette.colors[4];
    
    document.getElementById('square2').style.transition = "background-color 0.5s ease";
    document.getElementById('square2').style.backgroundColor = currentPalette.colors[3];
    
    document.getElementById('square3').style.transition = "background-color 0.5s ease";
    document.getElementById('square3').style.backgroundColor = currentPalette.colors[2];
    
    document.getElementById('square4').style.transition = "background-color 0.5s ease";
    document.getElementById('square4').style.backgroundColor = currentPalette.colors[1];
    
    document.getElementById('square5').style.transition = "background-color 0.5s ease";
    document.getElementById('square5').style.backgroundColor = currentPalette.colors[0];   
    
    // Name of the Palette
    document.getElementById('paletteName').innerHTML = currentPalette.name;

    // Hover Effect for palettes
    for (let i = 1; i <= 5; i++) {
        const paletteButton = document.getElementById(`colorPalette${i}`);
    
        paletteButton.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    
        paletteButton.onmouseover = function() {
            paletteButton.style.transform = "scale(1.05)";
            if(isLightTheme){
                paletteButton.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            } else {
                paletteButton.style.boxShadow = "0 8px 20px rgba(255, 255, 255, 0.5)";
            }
        }
    
        paletteButton.onmouseout = function() {
            paletteButton.style.transform = "scale(1)";
            paletteButton.style.boxShadow = "none";
        }
    }

}

// Palette Buttons

paletteBut1.onclick = function() {
    currentPalette = palette1;
    updateColors();
}

paletteBut2.onclick = function() {
    currentPalette = palette2;
    updateColors();
}

paletteBut3.onclick = function() {
    currentPalette = palette3;
    updateColors();
}

paletteBut4.onclick = function() {
    currentPalette = palette4;
    updateColors();
}

paletteBut5.onclick = function() {
    currentPalette = palette5;
    updateColors();
}

// Hover



