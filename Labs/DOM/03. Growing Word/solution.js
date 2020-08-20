function growingWord() {

  let px = 8;
  let color = {
    "blue" : "green",
    "green" : "red",
    "red" : "blue"
  }

  let word = document.querySelector('#exercise > p')
  
  if (!word.attributes["style"]) {
    word.setAttribute("style", `color: blue; font-size: ${px}px`)

  } else {
    let newColor = color[word.style["color"]];
    let pixels = word.style["font-size"];
    let newPixels = pixels.substring(0, pixels.length - 2) * 2;
    if (newPixels >= 64) {
      newPixels = 8;
    }

    word.setAttribute("style", 
    `color: ${newColor}; font-size: ${newPixels}px`);

  }

}