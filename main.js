const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        const card = button.parentElement;
        const coffee = card.querySelector("h3").textContent;
        alert("Вы заказали: " + coffee);
    });
});

const form = document.getElementById("contact-form");

if(form){
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById("name").value;
        alert(
            "Спасибо за заявку, " + name + "!"
        );
        form.reset();
    });
}