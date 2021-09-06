const star = document.getElementsByClassName('movie_star1');
const star2 = document.getElementsByClassName('movie_star2');
const star3 = document.getElementsByClassName('movie_star3');
const movie_btn = document.getElementsByClassName('movie_btn');
const movie_info = document.getElementsByClassName('movie_info');
const movie = document.getElementsByClassName('movie');
var counting = new Set;

$(movie).mouseenter(function(){
    var index = $(this).index()
    $(movie_btn[index]).click(function(){
        movie_info[index].style.display = 'block';
        movie_btn[index].style.background = 'rgba(255, 255, 255, 0.2)';
        movie_btn[index].firstElementChild.textContent = 'check_circle_outline'
    })
})

$(movie).mouseenter(function(){
    var index = $(this).index()
    if(movie_btn[index].style.background == 'rgba(255, 255, 255, 0.2)'){
        $(movie_btn[index]).click(function(){
            movie_info[index].style.display = '';
            movie_btn[index].style.background = '';
            movie_btn[index].firstElementChild.textContent = 'control_point'
        })
    }  
})


/*
$("button").click(function(){ 
	var index = $(this).index()
    console.log(index)
})
*/


for (var i = 0; i< star.length; i++){
    star[i].setAttribute('onmouseover', 'show()')
    star[i].setAttribute('onmousemove', 'showCoords(event)')
    star2[i].setAttribute('onmouseover', 'show2()')
    star2[i].setAttribute('onmousemove', 'showCoords2(event)')
    star[i].setAttribute('onmouseout', 'out()')
    star2[i].setAttribute('onmousedown', 'down()')
    star3[i].setAttribute('onmousedown', 'down3()')
    star3[i].setAttribute('onmouseover', 'show3()')  
}

function show(){
    var info = {};
    for (var i = 0; i< star.length; i++){
        var target = star[i].getBoundingClientRect();
        if(target.x != 0){
            var index = i;
            var x = target.x;
            info = {index, x}
        }
    }
    return info;
}

function show2(){
    var info = {};
    for (var i = 0; i< star2.length; i++){
        var target = star2[i].getBoundingClientRect();
        if(target.x != 0){
            var index = i;
            var x = target.x;
            var w = target.width;
            info = {index, x, w}
        }
    }
    return info;
}

function show3(){
    var info = {};
    for (var i = 0; i< star3.length; i++){
        var target = star3[i].getBoundingClientRect();
        if(target.x != 0){
            var index = i;
            var x = target.x;
            var w = target.width;
            info = {index, x, w}
        }
    }
    return info;
}


function showCoords(event){
    var info = show();
    var x = event.clientX;
    if(x >= info.x && x < info.x + 17){
        star2[info.index].style.width = 10 + '%';
    }
    if(x >= info.x + 17 && x < info.x + 34){
        star2[info.index].style.width = 20 + '%';
    }
    if(x >= info.x + 34 && x < info.x + 51){
        star2[info.index].style.width = 30 + '%';
    }
    if(x >= info.x + 51 && x < info.x + 68){
        star2[info.index].style.width = 40 + '%';
    }
    if(x >= info.x + 68 && x < info.x + 85){
        star2[info.index].style.width = 50 + '%';
    }
    if(x >= info.x + 85 && x < info.x + 102){
        star2[info.index].style.width = 60 + '%';
    }
    if(x >= info.x + 102 && x < info.x + 119){
        star2[info.index].style.width = 70 + '%';
    }
    if(x >= info.x + 119 && x < info.x + 136){
        star2[info.index].style.width = 80 + '%';
    }
    if(x >= info.x + 136 && x < info.x + 153){
        star2[info.index].style.width = 90 + '%';
    }
    if(x >= info.x + 153 && x < info.x + 170){
        star2[info.index].style.width = 100 + '%';
    }
    
}

function showCoords2(event){
    var info = show2();
    var x = event.clientX; 

    if(x >= info.x && x < info.x + 17){
        star2[info.index].style.width = 10 + '%';
    }
    if(x >= info.x + 17 && x < info.x + 34){
        star2[info.index].style.width = 20 + '%';
    }
    if(x >= info.x + 34 && x < info.x + 51){
        star2[info.index].style.width = 30 + '%';
    }
    if(x >= info.x + 51 && x < info.x + 68){
        star2[info.index].style.width = 40 + '%';
    }
    if(x >= info.x + 68 && x < info.x + 85){
        star2[info.index].style.width = 50 + '%';
    }
    if(x >= info.x + 85 && x < info.x + 102){
        star2[info.index].style.width = 60 + '%';
    }
    if(x >= info.x + 102 && x < info.x + 119){
        star2[info.index].style.width = 70 + '%';
    }
    if(x >= info.x + 119 && x < info.x + 136){
        star2[info.index].style.width = 80 + '%';
    }
    if(x >= info.x + 136 && x < info.x + 153){
        star2[info.index].style.width = 90 + '%';
    }
    if(x >= info.x + 153 && x < info.x + 170){
        star2[info.index].style.width = 100 + '%';
    }

    return x
}

function out(){
    var info = show2();
    star2[info.index].style.width = 0 + '%';

    
}


function down(){
    var info = show2();
    star2[info.index].onclick = click();
 

}

function down3(){
    var info = show3();
    star3[info.index].onclick = reclick()

}

function click(){
    var count = 0;
    var info = show3();
    var x = showCoords2(event);
  
    if(x >= info.x && x < info.x + 17){
        star3[info.index].style.width = 10 + '%';
    }
    if(x >= info.x + 17 && x < info.x + 34){
        star3[info.index].style.width = 20 + '%';
    }
    if(x >= info.x + 34 && x < info.x + 51){
        star3[info.index].style.width = 30 + '%';
    }
    if(x >= info.x + 51 && x < info.x + 68){
        star3[info.index].style.width = 40 + '%';
    }
    if(x >= info.x + 68 && x < info.x + 85){
        star3[info.index].style.width = 50 + '%';
    }
    if(x >= info.x + 85 && x < info.x + 102){
        star3[info.index].style.width = 60 + '%';
    }
    if(x >= info.x + 102 && x < info.x + 119){
        star3[info.index].style.width = 70 + '%';
    }
    if(x >= info.x + 119 && x < info.x + 136){
        star3[info.index].style.width = 80 + '%';
    }
    if(x >= info.x + 136 && x < info.x + 153){
        star3[info.index].style.width = 90 + '%';
    }
    if(x >= info.x + 153 && x < info.x + 170){
        star3[info.index].style.width = 100 + '%';
    }
    
    movie_info[info.index].style.display = 'block'
    counting.add(info.index)
    document.getElementById('count_num').innerHTML = counting.size
    document.getElementById('count_guage').style.width = counting.size + '%';
    

}

function reclick(){
    var info = show3();
    star3[info.index].style.width = 0 + '%';

    movie_info[info.index].style.display = ''
    counting.delete(info.index)
    document.getElementById('count_num').innerHTML = counting.size
    document.getElementById('count_guage').style.width = counting.size + '%';
}
