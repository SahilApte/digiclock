const jsDiv = document.getAnimationElementById('dateJS');
const reactDiv = document.getElementById('dateReact');
document.getElementById('dateReact');


const render = () =>
{
    jsDiv.innerHTML= 
    `<div>
        DIGI BIGI
        <input/>
    <p> ${new Date()} </p>
    </div>`

    let divToRender = React.createElement(
        "div",null,"React date",
        React.createElement("input"),
        React.createElement("p",null,new Date().toString())
    )
ReactDom.render(divToRender,reactDiv)
}

setInterval(render,1000);