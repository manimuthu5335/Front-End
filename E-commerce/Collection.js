var ProductContainer = document.getElementById("product");
var Search = document.getElementById("search");
var ProductList = ProductContainer.querySelectorAll("div");

Search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();

    for (count = 0;count<ProductList.length;count=count+1){
        var ProductName =ProductList[count].querySelector("p").textContent;

        if(ProductName.toUpperCase().indexOf(enteredValue)<0){
            ProductList[count].style.display ="none";
        }
        else{
            ProductList[count].style.display ="block";
        }
    }
})
