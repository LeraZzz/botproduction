module.exports = {

    goToComplexFace1: function(tg, callbackQuery) {

        let text = '<b> Комплекс\n'+'«Безупречно чистая кожа»\n</b>' +

            '\n'+

            'Подарите себе профессиональный ритуал красоты «Безупречно чистая кожа», разработанный нашими учѐными. OzoneBox для лица – профессиональный уход для лица, одобренный Российской Ассоциацией Озонотерапевтов и Дерматологами.. ' +
            '\n'+
            ' Благодаря уникальному составу нашей косметики, в основе которой ' +
            'находятся озониды (активные формы кислорода), комплекс работает на ' +
            'клеточном уровне и действует немедленно после нанесения, тем самым: \n'+
            '<b>• стимулируется кровоснабжение;\n' +
            '• усиливает и нормализует обменные процессы;\n' +
            '• активизирует выработку коллагена и гиалуроновой кислоты, кожа\n' +
            'насыщается полезными веществами и влагой;\n' +
            '• успокаивает воспалительные процессы и их последствия;\n' +
            '• разглаживает мимические морщинки изнутри. </b>\n'+
            '\n'+
            ' В составе нет силиконов, сульфатов и альдегидов. Не вызывает привыкания, побочных эффектов или аллергии, поскольку не содержит гормонов, продуктов нефтехимии, силиконов, парабенов, отдушек.\n\n' +
            '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Озоновый крем дневной. Экспресс-уход. PV 500 (50 мл)\n' +
            '• Озоновый крем ночной. Релакс. PV 500 (50 мл)\n' +
            '• Озонированное масло ОТРИ® 6 000 (25 мл)\n' +
            '• Инструкция по применению'+ '\n'+ '\n'+
            '<b>3 990 руб</b>' + '\n' +
            '<a href="https://pp.userapi.com/c841127/v841127416/37bf4/fFTGD7aoloA.jpg">&#8205;</a>\n'

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

        let text ='<a href="https://pp.userapi.com/c841127/v841127416/37be1/LVWhUbzrles.jpg">&#8205;</a>'+
            '<b>Комплекс\n'+'«Полное восстановление волос»\n</b>' +

            '\n'+
            '\n'+
            '100% натуральные, кислородные маски для восстановления и питания поврежденных волос и активация роста. Это абсолютно новая технология, которая позволяет восстанавливать волосы на молекулярном уровне после любых ХИМИЧЕСКИХ, ТЕРМИЧЕСКИХ и МЕХАНИЧЕСКИХ воздействий.\n' +
            '\n' +
            'После первоых применений Вы получите следующий результат: волосы не выпадают, становятся более густыми и объемными, насыщаются кислородом. Волосы наполняются и лечатся изнутри. Маски одобрены Ассоциацией Российских Озонотерапевтов и Ассоциацией трихологов.\n' +
            '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Озоновая маска для волос. Восстанавливает структуру волос. PV 1000 (150 мл)\n' +
            '• Маска для волос. Озоновый активатор роста. PV 500 (150 мл)\n' +
            '• Инструкция по применению' + '\n' + '\n'+
            '<b>3 490 руб</b>'

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

        let text ='<a href="https://pp.userapi.com/c841127/v841127416/37bfe/HBrdiUBRpiQ.jpg">&#8205;</a>'+
            '<b>Комплекс\n'+ '«Идеальное тело»\n</b>' +

            '\n'+

             'Комплекс, который разработан нашими учеными для лечения целлюлита и устранения растяжек, а не для уменьшения их проявлений. Уникальный комплекс озонидов заметно улучшает состояние кожи, уменьшает эффект «апельсиновой корки». Применение озон-крема усиливает лимфодренаж и выделение жидкости из тканей, что способствует быстрой потере объемов и снижению веса. При регулярном применении озон-крем улучшает тонус кожи, придаѐт ей эластичность и бархатистость.\n' +
            '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Озон-крем антицеллюлитный. PV 3 000 (125 мл)\n' +
            '• Озон-крем от растяжек. PV 3 000 (125 мл)\n' +
            '• Озонированное масло ОТРИ® 12 000 (25 мл)\n' +
            '• Инструкция по применению'+ '\n' +'\n'+
            '<b>4 590 руб\n</b>'


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


    },

    gotoMiniBox1: function (tg, callbackQuery) {

        let text = '<b>MiniOzoneBox#1</b>\n' +
            'Восстановление волос' + '\n'+ '\n'+
            '<b>В комплекс входит:\n</b>' +
            '• Маска для восстановления волос PV 1000' + '\n' +
            '• Озонированное оливковое масло ОТРИ 6000'+ '\n' + '\n'
            '<b>2100 руб</b>'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox1Cmd'
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

    gotoMiniBox2: function (tg, callbackQuery) {

        let text = '<b>MiniOzoneBox#2</b>\n' +
            'Активатор роста волос ' + '\n' + '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• Маска озоновый активатор роста PV 1500' + '\n' +
            '• Озонированное оливковое масло ОТРИ 6000' + '\n' + '\n'
        '<b>2750 руб</b>'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox2Cmd'
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

    gotoMiniBox3: function (tg, callbackQuery) {

        let text = '<b>MiniOzoneBox#3</b>\n' +
            'Идеальная чистая кожа ' + '\n'+ '\n'+
            '<b>В комплекс входит:\n</b>' +
            '• Дневной крем PV 500 экспресс-уход' + '\n' +
            '• Озонированное оливковое масло ОТРИ 6000 для точечного применения'+ '\n' + '\n'
        '<b>2400 руб</b>'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox3Cmd'
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

    gotoMiniBox4: function (tg, callbackQuery) {

        let text = '<b>MiniOzoneBox#4</b>\n' +
            'Ночной лайт ' + '\n'+ '\n'+
            '<b>В комплекс входит:\n</b>' +
            '• Ночной крем PV 500 глубокое увлажнение'  + '\n' +
            '• Озонированное оливковое масло ОТРИ 6000 для точечного применения'+ '\n' + '\n'
        '<b>2400 руб</b>'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox4Cmd'
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

    gotoMiniBox5: function (tg, callbackQuery) {

        let text = '<b>MiniOzoneBox#5</b>\n' +
            'Идеальная чистая кожа: для сухой и нормальной кожи ' + '\n'+ '\n'+
            '<b>В комплекс входит:\n</b>' +
            '• OzoneBeauty ® Крем для профессионального ухода PV 2000'  + '\n' +
            '• Озонированное оливковое масло ОТРИ 6000 для точечного применения'+ '\n' + '\n'
        '<b>2400 руб</b>'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox5Cmd'
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

    gotoMiniBox6: function (tg, callbackQuery) {

        let text = '<b>MiniOzoneBox#6</b>\n' +
            'Идеальная чистая кожа: для сухой и нормальной кожи ' + '\n' + '\n' +
            '<b>В комплекс входит:\n</b>' +
            '• OzoneBeauty ® Крем для профессионального ухода PV 2000' + '\n' +
            '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n'
        '<b>2400 руб</b>'

        let Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        }

        let Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox6Cmd'
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