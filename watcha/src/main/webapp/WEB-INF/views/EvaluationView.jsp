<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round"rel="stylesheet">
	<link href="<c:url value="/resources/css/EvaluationView.css" />" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
</head>
<body>
    <div id="warp">
        <div id = "header">
            
        </div>
        <div id ="body_warp">
            <div id = "container">
                <div id = "count_bar">
                    <div id ="count_temp">
                        <p id = "count_num">0</p>
                        <p id = "count_message">오, 정말 많이 보셨네요, 인정합니다!:)</p>
                        <div id = "count_guage_bar"> 
                            <div id = "count_guage"></div>
                        </div>
                    </div>
                    <span id ="analysis_result">WATCHA PEDIA에서 내 취향분석 결과 보기</span>
                </div>
                <div id = "movies">
                </div>
            </div>
        </div>
    </div>
<script src="<c:url value="/resources/js/EvaluationViewXML.js" />" charset="utf-8"></script>

</body>
</html>