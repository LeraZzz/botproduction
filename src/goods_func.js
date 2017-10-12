module.exports = {
    goToComplexFace1: function(tg, callbackQuery) {
        let text ='<a href="https://pp.userapi.com/c840029/v840029915/3131b/OvhnYQmUWe8.jpg">&#8205;</a>'+
            '<b>Комплекс\n'+'«Безупречно чистая кожа»\n</b>' +
            '<b>3 990 руб\n</b>' +
            '\n'+

            'Подарите себе профессиональный ритуал красоты «Безупречно чистая кожа», разработанный нашими учѐными. OzoneBox для лица – профессиональный уход для лица, одобренный Российской Ассоциацией Озонотерапевтов. В составе нет силиконов, сульфатов и альдегидов. Не вызывает привыкания, побочных эффектов или аллергии, поскольку не содержит гормонов.\n' +
            '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Озоновый крем дневной. Экспресс-уход. PV 500 (50 мл)\n' +
            '• Озоновый крем ночной. Релакс. PV 500 (50 мл)\n' +
            '• Озонированное масло ОТРИ® 6 000 (25 мл)\n' +
            '• Инструкция по применению'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyComplexFaceCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1],
                            [Button4]
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

    goToComplexHair1: function(tg, callbackQuery) {
        let text ='<a href="https://pp.userapi.com/c639229/v639229915/4b521/SbRdYbAC6mg.jpg">&#8205;</a>'+
            '<b>Комплекс\n'+'«Полное восстановление волос»\n</b>' +
            '<b>3 490 руб\n</b>'+
            '\n'+
            '\n'+
            '100% натуральные, кислородные маски для восстановления и питания поврежденных волос и активация роста. Это абсолютно новая технология, которая позволяет восстанавливать волосы на молекулярном уровне после любых ХИМИЧЕСКИХ, ТЕРМИЧЕСКИХ и МЕХАНИЧЕСКИХ воздействий.\n' +
            '\n' +
            'После первого применения Вы получите следующий результат: волосы не выпадают, становятся более густыми и объемными, насыщаются кислородом. Волосы наполняются и лечатся изнутри. Маски одобрены Ассоциацией Российских Озонотерапевтов и Ассоциацией трихологов.\n' +
            '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Озоновая маска для волос. Восстанавливает структуру волос. PV 1000 (150 мл)\n' +
            '• Маска для волос. Озоновый активатор роста. PV 500 (150 мл)\n' +
            '• Инструкция по применению'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }
        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyComplexHairCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1],
                            [Button4]
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
    goToComplexBody1: function(tg, callbackQuery) {
        let text ='<a href="https://pp.userapi.com/c841329/v841329915/2c618/musFmv9AFsE.jpg">&#8205;</a>'+
            '<b>Комплекс\n'+ '«Идеальное тело»\n</b>' +
            '<b>4 590 руб\n</b>' +
            '\n'+

             'Комплекс, который разработан нашими учеными для лечения целлюлита и устранения растяжек, а не для уменьшения их проявлений. Уникальный комплекс озонидов заметно улучшает состояние кожи, уменьшает эффект «апельсиновой корки». Применение озон-крема усиливает лимфодренаж и выделение жидкости из тканей, что способствует быстрой потере объемов и снижению веса. При регулярном применении озон-крем улучшает тонус кожи, придаѐт ей эластичность и бархатистость.\n' +
            '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Озон-крем антицеллюлитный. PV 3 000 (125 мл)\n' +
            '• Озон-крем от растяжек. PV 3 000 (125 мл)\n' +
            '• Озонированное масло ОТРИ® 12 000 (25 мл)\n' +
            '• Инструкция по применению'


        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyComplexBodyCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [

                            [Button1],
                            [Button4]
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