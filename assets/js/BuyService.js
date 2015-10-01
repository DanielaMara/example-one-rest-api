
var BuyService = {
    
    sendInformation: function (callback) 
    {
    	debugger;
        var dadosForm = $("form").serialize();
        alert(dadosForm);
        
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: 'api/buy-service.php',
			dataType: "json",
			data: JSON.stringify(dadosForm),
			
			success: function (result) 
			{
				console.log('Cheguei até aqui!!!! :D');
				callback(result.teste);
			},
			error: function () 
			{
				console.log(':/');
				callback(null);
			}
		});
	}
}