
const selectIndex = (totalIndex, selectingNumber) => {
    let randomIndexArray = []
    for (i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
      randomNum = Math.floor(Math.random() * totalIndex)
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
      } else { //if the randomNum is already in the array retry
        i--
      }
    }
    return randomIndexArray
}



loadmovies();

function loadmovies(){
	var rl_index = 0; // 전역변수 랜덤 리스트 인덱스
	random_list = selectIndex(40,40); // 0~39의 숫자를 랜덤순서로 가지는 리스트 
	const xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			jsonText= this.responseText;
			get_ue_list()
			createMovies(jsonText, random_list, 0);
			rl_index = rl_index + 20;
			$(window).scroll(function() {
				if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {			      
	    				
						createMovies(jsonText, random_list, rl_index);
						rl_index += 10;		
				    }   				
			})
			
		}
	}
	
	xhttp.open('GET', '/watcha/rest/EvaluationView', true);
	xhttp.send();
}



function createMovies(jsonText, random_list, rl_index) {
	const movies = document.getElementById("movies");
	let json = JSON.parse(jsonText);
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			ex_Text= this.responseText;
			let ex_json = JSON.parse(ex_Text);
			var flag = true;
			if(rl_index == 0){
				for(i=0; i<20; i++){
					flag=true;
					for(j=0; j<ex_json.length; j++){
						if(json[random_list[rl_index]].movie_no == ex_json[j].movie_no){
							flag = false;
							break;			
						}
					}
						if(flag == true){					
						movies.onload = createMovie(json[random_list[rl_index]].movie_link2, json[random_list[rl_index]].movie_name, json[random_list[rl_index]].movie_year)
						console.log(rl_index)						
					}
					rl_index++;
				}
			} else {			
				if(rl_index < random_list.length){
					for(i=0; i<10; i++){
						flag=true;
						for(j=0; j<ex_json.length; j++){
							if(json[random_list[rl_index]].movie_no == ex_json[j].movie_no){
								flag = false;
								break;
							}
						}
						if(flag == true){	
							movies.onload = createMovie(json[random_list[rl_index]].movie_link2, json[random_list[rl_index]].movie_name, json[random_list[rl_index]].movie_year)
							console.log(rl_index)
						}
						rl_index++;
					}
				}
			}
			movie_btn_click(jsonText, random_list);	
			star_mouse_move()
			star_mouse_move2()
			star_mouse_out();
			star_mouse_out2();
			star_mouse_click(jsonText, random_list)
			star_mouse_reclick(jsonText, random_list)
		}
	}
	xhttp.open('GET', '/watcha/rest/get_Exclusion_movie', true);
	xhttp.send();
}
function createMovie(src, name, since){
    const movies = document.getElementById("movies");

    var movie = document.createElement('div')
    var movie_img = document.createElement('img') //
    var movie_info = document.createElement('div') 
    var movie_name = document.createElement('h5') //
    var movie_since = document.createElement('p') //
    var movie_star_body = document.createElement('div')
    var movie_star = document.createElement('div')
    var movie_star1 = document.createElement('div')
    var movie_star2 = document.createElement('div')
    var movie_star3 = document.createElement('div')
    var movie_btn = document.createElement('button')
    
    movie.classList = 'movie';
    movie_img.classList = 'movie_img';
    movie_info.classList = 'movie_info';
    movie_name.classList = 'movie_name';
    movie_since.classList = 'movie_since';
    movie_star_body.classList='movie_star_body';
    movie_star.classList = 'movie_star';
    movie_star1.classList = 'movie_star1';
    movie_star2.classList = 'movie_star2';
    movie_star3.classList = 'movie_star3';
    movie_btn.classList = 'movie_btn';

    movies.appendChild(movie);
    movie.appendChild(movie_img);
    movie_img.src = src;
    movie.appendChild(movie_info);
    movie_info.appendChild(movie_name);
    movie_name.innerHTML = name;
    movie_info.appendChild(movie_since);
    movie_since.innerHTML = since;
    movie_info.appendChild(movie_star_body);
    movie_star_body.appendChild(movie_star);
    movie_star.appendChild(movie_star1);
    movie_star1.innerHTML = '★★★★★';
    movie_star.appendChild(movie_star2);
    movie_star2.innerHTML = '★★★★★';
    movie_star.appendChild(movie_star3);
    movie_star3.innerHTML = '★★★★★';
    movie_info.appendChild(movie_btn);

    movie_btn.innerHTML='<span class="material-icons-outlined">control_point</span>보고싶어요';	
}




