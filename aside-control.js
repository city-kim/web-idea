
//this sidebar example html
//<aside>
//    <ul>
//        <li onclick="load(this)">menu1</li>
//        <li onclick="load(this)">menu2</li>
//        <li onclick="load(this)">menu3</li>
//        <li onclick="load(this)">menu4</li>
//        <li onclick="load(this)">menu5</li>
//    </ul>
//</aside>

    window.onload = function () {
        sideHolder();
        //window load call sidebar active class
    };

    function load(el) {
        sessionStorage.sideIndex = '';
        // li click event make session storage
        var i;
        var x;
        var aside = el.parentNode.children.length;
        // li length count
        for (i = 0; i < aside; i++)
        // all li tag has reset active class
            el.parentNode.children[i].className = '';
            el.className = 'active';
        // click li tag give active class
    
        for (x = 0; x <aside; x++)
            if(el.parentNode.children[x].className == 'active'){
                sessionStorage.setItem('sideIndex', x);
                break;
        // some li give active class, this put in sessionStorage array index value
            }
    }

    function sideHolder(){
        var holderValue = sessionStorage.getItem('sideIndex');
        // load sessionStorage value
        var hoderList = document.getElementsByTagName('aside')[0].getElementsByTagName('ul')[0];
        hoderList.getElementsByTagName('li')[holderValue].className = 'active';
        // find aside ul li and give active tag standard index value is save sessionStorage value
        // WHY DO : browser refresh, aside list lost active
    }

    function goHome() {
        sessionStorage.removeItem('sideIndex');
        location.href = 'main.html';
        // if main page didn`t have aisde list active, use this
    }
