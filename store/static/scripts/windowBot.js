document.addEventListener("DOMContentLoaded", function () {

    //Button chat bot
    const btnBot = document.querySelector('.button-chat');
    const windowBot = document.querySelector('.windowBot');
    const closeBtn = document.querySelector('.close-img');

    function unfoldWindow () {
        console.log("hola");
        if(windowBot.style.display == 'none' || windowBot.style.display === '') {
            windowBot.style.display = 'flex';
        } else {
            windowBot.style.display = 'none'
        }
        
    };

    function closeWindow () {
        windowBot.style.display = 'none';
    }

    btnBot.addEventListener('click', function () {
        unfoldWindow();
    });

    closeBtn.addEventListener('click', function() {
        closeWindow();
    })

   
})