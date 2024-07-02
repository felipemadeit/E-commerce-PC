document.addEventListener("DOMContentLoaded", function () {

    // Button chat bot
    const btnBot = document.querySelector('.button-chat');
    const windowBot = document.querySelector('.windowBot');
    const closeBtn = document.querySelector('.close-img');

    function unfoldWindow() {
        if (windowBot.style.display == 'none' || windowBot.style.display === '') {
            windowBot.style.display = 'flex';
        } else {
            windowBot.style.display = 'none';
        }
    }

    function closeWindow() {
        windowBot.style.display = 'none';
    }

    btnBot.addEventListener('click', function () {
        unfoldWindow();
    });

    closeBtn.addEventListener('click', function () {
        closeWindow();
    });

    // Function to scroll to the bottom
    function scrollToBottom() {
        var chatContent = document.getElementById("chat-content");
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // Scroll to the bottom initially
    scrollToBottom();

    $(document).ready(function () {
        $('#chat-form').on('submit', function (event) {
            event.preventDefault();

            $.ajax({
                url: '',
                type: 'POST',
                data: {
                    'user_input': $('#user_input').val(),
                    'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function (data) {
                    $('#chat-content').empty();
                    data.chat_messages.forEach(function (message) {
                        $('#chat-content').append('<div class="message ' + message.sender + '">' + message.text + '</div>');
                    });
                    $('#user_input').val('');
                    // Scroll to the bottom after messages are appended
                    scrollToBottom();
                }
            });
        });

        // Use MutationObserver to detect changes in the chat content
        const chatContent = document.getElementById('chat-content');
        const observer = new MutationObserver(scrollToBottom);
        observer.observe(chatContent, { childList: true });
    });
});
