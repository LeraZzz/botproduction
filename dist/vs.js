'use strict';

module.exports = {

    hairVS: function hairVS(tg, callbackQuery) {
        var text = 'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:' + '<a href="https://pp.userapi.com/c824600/v824600181/1dc6b/0aJfiOURMAU.jpg">&#8205;</a>\n';

        var Button1 = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    skinVS: function skinVS(tg, callbackQuery) {
        var text = 'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>: ' + '<a href="https://pp.userapi.com/c840730/v840730134/200ac/LZYisinMYKg.jpg">&#8205;</a>\n';

        var Button1 = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    bodyVS: function bodyVS(tg, callbackQuery) {
        var text = 'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>: ' + '<a href="https://pp.userapi.com/c840730/v840730134/200a2/WZar-WMPCUI.jpg">&#8205;</a>\n';

        var Button1 = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    }

};