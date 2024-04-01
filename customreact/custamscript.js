   function maincointainer (clement , container){
     const main = document.createElement(clement.type)
     
     main.innerHTML = clement.childen;
    main.setAttribute('href', clement.props.herf);
    main.setAttribute('target', clement.props.target);
   container.appendChild(main);      
   }

const reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    childen:"click to google"
}

const mainarrri = document.querySelector('#root');
maincointainer(reactelement,mainarrri)  // this are foundations 