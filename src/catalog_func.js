module.exports = {

    catalogSkin : function (tg, callbackQuery) {

        const text = '🌼️ Комплексные решения <b>Ozone Box</b> для ухода за кожей лица:'+'\n'


        let Button2 = {
            text: ' Комплекс «Безупречно чистая кожа»  ',
            callback_data: 'idealSkinCmd'
        }

        let Button3 = {
            text: 'miniOzoneBox#3 Дневной лайт',
            callback_data: 'mini2Cmd'
        }

        let Button4 = {
            text: 'miniOzoneBox#4 Ночной лайт',
            callback_data: 'mini3Cmd'
        }


        let Button5 = {
            text: 'miniOzoneBox#5 Для сухой и нормальной кожи',
            callback_data: 'mini5Cmd'
        }

        let Button6 = {
            text: 'miniOzoneBox#6 Для комбинированной и жирной кожи',
            callback_data: 'mini6Cmd'
        }

        let Button1 = {
            text: ' 🔙 ',
            callback_data: 'catalogCmd'
        }


        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button2],
                            /* [Button3],
                              [Button4],
                              [Button5],
                              [Button6],
                            */
                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)

    },

    catalogHair: function (tg, callbackQuery) {

        const text = '\n' +'🌸️ Комплексные решения <b>Ozone Box</b> для ухода за волосами: '+'\n'


        let Button1 = {
            text: ' 🔙 ',
            callback_data: 'catalogCmd'
        }

        let Button2 = {
            text: 'Комплекс «Восстановление волос» ',
            callback_data: 'fullHairRecoveryCmd' //goToComplexHair
        }

        let Button3 = {
            text: 'miniOzoneBox#1 Восстановление волос',
            callback_data: 'mini1Cmd'
        }


        let Button4 = {
            text: 'miniOzoneBox#2 Активатор роста волос',
            callback_data: 'mini4Cmd'
        }


        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button2],
                            /* [Button3],
                              [Button4],  */
                            [Button1]

                        ]
                    })
            },
            {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }
        )
        tg.editMessageText(text, options)


    },
    catalogBody: function (tg, callbackQuery) {

        const text =
            '🌺 Комплексные решения <b>Ozone Box</b> для ухода за телом '+'\n'




        let Button1 = {
            text: ' 🔙 ',
            callback_data: 'catalogCmd'
        }

        let Button2 = {
            text: 'Комплекс «Идеальное тело»',
            callback_data: 'idealBodyCmd' //goToComplexBody
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button2],
                            /* [Button3],
                              [Button4],
                              [Button5],
                              [Button6],
                            */
                            [Button1]

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