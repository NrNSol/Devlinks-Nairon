function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    // se conter light mode, adicionar a img light
    img.setAttribute("src", "./assets/lightimg.png")
  } else {
    // se conter sem light mode, manter imagem padrão
    img.setAttribute("src", "./assets/darkimg.png")
  }
}
