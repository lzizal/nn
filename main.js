const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.parentElement;
        const coffee = card.querySelector("h3").textContent;
        alert("Вы заказали: " + coffee);
    });
});

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Пожалуйста, введите ваше имя!");
            document.getElementById("name").focus();
            return;
        }

        if (phone === "") {
            alert("Пожалуйста, введите номер телефона!");
            document.getElementById("phone").focus();
            return;
        }

        const phoneRegex = /^(\+7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!phoneRegex.test(phone)) {
            alert("Пожалуйста, введите корректный номер телефона \n Пример: +7 900 123 45 67");
            document.getElementById("phone").focus();
            return;
        }

        if (message === "") {
            alert("Пожалуйста, напишите ваше сообщение!");
            document.getElementById("message").focus();
            return;
        }

        alert(`Спасибо ${name}!\nВаша заявка отправлена.\nМы свяжемся с вами по номеру ${phone} в ближайшее время.`);
        form.reset();
    });
}
