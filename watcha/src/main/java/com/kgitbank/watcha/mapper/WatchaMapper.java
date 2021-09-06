package com.kgitbank.watcha.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.kgitbank.watcha.model.Exclusion_number;
import com.kgitbank.watcha.model.Movie;
import com.kgitbank.watcha.model.User_Choice;
import com.kgitbank.watcha.model.User_Evaluate;

public interface WatchaMapper {
	
	@Select("SELECT * FROM movie")
	public List<Movie> getMovieList();
	
	public List<Movie> getMovieList2();
	
	public int add_user_choice(User_Choice uc);
	
	public int delete_user_choice(User_Choice uc);
	
	public int add_user_evaluate(User_Evaluate ue);
	
	public int update_user_evaluate(User_Evaluate ue);
	
	public int delete_user_evaluate(User_Evaluate ue);
	
	public List<User_Evaluate> get_UE_list();
	
	public List<Exclusion_number> get_exp_num();

}
