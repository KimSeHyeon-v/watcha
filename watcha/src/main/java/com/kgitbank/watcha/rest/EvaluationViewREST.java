package com.kgitbank.watcha.rest;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgitbank.watcha.mapper.WatchaMapper;
import com.kgitbank.watcha.model.Exclusion_number;
import com.kgitbank.watcha.model.Movie;
import com.kgitbank.watcha.model.User_Choice;
import com.kgitbank.watcha.model.User_Evaluate;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/rest")
public class EvaluationViewREST {
	
	@Autowired
	private WatchaMapper watchaMapper;
	
	@GetMapping(value="/EvaluationView", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Movie> getSampleList(){
		List<Movie> movies = watchaMapper.getMovieList();
		
		return movies;
	}
	
	@PostMapping(value = "/User_Choice", produces = "text/plain;charset=utf-8") // add
	public void add_user_choice(@RequestBody User_Choice uc) {
		watchaMapper.add_user_choice(uc);
	}
	
	@PostMapping(value = "/delete_User_Choice", produces = "text/plain;charset=utf-8")
	public void delete_user_choice(@RequestBody User_Choice uc) {
		watchaMapper.delete_user_choice(uc);
	}
	
	@PostMapping(value = "/User_Evaluate", produces = "text/plain;charset=utf-8") // add
	public void add_user_evaluate(@RequestBody User_Evaluate ue) {
		watchaMapper.add_user_evaluate(ue);
	}
	
	@PostMapping(value = "/update_User_Evaluate", produces = "text/plain;charset=utf-8")
	public void update_user_evaluate(@RequestBody User_Evaluate ue) {
		watchaMapper.update_user_evaluate(ue);
	}
	
	@PostMapping(value = "/delete_User_Evaluate", produces = "text/plain;charset=utf-8")
	public void delete_user_evaluate(@RequestBody User_Evaluate ue) {
		watchaMapper.delete_user_evaluate(ue);
	}
	
	@GetMapping(value="/get_User_Evaluate", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User_Evaluate> get_UE_List(){
		List<User_Evaluate> ueList = watchaMapper.get_UE_list();
		
		return ueList;
	}
	
	@GetMapping(value="/get_Exclusion_movie", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Exclusion_number> get_exMovie_List(){
		List<Exclusion_number> exList = watchaMapper.get_exp_num();
		
		return exList;
	}
	
	
	
}
