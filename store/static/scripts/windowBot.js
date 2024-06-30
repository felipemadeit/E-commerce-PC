document.addEventListener("DOMContentLoaded", function () {

    //Button chat bot
    const btnBot = document.querySelector('.button-chat');
    const windowBot = document.querySelector('.windowBot');

    function unfoldWindow () {
        console.log("hola");
        if(windowBot.style.display == 'none') {
            windowBot.style.display = 'flex';
        } else {
            windowBot.style.display = 'none'
        }
        
    };

    btnBot.addEventListener('click', function () {
        unfoldWindow();
    });

   
})