function star_mouse_move(){ 
	const movie = document.getElementsByClassName('movie');
    const star = document.getElementsByClassName('movie_star1');
    const star2 = document.getElementsByClassName('movie_star2');
    function movie_enter(index){
        star[index].onmousemove = function(e){
            var target = star[index].getBoundingClientRect();
            var x = e.clientX;
            if(x >= target.x && x < target.x + 17){
                star2[index].style.width = 10 + '%';
            }
            if(x >= target.x + 17 && x < target.x + 34){
                star2[index].style.width = 20 + '%';
            }
            if(x >= target.x + 34 && x < target.x + 51){
                star2[index].style.width = 30 + '%';
            }
            if(x >= target.x + 51 && x < target.x + 68){
                star2[index].style.width = 40 + '%';
            }
            if(x >= target.x + 68 && x < target.x + 85){
                star2[index].style.width = 50 + '%';
            }
            if(x >= target.x + 85 && x < target.x + 102){
                star2[index].style.width = 60 + '%';
            }
            if(x >= target.x + 102 && x < target.x + 119){
                star2[index].style.width = 70 + '%';
            }
            if(x >= target.x + 119 && x < target.x + 136){
                star2[index].style.width = 80 + '%';
            }
            if(x >= target.x + 136 && x < target.x + 153){
                star2[index].style.width = 90 + '%';
            }
            if(x >= target.x + 153 && x < target.x + 170){
                star2[index].style.width = 100 + '%';
            }
            }         
        }     
    for(var i=0; i<movie.length; i++)  {
        movie_enter(i)
    }
}

function star_mouse_move2(){ 
	const movie = document.getElementsByClassName('movie');
	const star = document.getElementsByClassName('movie_star');
    const star2 = document.getElementsByClassName('movie_star2');
    function movie_enter(index){
        star2[index].onmousemove = function(e){
            var target = star[index].getBoundingClientRect();
            var x = e.clientX;
            if(x >= target.x && x < target.x + 17){
                star2[index].style.width = 10 + '%';
            }
            if(x >= target.x + 17 && x < target.x + 34){
                star2[index].style.width = 20 + '%';
            }
            if(x >= target.x + 34 && x < target.x + 51){
                star2[index].style.width = 30 + '%';
            }
            if(x >= target.x + 51 && x < target.x + 68){
                star2[index].style.width = 40 + '%';
            }
            if(x >= target.x + 68 && x < target.x + 85){
                star2[index].style.width = 50 + '%';
            }
            if(x >= target.x + 85 && x < target.x + 102){
                star2[index].style.width = 60 + '%';
            }
            if(x >= target.x + 102 && x < target.x + 119){
                star2[index].style.width = 70 + '%';
            }
            if(x >= target.x + 119 && x < target.x + 136){
                star2[index].style.width = 80 + '%';
            }
            if(x >= target.x + 136 && x < target.x + 153){
                star2[index].style.width = 90 + '%';
            }
            if(x >= target.x + 153 && x < target.x + 170){
                star2[index].style.width = 100 + '%';
            }
            }         
        }     
    for(var i=0; i<movie.length; i++)  {
        movie_enter(i)
    }
}

function star_mouse_out(){ 
	const movie = document.getElementsByClassName('movie');
    const star = document.getElementsByClassName('movie_star1');
    const star2 = document.getElementsByClassName('movie_star2');
    function movie_enter(index){
        star[index].onmouseout = function(){
            star[index].style.width = 0 + '%';
            star2[index].style.width = 0 + '%';
            }         
        }     
    for(var i=0; i<movie.length; i++)  {
        movie_enter(i)
    }
}

function star_mouse_out2(){ 
	const movie = document.getElementsByClassName('movie');
    const star = document.getElementsByClassName('movie_star1');
    const star2 = document.getElementsByClassName('movie_star2');
    function movie_enter(index){
        star2[index].onmouseout = function(){
            star[index].style.width = 0 + '%';
            star2[index].style.width = 0 + '%';
            }         
        }     
    for(var i=0; i<movie.length; i++)  {
        movie_enter(i)
    }
}

