
var BuyService = {
    
    sendInformation: function (callback) 
    {
        var dadosForm = $("form").serialize();
        
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: 'api/buy-service.php',
			dataType: "json",
			data: JSON.stringify(dadosForm),
			
			success: function (result) 
			{
				console.log('Cheguei até aqui!!!! :D');
				callback(result);
			},
			error: function () 
			{
				console.log(':/');
				callback(null);
			}
		});
	}
}