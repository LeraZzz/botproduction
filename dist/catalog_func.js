'use strict';

module.exports = {

    catalogSkin: function catalogSkin(tg, callbackQuery) {

        var text = '❤️💛💚💜💙❤️💛💚💜' + '\n' + '\n' + '❣️ Комплексные решения <b>Ozone Box</b> для ухода за кожей лица:' + '\n'; //+'\n' +


        var Button2 = {
            text: ' 💙 Комплекс «Безупречно чистая кожа»  ',
            callback_data: 'idealSkinCmd'
        };

        var Button3 = {
            text: 'miniOzoneBox#3 Дневной лайт',
            callback_data: 'mini2Cmd'
        };

        var Button4 = {
            text: 'miniOzoneBox#4 Ночной лайт',
            callback_data: 'mini3Cmd'
        };

        var Button5 = {
            text: 'miniOzoneBox#5 Для сухой и нормальной кожи',
            callback_data: 'mini5Cmd'
        };

        var Button6 = {
            text: 'miniOzoneBox#6 Для комбинированной и жирной кожи',
            callback_data: 'mini6Cmd'
        };

        var Button1 = {
            text: ' 🔙 ',
            callback_data: 'catalogCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button2],
                /* [Button3],
                  [Button4],
                  [Button5],
                  [Button6],
                */
                [Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    catalogHair: function catalogHair(tg, callbackQuery) {

        var text = '❤️💛💚💜💙❤️💛💚💜' + '\n' + '\n' + '❣️ Комплексные решения <b>Ozone Box</b> для ухода за волосами:' + '\n';

        var Button1 = {
            text: ' 🔙 ',
            callback_data: 'catalogCmd'
        };

        var Button2 = {
            text: '💜 Комплекс «Полное восстановление волос» ',
            callback_data: 'fullHairRecoveryCmd' //goToComplexHair
        };

        var Button3 = {
            text: 'miniOzoneBox#1 Восстановление волос',
            callback_data: 'mini1Cmd'
        };

        var Button4 = {
            text: 'miniOzoneBox#2 Активатор роста волос',
            callback_data: 'mini4Cmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button2],
                /* [Button3],
                  [Button4],  */
                [Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },
    catalogBody: function catalogBody(tg, callbackQuery) {

        var text = '❤️💛💚💜💙❤️💛💚💜' + '\n' + '\n' + '❣️  ️Комплексные решения <b>Ozone Box</b> для ухода за телом:' + '\n';

        var Button1 = {
            text: ' 🔙 ',
            callback_data: 'catalogCmd'
        };

        var Button2 = {
            text: '💛   Комплекс «Идеальное тело»',
            callback_data: 'idealBodyCmd' //goToComplexBody
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button2],
                /* [Button3],
                  [Button4],
                  [Button5],
                  [Button6],
                */
                [Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    }

};