function star_mouse_click(jsonText, random_list){ 
	const movie = document.getElementsByClassName('movie');
    const star2 = document.getElementsByClassName('movie_star2');
    const star3 = document.getElementsByClassName('movie_star3');
    const movie_info = document.getElementsByClassName('movie_info');
    function movie_enter(jsonText, random_list, index){
        star2[index].onclick = function(e){
            var target = star2[index].getBoundingClientRect();
			var target_star3 = star3[index].getBoundingClientRect();	
            var x = e.clientX;
			var star_width;	
			if(target_star3.width == 0){
	            if(x >= target.x && x < target.x + 17){
	                star3[index].style.width = 10 + '%';
					star_width = 0.5;
	            }
	            if(x >= target.x + 17 && x < target.x + 34){
	                star3[index].style.width = 20 + '%';
					star_width = 1.0;
	            }
	            if(x >= target.x + 34 && x < target.x + 51){
	                star3[index].style.width = 30 + '%';
					star_width = 1.5;
	            }
	            if(x >= target.x + 51 && x < target.x + 68){
	                star3[index].style.width = 40 + '%';
					star_width = 2.0;
	            }
	            if(x >= target.x + 68 && x < target.x + 85){
	                star3[index].style.width = 50 + '%';
					star_width = 2.5;
	            }
	            if(x >= target.x + 85 && x < target.x + 102){
	                star3[index].style.width = 60 + '%';
					star_width = 3.0;
	            }
	            if(x >= target.x + 102 && x < target.x + 119){
	                star3[index].style.width = 70 + '%';
					star_width = 3.5;
	            }
	            if(x >= target.x + 119 && x < target.x + 136){
	                star3[index].style.width = 80 + '%';
					star_width = 4.0;
	            }
	            if(x >= target.x + 136 && x < target.x + 153){
	                star3[index].style.width = 90 + '%';
					star_width = 4.5;
	            }
	            if(x >= target.x + 153 && x < target.x + 170){
	                star3[index].style.width = 100 + '%';
					star_width = 5.0;
	            }
	            movie_info[index].style.display = 'block';
				add_user_evaluate(jsonText, random_list, index, star_width)
				document.getElementById('count_num').innerHTML = parseInt(document.getElementById('count_num').textContent) + 1
													
            } else {
            	if(x >= target.x && x < target.x + 17){
	                star3[index].style.width = 10 + '%';
					star_width = 0.5;
	            }
	            if(x >= target.x + 17 && x < target.x + 34){
	                star3[index].style.width = 20 + '%';
					star_width = 1.0;
	            }
	            if(x >= target.x + 34 && x < target.x + 51){
	                star3[index].style.width = 30 + '%';
					star_width = 1.5;
	            }
	            if(x >= target.x + 51 && x < target.x + 68){
	                star3[index].style.width = 40 + '%';
					star_width = 2.0;
	            }
	            if(x >= target.x + 68 && x < target.x + 85){
	                star3[index].style.width = 50 + '%';
					star_width = 2.5;
	            }
	            if(x >= target.x + 85 && x < target.x + 102){
	                star3[index].style.width = 60 + '%';
					star_width = 3.0;
	            }
	            if(x >= target.x + 102 && x < target.x + 119){
	                star3[index].style.width = 70 + '%';
					star_width = 3.5;
	            }
	            if(x >= target.x + 119 && x < target.x + 136){
	                star3[index].style.width = 80 + '%';
					star_width = 4.0;
	            }
	            if(x >= target.x + 136 && x < target.x + 153){
	                star3[index].style.width = 90 + '%';
					star_width = 4.5;
	            }
	            if(x >= target.x + 153 && x < target.x + 170){
	                star3[index].style.width = 100 + '%';
					star_width = 5.0;
	            }
	            update_user_evaluate(jsonText, random_list, index, star_width);								
			}
        }
	}		   
    for(var i=0; i<movie.length; i++)  {
		var index = i;
        movie_enter(jsonText, random_list, index)
    } 	
}

