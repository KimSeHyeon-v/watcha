package com.kgitbank.watcha.model;

import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class Movie {
	
	@NonNull
	private String movie_no;
	private String movie_name;
	private String movie_genre;
	private String movie_country;
	private String movie_age_rating;
	private String movie_year;
	private String movie_time;
	private String movie_average;
	private String movie_link1;
	private String movie_link2;
	private String movie_content;
	
}
