import './x.less'
import './y.styl'
import img from './assets/logo.png'
export default 'I am xxx'

console.log(img);

const div = document.getElementById("app");

div.innerHTML = `
    <img src="${img}">
`