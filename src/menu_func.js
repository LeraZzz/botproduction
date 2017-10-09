
module.exports = {

    goToCallBack: function (tg, callbackQuery) {

        let options = {
            "parse_mode": "Markdown",
            "reply_markup": {
                "force_reply": true,
                "one_time_keyboard": true,
                "resize_keyboard": true,
                "remove_keyboard": true,
                "callback_data": "numberQuery",
                "keyboard": [[{
                    text: "Заказать звонок менеджера",
                    request_contact: true
                }]]
            }
        }

        tg.sendMessage(callbackQuery.message.chat.id, "Как с вами связаться?", options)//"text inside"

        User.create({

            first_name: message.from.first_name,
            last_name: message.from.last_name,
            message_text: message.text,
            chat_id: message.chat.id,
            date: message.date,
            number: String
        }, function (err) {

            if (err) return handleError(err);
        })

    },

    goToFAQ: function (tg, callbackQuery) {

        let text = 'Часто задаваемые вопросы 🤗 :'

        let Button1 = {
            text: 'wtf',
            callback_data: '1'
        }

        let Button2 = {
            text: 'Do Androids dream of electric sheep?',
            callback_data: '2'
        }
        let Button3 = {
            text: '🔙',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1],
                            [Button2],
                            [Button3]
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

    goToCatalog: function (tg, callbackQuery) {

        let text = 'Комплексы Ozone Box:'

        let Button2 = {
            text: 'OzoneBox для волос 💆',
            callback_data: 'catalogHair'
        }

        let Button1 = {
            text: 'OzoneBox для лица  💁',
            callback_data: 'catalogFace'
        }

        let Button3 = {
            text: 'OzoneBox для тела  🏃‍♀️',
            callback_data: 'catalogBody'

        }
/*
        let Button4 = {
            text: 'Уход за кожей',
            callback_data: 'catalogSkin'
        }
        let Button5 = {
            text: 'Комплексный уход',
            callback_data: 'catalogComplex'
        }

        let Button6 = {
            text: 'Озонированное масло О3',
            callback_data: 'catalogOil'
        }
*/
        let Button7 = {
            text: ' 🔙 ',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1],
                            [Button2],
                            [Button3],
                           /* [Button4],
                            [Button5],
                            [Button6],*/
                            [Button7]

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

    goToAboutInfo: function (tg, callbackQuery){
    const text = '<b>О НАШЕЙ КОМПАНИИ: \n</b>'+
        'Косметика «O’THREE COSMETICS LAB» - первый российский бренд 100% натуральной озоновой косметики ведет свою\n' +
        'деятельность с 2006 года. За это время она накопила огромный опыт в области производства косметики на основе озона:\n' +
        'безупречная формула и уникальные рецептуры, серьезные научные исследования, оптимальные технологические решения,'+
         'а также внедрение современных инноваций.\n' +
        ' На сегодняшний день лаборатории «O’THREE COSMETICS LAB» удалось в полной мере реализовать весь спектр целебных\n' +
        'свойств озона. Косметика «O’THREE COSMETICS LAB» имеет всю необходимую сертификацию, соответствует стандартам\n' +
        'качества Российского и Европейского сообщества, одобрена и рекомендована Ассоциацией Российских озонотерапевтов.\n'+
        '\n'+
        '<b>ООО «БЬЮМЕТИКС»\n</b>' +
        'ОФИЦИАЛЬНЫЙ ПРЕДСТАВИТЕЛЬ O’THREE COSMETIC LAB\n' +
        'В САНКТ-ПЕТЕРБУРГЕ И СЕВЕРО-ЗАПАДНОМ РЕГИОНЕ\n'+
        '<b>ОПЫТ:\n</b>' +
        'Исследования нашими учеными были начаты более 20' +
        'лет назад! К 2009 году «Российская школа озонотерапии»\n' +
        'окончательно сформировала свой подход к применению' +
        'озона, как лечебного средства. Безопасность и\n' +
        'эффективность Российских методик озонотерапии' +
        'многократно обоснована и доказана в различных\n' +
        'областях медицины.\n'+
        '<b>КОНТАКТЫ:\n</b>' +
        '<b>ОКСАНА БУЛАНЬКОВА</b>, ДИРЕКТОР ПО РАЗВИТИЮ\n' +
        '<b>E-MAIL</b>: OKSANA.BULANKOVA@BEAUMETICS.RU\n' +
        '<b>ТЕЛ.</b>: +7 911 240 22 09\n' +
        '<b>НАТАЛЬЯ КАСАТКИНА</b>, ДИРЕКТОР ПО МАРКЕТИНГУ\n' +
        '<b>E-MAIL</b>: NATALIA.KASATKINA@BEAUMETICS.RU\n' +
        '<b>ТЕЛ.</b>: +7 981 831 57 77'


        let Button1 = {
        text: '🔙',
        callback_data: 'menuCmd'
    }

    let options = Object.assign(
        {},
        {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify(
                {
                    inline_keyboard: [
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

    goToPrincip1: function(tg, callbackQuery){
        const text = '<b>ХОТИТЕ ПОПРОБОВАТЬ ЧТО-ТО НОВОЕ И ДЕЙСТВИТЕЛЬНО ЭФФЕКТИВНОЕ?\n' +
            'ТОГДА ОЗОНОВАЯ КОСМЕТИКА ДЛЯ ВАС!\n</b>'+
            '\n'+
            '<b>Озон</b> оказывает многогранное благотворное воздействие на организм ' +
            'человека: защищает от вирусов и бактерий, снимает воспаление,' +
            'стимулирует иммунитет, удаляет токсины.\n' +
            '\n'+
            '• <b>Озон</b> обладает способностью «запускать» собственную\n' +
            'антиоксидантную систему защиты организма и улучшать\n' +
            'кислородопитание. За счет этого озон помогает предотвратить старение' +
            'кожи и способствует еѐ омоложению.\n' +
            '• В нашей озоновой косметике, содержащей высокоактивные соединения ' +
            'озона – <b>озониды</b>, удалось в полной мере реализовать весь спектр ' +
            'целебных свойств озона.\n' +
            '\n'+
            '• <b>Озоновая</b> косметика эффективна и безопасна, действует\n' +
            'целенаправленно и всегда даѐт гарантированный результат\n'+
            '\n'+
            '<b>ВАЖНО!\n</b>' +
            '• Содержание озонидов в нашей озоновой косметике указано на ' +
            'упаковке. Маркировка косметики по содержанию активного\n' +
            'компонента гарантирует индивидуальный подбор, эффективность и ' +
            'безопасность применения озоновой косметики.\n'+
            '\n'+
            '<b>ЗА СЧЕТ ЧЕГО ДОСТИГАЕТСЯ ЭФФЕКТ? \n</b>'+
            '<b>Озониды</b> – главный строительный элемент эпидермиса:\n' +
            '• Стимулируют в тканях выработку собственных белков, отвечают за ' +
            'упругость, эластичность и прочность кожи;\n' +
            '• Являются активатором молодости - способствуют выработке коллагена;\n' +
            '• Препятствуют обезвоживанию кожи;\n' +
            '• Помогают возрождению клеток;\n' +
            '• Обладают мощным лифтинг-эффектом.\n' +
            '\n'+
            '<b>Оливковое масло</b>, входящее в состав продукции, ускоряет процессы ' +
            'регенерации кожи: «старые» клетки заменяются новыми – молодыми, ' +
            'наполненными жизненной энергией. Оливковое масло необходимо для ' +
            'красоты и здоровья кожи, так как оно эффективно улучшает ее текстуру и ' +
            'предотвращают повреждения на клеточном уровне.\n' +
            '\n'+
            '<b>Косметика с озоном:\n</b>' +
            '• Запускает механизмы клеточного обновления, активизирует синтез ' +
            'коллагена и межклеточного вещества дермы, укрепляет эластиновый ' +
            'матрикс, ускоряет обменные процессы;\n' +
            '• Оказывает противовирусное, антибактериальное и антимикробное ' +
            'действие, уменьшает акне, снимает воспаление и отек, ускоряет\n' +
            'заживление повреждений кожи;\n' +
            '• Энергетически подпитывает кожу, стимулирует, пробуждает,\n' +
            'омолаживает. ' +
            'Кожа приобретает жизненную силу, становится эластичной и подтянутой, ' +
            'результат виден сразу!'



        let Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1]

                        ]
                    })
            },
           /* {
                message_id: callbackQuery.message.message_id,
                chat_id: callbackQuery.message.chat.id
            }*/
        )
        tg.sendMessage(callbackQuery.message.chat.id, text, options)
    }
}