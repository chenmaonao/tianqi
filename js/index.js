$(function(){
	
	
	function weather(city){
		
		$.ajax({
				url : "https://api.heweather.net/s6/weather/",
				type : "get",
				data : {
					key:"8348b4718d3d4c79ba3ab39a5c56737b",
					location : city
				},
				success : function(a,b){
					console.log("=====>",a,b)
					var weather_data = a.HeWeather6[0].daily_forecast;
					$("#city-name").text(city);
					console.log(weather_data);
					for(var i = 0;i<weather_data.length;i++){
						if(i==0){
							$(".weather-number").eq(i).text(weather_data[i].tmp_min+"°/"+weather_data[i].tmp_max+"°");
							$("#nowday-cond").text(weather_data[i].cond_txt_d);
							$(".weather-date").eq(i).text(weather_data[i].date);
							$(".weather-img").eq(i).attr("src",weather_img[weather_data[i].cond_txt_d]);
						}else{
							$(".weather-number").eq(i).text(weather_data[i].tmp_min+"°/"+weather_data[i].tmp_max);
							$(".weather-date").eq(i).text(weather_data[i].date);
							$(".weather-img").eq(i).attr("src",weather_img[weather_data[i].cond_txt_d]);
						}
					}
					
				}
			})
		
		
		}

	weather("广州");
	$("#city").on("click",function(){
		$(this).css("float","left");
		$(".search-box").css("display","block")
	})

	$("#search").on("click",function(){
		$("#city").css("float","none");
		
		var city = $("#get-city").val();
		if(!(city == "")){
			weather(city);
		}
		
		$(".search-box").css("display","none");
	})
	
})