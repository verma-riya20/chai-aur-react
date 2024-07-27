function customelement(){
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for (const props in reactelement.props) {
        if(props==element) continue;
        domelement.setAttribute(props,reactelement.props[props])
        
    }
    container.appendChild(domelement)
}
const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'

    },
    children:'click me to open google'
}

const element=document.querySelector('#root')
customelement(reactelement,element);