function star_mouse_reclick(jsonText, random_list){ 
	const movie = document.getElementsByClassName('movie');
    const star3 = document.getElementsByClassName('movie_star3');
    const movie_info = document.getElementsByClassName('movie_info');
    function movie_enter(jsonText, random_list, index){
        star3[index].onclick = function(){
            star3[index].style.width = 0 + '%';
            movie_info[index].style.display = '';
			delete_user_evaluate(jsonText, random_list, index) 
			document.getElementById('count_num').innerHTML = parseInt(document.getElementById('count_num').textContent) - 1
            }
		 
        }   
    for(var i=0; i<movie.length; i++)  {
		var index = i
        movie_enter(jsonText, random_list, index)
    } 
}




function movie_btn_click(jsonText, random_list){
	const movie = document.getElementsByClassName('movie');
    const movie_btn = document.getElementsByClassName('movie_btn');
    const movie_info = document.getElementsByClassName('movie_info');
    function movie_enter(jsonText, random_list, index){
            movie_btn[index].onclick = function(){
                if(movie_btn[index].style.background == 'rgba(255, 255, 255, 0.2)'){
                    movie_info[index].style.display = '';
                    movie_btn[index].style.background = '';
                    movie_btn[index].firstElementChild.textContent = 'control_point';
					delete_user_choice(jsonText, random_list, index);

                } else {
                    movie_info[index].style.display = 'block';
                    movie_btn[index].style.background = 'rgba(255, 255, 255, 0.2)';
                    movie_btn[index].firstElementChild.textContent = 'check_circle_outline';
					add_user_choice(jsonText, random_list, index);

                }         
            }     
        }
    
    for(var i=0; i<movie.length; i++)  {
		var index = i;
        movie_enter(jsonText, random_list, index);
    }
}

function add_user_choice(jsonText, random_list, index){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log("post");
		}
	}
	let json = JSON.parse(jsonText);
	const user_choice ={
		'user_no' : 1,
		'movie_no' : json[random_list[index]].movie_no
	}
	
	
	xhttp.open('POST', '/watcha/rest/User_Choice', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	
	xhttp.send(JSON.stringify(user_choice));
}

function delete_user_choice(jsonText, random_list, index){
	const xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log("delete")
		}
	}
	
	let json = JSON.parse(jsonText);
	const user_choice ={
		'user_no' : 1,
		'movie_no' : json[random_list[index]].movie_no
	}
	
	
	xhttp.open('POST', '/watcha/rest/delete_User_Choice', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	
	xhttp.send(JSON.stringify(user_choice));
}

function add_user_evaluate(jsonText, random_list, index, star_width){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log("별점add")
		}
	}
	let json = JSON.parse(jsonText);
	const user_evaluate ={
		'user_no' : 1,
		'movie_no' : json[random_list[index]].movie_no,
		'movie_star' : star_width
	}
	
	
	xhttp.open('POST', '/watcha/rest/User_Evaluate', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	
	xhttp.send(JSON.stringify(user_evaluate));
}

function update_user_evaluate(jsonText, random_list, index, star_width){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log("별점update")
		}
	}
	let json = JSON.parse(jsonText);
	const user_evaluate ={
		'user_no' : 1,
		'movie_no' : json[random_list[index]].movie_no,
		'movie_star' : star_width
	}
	
	
	xhttp.open('POST', '/watcha/rest/update_User_Evaluate', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	
	xhttp.send(JSON.stringify(user_evaluate));
}

function delete_user_evaluate(jsonText, random_list, index){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log("별점delete")
		}
	}
	let json = JSON.parse(jsonText);
	const delete_user_evaluate ={
		'user_no' : 1,
		'movie_no' : json[random_list[index]].movie_no,
		'movie_star' : 0
	}
	
	
	xhttp.open('POST', '/watcha/rest/delete_User_Evaluate', true);
	xhttp.setRequestHeader('content-type', 'application/json;charset=utf-8')
	
	xhttp.send(JSON.stringify(delete_user_evaluate));
}

function get_ue_list(){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			console.log("별점리스트 get")
			ue_Text= this.responseText;
			let ue_json = JSON.parse(ue_Text);
			console.log(ue_json)
	        document.getElementById('count_num').innerHTML = ue_json.length 
       		document.getElementById('count_guage').style.width = ue_json.length + '%';
				
		}
	}
	
	xhttp.open('GET', '/watcha/rest/get_User_Evaluate', true);
	xhttp.send();
	
}




