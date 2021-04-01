window.addEventListener("load", function(){
    let orderButton = document.getElementById("order-now");
    if(typeof(orderButton) != 'undefined' && orderButton != null){
        orderButton.addEventListener("click", function() {
            let amount = document.getElementById('amount').value;
            if(amount > 10){
                alert("Sorry, maximaal 10 items per klant!")
            } else if(amount < 1){
                alert("Sorry, je dient minimaal 1 item te bestellen.")
            } else {
                localStorage.setItem('total-order-amount', (15.95*amount));
                window.open('webshop-order.html', '_self');
            }
        });
    }

    let totalPriceElement = document.getElementById("total-amount");
    if(typeof(totalPriceElement) != 'undefined' && totalPriceElement != null){
        let amount = parseFloat(localStorage.getItem('total-order-amount'));
        document.getElementById("total-amount").innerHTML = "&euro;" + " " + amount.toFixed(2);
    }

});