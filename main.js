//function for calculating total price
function updateTotalPrice() {
    //Taking extra features cost from input
    const extraMemoryCost = parseInt(document.getElementById("extra-memory-cost").innerText);
    const extraStorageCost = parseInt(document.getElementById("extra-storage-cost").innerText);
    const deliveryCost = parseInt(document.getElementById("delivery-cost").innerText);
    const bestPrice = parseInt(document.getElementById("best-price").innerText);

    //Calculate total price
    const updateTotalPrice = parseInt(extraMemoryCost + extraStorageCost + deliveryCost + bestPrice);
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = updateTotalPrice;
    const finalTotalPrice = document.getElementById("final-total-price");
    finalTotalPrice.innerText = updateTotalPrice;
    //console.log(total);
    return updateTotalPrice;



}

//Coupon Apply
function couponApply() {
    //taking value from user input
    const inputFieldValue = document.getElementById("promo-code");
    const promoCode = (inputFieldValue.value);

    //Calling total price function
    const finalTotalCost = updateTotalPrice();

    //Promo code apply and calculate total price
    if (promoCode == "stevekaku") {
        const parcentageCalculate = parseFloat(finalTotalCost * (20 / 100));
        const afterPromoTotalPrice = parseFloat(finalTotalCost - parcentageCalculate);
        const finalTotalPrice = document.getElementById("final-total-price");
        finalTotalPrice.innerText = (afterPromoTotalPrice);
        document.getElementById("promo-fail").style.display = "none";
    }
    else {
        document.getElementById("promo-fail").style.display = "block";
    }
    inputFieldValue.value = "";

}

////event handler for mac book extra eight GB memory
document.getElementById("eightGB-memory-handler").addEventListener("click", function () {

    const extraMemory = document.getElementById("extra-memory-cost");
    extraMemory.innerText = parseInt("0");
    updateTotalPrice();

});
////event handler for mac book extra sixteen GB memory
document.getElementById("sixteenGB-memory-handler").addEventListener("click", function () {

    const extraMemory = document.getElementById("extra-memory-cost");
    extraMemory.innerText = parseInt("180");
    updateTotalPrice();
});

//event handler for SSD storage-256GB
document.getElementById("SSD-256GB-handler").addEventListener("click", function () {

    const extraStorage = document.getElementById("extra-storage-cost");
    extraStorage.innerText = parseInt("0");
    updateTotalPrice();


});
//event handler for SSD storage-512GB
document.getElementById("SSD-512GB-handler").addEventListener("click", function () {
    const extraStorage = document.getElementById("extra-storage-cost");
    extraStorage.innerText = parseInt("100");
    updateTotalPrice();

});
//event handler for SSD storage-1TB
document.getElementById("SSD-1TB-handler").addEventListener("click", function () {

    const extraStorage = document.getElementById("extra-storage-cost");
    extraStorage.innerText = parseInt("180");
    updateTotalPrice();

});
//event handler for delivery free charge
document.getElementById("delivery-free-cost-handler").addEventListener("click", function () {

    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = parseInt("0");
    updateTotalPrice();


});
//event handler for delivery for $20 
document.getElementById("delivery-charge-cost-handler").addEventListener("click", function () {
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = parseInt("20");
    updateTotalPrice();
});
//event handler for coupon code
document.getElementById("apply-promo-code").addEventListener("click", function () {
    couponApply();
});