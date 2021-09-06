package com.kgitbank.watcha;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EvaluationViewController {

	@RequestMapping(value = "/EvaluationView", method = RequestMethod.GET)
	public String home(Model model) {		
		/*
		List<Movie> movies = movieMapper.getMovieList();
		
		model.addAttribute("movies", movies);
		*/
		return "EvaluationView";
	}
	

	
}
