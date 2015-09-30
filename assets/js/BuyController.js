
var BuyController = {
    
    init: function()
    {
        BuyController.setForm();
    },
    
    setForm: function()
    {
        var form = document.querySelector('form');
        form.addEventListener('submit',function(event)
        {
            BuyController.sendForm();
            event.preventDefault();
        });
    },
    
    sendForm: function()
    {
        BuyService.sendInformation(function(callbackService)
        {
            if(callbackService != null)
            {
                console.log(callbackService);
            }
            else
            {
                console.log(':/// error');
            }
        });
    }
}

//inicialização
BuyController.init();