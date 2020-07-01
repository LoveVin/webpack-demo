import './x.less'
import './y.styl'
import img from './assets/logo.png'
export default 'I am xxx'

console.log(img);

const div = document.getElementById("app");

div.innerHTML = `
    <img src="${img}">
`

const button = document.createElement("button");
button.innerHTML = "懒加载";
button.onclick = () => {
    const lazyPromise = import('./lazy.js');
    lazyPromise.then((module)=>{
        module.default();
    },()=>{
        console.log("模块加载错误");
    })
}

div.appendChild(button);