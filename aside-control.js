
// 사이드바 html 예시
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
        //그냥 사용하여도 되지만, hashHandler로 내부 content를 바꾸게되면 onload로 제어
    };

    function load(el) {
        sessionStorage.sideIndex = '';
        // li 클릭시에 바로 sessionStorage를 생성
        var i;
        var x;
        var aside = el.parentNode.children.length;
        // li 개수 파악
        for (i = 0; i < aside; i++)
        // 모든 li 태그에서 active 클래스를 지움
            el.parentNode.children[i].className = '';
            el.className = 'active';
        // 클릭시 해당 li 태그만 active클래스를 줌
    
        for (x = 0; x <aside; x++)
            if(el.parentNode.children[x].className == 'active'){
                sessionStorage.setItem('sideIndex', x);
                break;
        // sessionStorage에 li의 array index를 저장함
            }
    }

    function sideHolder(){
        var holderValue = sessionStorage.getItem('sideIndex');
        // sessionStorage의 값을 불러옴
        var hoderList = document.getElementsByTagName('aside')[0].getElementsByTagName('ul')[0];
        hoderList.getElementsByTagName('li')[holderValue].className = 'active';
        // aside의 ul을 불러내어 sessionStorage에 저장된 array 순서만 active 클래스를 줌
        // WHY DO : 브라우저 새로고침시 active 클래스가 사라지는 문제를 방지
    }

    function goHome() {
        sessionStorage.removeItem('sideIndex');
        location.href = 'main.html';
        // 메인페이지에 aside active 클래스가 필요없으면 sessionStorage를 지우면 해결
    }
