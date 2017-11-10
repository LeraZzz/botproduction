'use strict';

module.exports = {

    helloMessage: function helloMessage(tg, message) {
        var text = '❣ Озоновая косметика OZONE BOX ❣️ \n' + '\n' + 'Привет!    ' + '\n' + 'Этот бот поможет быстро узнать всю интересную тебе информацию о косметике Ozone Box  😎' + '\n' + 'Начни с главного меню!';

        var options = {
            "parse_mode": "Markdown",
            "reply_markup": {
                "force_reply": true,
                //"one_time_keyboard": true,
                "resize_keyboard": true,
                // "remove_keyboard": true,

                "keyboard": [[{
                    text: "🔸 Заказать звонок ",

                    request_contact: true
                }, "🔹 Главное меню"]]

            }
        };

        tg.sendMessage(message.chat.id, text, options);
    },

    sendStartMessage: function sendStartMessage(tg, message) {
        var text = '<b> ❣️ Озоновая косметика OZONE BOX ❣️ \n</b>' + '\n' + 'Ну как, остались вопросы? Если да, то скорее заказывай обратный звонок! 😉';

        var catalogButton = {
            text: 'Наши решения  🌟',
            callback_data: 'catalogCmd'

        };

        var FAQButton = {
            text: "FAQ  ❓",
            callback_data: 'FAQCmd'
        };

        var aboutButton = {
            text: "О нас  ⭐️",
            callback_data: 'aboutCmd'
        };

        var principButton = {
            text: "Принцип действия  🌐 ",
            callback_data: 'principCmd'
        };

        var callBackButton = {
            text: "Обратный звонок  ☎",
            callback_data: 'callBackCmd'
        };

        var feedBackButton = {
            text: " Оставить отзыв 😘",
            callback_data: 'feedBackCmd'
        };

        var goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

        };
        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({

                inline_keyboard: [[aboutButton], [principButton], [goToBeforeAfter], [catalogButton], [FAQButton], [callBackButton], [feedBackButton]]
            })
        });
        tg.sendMessage(message.chat.id, text, options);
    },

    sendStartMessage2: function sendStartMessage2(tg, callbackQuery) {
        var text = '<b>Озоновая косметика OZONE BOX \n</b>' + 'Здесь вы можете узнать больше о нашей компании и продукции, посмотреть каталог  косметики и одним кликом купить товар, а также заказать звонок нашего менеджера.\n' + '\n' + '\n';

        var catalogButton = {
            text: 'Наши решения  🌟',
            callback_data: 'catalogCmd'

        };

        var FAQButton = {
            text: "FAQ  ❓",
            callback_data: 'FAQCmd'
        };

        var aboutButton = {
            text: "О нас  ⭐️",
            callback_data: 'aboutCmd'
        };

        var principButton = {
            text: "Принцип действия  🌐 ",
            callback_data: 'principCmd'
        };

        var callBackButton = {
            text: "Обратный звонок  ☎",
            callback_data: 'callBackCmd'
        };

        var goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

        };

        var feedBackButton = {
            text: " Оставить отзыв 😘",
            callback_data: 'feedBackCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({

                inline_keyboard: [[aboutButton], [principButton], [goToBeforeAfter], [catalogButton], [FAQButton], [callBackButton], [feedBackButton]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    }
};