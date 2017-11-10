module.exports = {

    helloMessage: function (tg, message) {
        let text = '❣ Озоновая косметика OZONE BOX ❣️ \n' +
            '\n' +
            'Привет!    ' + '\n' +
            'Этот бот поможет быстро узнать всю интересную тебе информацию о косметике Ozone Box  😎' + '\n'+
            'Начни с главного меню!'


        let options = {
            "parse_mode": "Markdown",
            "reply_markup": {
                "force_reply": true,
                //"one_time_keyboard": true,
                "resize_keyboard": true,
                // "remove_keyboard": true,

                "keyboard":
                    [
                       [{
                    text: "🔸 Заказать звонок ",

                    request_contact: true
                }, "🔹 Главное меню" ]]

            }
        }

        tg.sendMessage(message.chat.id, text, options)

    },

    sendStartMessage: function (tg, message) {
        let text = '<b> ❣️ Озоновая косметика OZONE BOX ❣️ \n</b>' + '\n'+

            'Ну как, остались вопросы? Если да, то скорее заказывай обратный звонок! 😉'


        let catalogButton = {
            text: 'Наши решения  🌟',
            callback_data: 'catalogCmd'

        }

        let FAQButton = {
            text: "FAQ  ❓",
            callback_data: 'FAQCmd'
        }

        let aboutButton = {
            text: "О нас  ⭐️",
            callback_data: 'aboutCmd'
        }

        let principButton = {
            text: "Принцип действия  🌐 ",
            callback_data: 'principCmd'
        }


        let callBackButton = {
            text: "Обратный звонок  ☎",
            callback_data: 'callBackCmd'
        }


        let feedBackButton = {
            text: " Оставить отзыв 😘",
            callback_data: 'feedBackCmd'
        }

        let goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

        }
        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {

                        inline_keyboard: [
                            [aboutButton],
                            [principButton],
                            [goToBeforeAfter],
                            [catalogButton],
                            [FAQButton],
                            [callBackButton],
                            [feedBackButton]
                        ]
                    })
            })
        tg.sendMessage(message.chat.id, text, options)
    },


    sendStartMessage2: function (tg, callbackQuery) {
        let text = '<b>Озоновая косметика OZONE BOX \n</b>' +
            'Здесь вы можете узнать больше о нашей компании и продукции, посмотреть каталог  косметики и одним кликом купить товар, а также заказать звонок нашего менеджера.\n' +
            '\n' +
            '\n'


        let catalogButton = {
            text: 'Наши решения  🌟',
            callback_data: 'catalogCmd'

        }

        let FAQButton = {
            text: "FAQ  ❓",
            callback_data: 'FAQCmd'
        }

        let aboutButton = {
            text: "О нас  ⭐️",
            callback_data: 'aboutCmd'
        }

        let principButton = {
            text: "Принцип действия  🌐 ",
            callback_data: 'principCmd'
        }


        let callBackButton = {
            text: "Обратный звонок  ☎",
            callback_data: 'callBackCmd'
        }

        let goToBeforeAfter = {
            text: 'До/После   🙀😻',
            callback_data: 'goToBeforeAfterCmd'

        }

        let feedBackButton = {
            text: " Оставить отзыв 😘",
            callback_data: 'feedBackCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {

                        inline_keyboard: [
                            [aboutButton],
                            [principButton],
                            [goToBeforeAfter],
                            [catalogButton],
                            [FAQButton],
                            [callBackButton],
                            [feedBackButton]
                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)
    }
}