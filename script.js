$(document).ready(function(){
	$('#detect').on('click', function(){
		var data = "";
 
		$('#result').html("<tr><td colspan='6'><center>Now Loading...</center></td></tr>");
		$(this).attr('disabled', 'disabled');
 
		setTimeout(function(){
			$.ajax({
				url: "<a href="https://geoip-db.com/jsonp",
" rel="nofollow">https://geoip-db.com/jsonp",
</a>				jsonpCallback: "callback",
				dataType: "jsonp",
				success: function(location) {
					data = "<tr>"
					+ "<td>"+location.country_name+"</td>"
					+ "<td>"+location.latitude+"</td>"
					+ "<td>"+location.longitude+"</td>"
					+ "</tr>";
 
					$('#result').html(data);
 
				}
			});     
		}, 2000);
	});
});
