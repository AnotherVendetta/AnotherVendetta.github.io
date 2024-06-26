document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');

            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let tg = window.Telegram.WebApp;
    let user_data = tg.initDataUnsafe.user.username + " | id: " + tg.initDataUnsafe.user.id;
    let userDataElement = document.getElementById("user_data");
    if (userDataElement) {
        userDataElement.innerHTML = `<p>${user_data}</p>`;
    }
    tg.expand()
});

document.addEventListener('DOMContentLoaded', function() {
    var sendButtons = document.querySelectorAll('.send-button');
    sendButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var inputField = button.previousElementSibling;
            var inputValue = inputField.value.trim();
            if (inputValue !== '') {
                let tg = window.Telegram.WebApp;
                tg.sendData(inputValue);

                inputField.value = '';
            } else {
                alert('Please enter some text before sending.');
            }
        });
    });
});
