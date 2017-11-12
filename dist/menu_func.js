'use strict';

module.exports = {

    goToCallBack: function goToCallBack(tg, callbackQuery) {
        var text = 'Чтобы наш менеджер тебе перезвонил, воспользуйся кнопкой  🔸<b> Заказать звонок</b>  внизу на клавиатуре 👇 \n' + '( если она скрыта, нажми значок  в конце поля для набора текста )' + ' и оставь свой номер.\n' + '\n' + 'Мы обязательно перезвоним  в течение часа! 👌' + '\n' + '\n' + 'Чтобы уточнить время звонка, отправь в чат сообщение вида <b>Время  XXX</b>, где вместо <b>XXX</b> укажи удобный для тебя промежуток времени. ';

        var Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
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

    goToFAQ: function goToFAQ(tg, callbackQuery) {

        var text = '❣️ В этом разделе собраны наиболее популярные вопросы о косметике <b>Ozone Box</b>. Если ты не нашел ответ на свой вопрос, ' + 'закажи звонок нашего менеджера (см 🔸 <b>Заказать звонок</b> на встроенной клавиатуре или в 🔹 <b>Главном меню</b>). \n' + 'Мы обязательно перезвоним! 👌';

        var Button1 = {
            text: 'Часто задаваемые вопросы  🐼',
            callback_data: 'faqQuestionsCmd'
        };

        var Button2 = {
            text: 'Мифы vs Правда  🦄 ',
            callback_data: 'faqMythsCmd'
        };
        var Button3 = {
            text: '🔙',
            callback_data: 'menuCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1], [Button2], [Button3]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goToCatalog: function goToCatalog(tg, callbackQuery) {

        var text = '❣️ ️️<b>Выбери свой...</b> ' + '\n';

        var Button1 = {
            text: ' 🔙 ',
            callback_data: 'menuCmd'
        };

        var Button2 = {
            text: '           OzoneBox для волос     💆           ',
            callback_data: 'catalogHairCmd'
        };

        var Button3 = {
            text: '           OzoneBox для лица      💁           ',
            callback_data: 'catalogSkinCmd'
        };

        var Button4 = {
            text: '           OzoneBox для тела      🏃‍♀️           ',
            callback_data: 'catalogBodyCmd'

        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button2], [Button3], [Button4],
                /*  [Button5],
                  [Button6],
                 [Button7],
                 [Button8],
                 [Button8],
                 [Button9],
                 [Button10]*/
                [Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goToAboutInfo: function goToAboutInfo(tg, callbackQuery) {
        var text = '❣️ <b>О нашей компании: \n</b>' + '\n' + 'Косметика <b>«O’Three Cosmetics Lab»</b>, первый российский бренд 100% натуральной озоновой косметики ведет свою ' + 'деятельность с 2006 года. За это время она накопила огромный опыт в области производства косметики на основе озона: ' + 'безупречная формула и уникальные рецептуры, серьезные научные исследования, оптимальные технологические решения, ' + 'а также внедрение современных инноваций.\n' + '\n' + 'На сегодняшний день лаборатории «O’Three Cosmetics Lab» удалось в полной мере реализовать весь спектр целебных ' + 'свойств озона. Косметика «O’Three Cosmetics Lab» имеет всю необходимую сертификацию, соответствует стандартам ' + 'качества Российского и Европейского сообщества, одобрена и рекомендована Ассоциацией Российских озонотерапевтов, Дерматологами и Трихологами.\n' +
        /* '\n' +
         '<b>ООО «Бьютиметрикс»\n</b>' +
         'Официальный представитель «O’Three Cosmetics Lab» ' +
         'в Санкт-Петербурге и Северо-Западном регионе\n' +
         '<b>Опыт:\n</b>' +
         'Исследования нашими учеными были начаты более 20 ' +
         'лет назад! К 2009 году «Российская школа озонотерапии» ' +
         'окончательно сформировала свой подход к применению ' +
         'озона как лечебного средства. Безопасность и ' +
         'эффективность Российских методик озонотерапии ' +
         'многократно обоснована и доказана в различных ' +
         'областях медицины.\n' +*/

        '\n' + 'Контакты:\n' + '<b>Наталья Касаткина</b>, директор по маркетингу\n' + '<b>E-mail</b>: Natalia.kasatkina@beaumetics.ru\n' + '<b>Тел.</b>: +7 981 831-57-77';

        var Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
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

    goToPrincip1: function goToPrincip1(tg, callbackQuery) {
        var text = '❣️ <b>Принцип действия озоновой косметики</b>' + '\n' + '\n' + '• <b>Озон</b> оказывает многогранное благотворное воздействие на организм ' + 'человека: защищает от вирусов и бактерий, снимает воспаление, ' + 'стимулирует иммунитет, удаляет токсины.\n' + '\n' + '• <b>Озон</b> обладает способностью «запускать» собственную\n' + 'антиоксидантную систему защиты организма и улучшать\n' + 'кислородопитание. За счет этого озон помогает предотвратить старение ' + 'кожи и способствует ее омоложению.\n' + '• В нашей озоновой косметике, содержащей высокоактивные соединения ' + 'озона – <b>озониды</b>, удалось в полной мере реализовать весь спектр ' + 'целебных свойств озона.\n' + '\n' + '• <b>Озоновая</b> косметика эффективна и безопасна, действует ' + 'целенаправленно и всегда даѐт гарантированный результат\n' + '\n' + '<b>ВАЖНО!\n</b>' + '• Содержание озонидов в нашей озоновой косметике указано на ' + 'упаковке. Маркировка косметики по содержанию активного\n' + 'компонента гарантирует индивидуальный подбор, эффективность и ' + 'безопасность применения озоновой косметики.\n' + '\n' + '<b>За счет чего достигается эффект? \n</b>' + '<b>Озониды</b> – главный строительный элемент эпидермиса:\n' + '• Стимулируют в тканях выработку собственных белков, отвечают за ' + 'упругость, эластичность и прочность кожи;\n' + '• Являются активатором молодости - способствуют выработке коллагена;\n' + '• Препятствуют обезвоживанию кожи;\n' + '• Помогают возрождению клеток;\n' + '• Обладают мощным лифтинг-эффектом.\n' + '\n' + '<b>Оливковое масло</b>, входящее в состав продукции, ускоряет процессы ' + 'регенерации кожи: «старые» клетки заменяются новыми – молодыми, ' + 'наполненными жизненной энергией. Оливковое масло необходимо для ' + 'красоты и здоровья кожи, так как оно эффективно улучшает ее текстуру и ' + 'предотвращает повреждения на клеточном уровне.\n' + '\n' + '<b>Косметика с озоном:\n</b>' + '• Запускает механизмы клеточного обновления, активизирует синтез ' + 'коллагена и межклеточного вещества дермы, укрепляет эластиновый ' + 'матрикс, ускоряет обменные процессы;\n' + '• Оказывает противовирусное, антибактериальное и антимикробное ' + 'действие, уменьшает акне, снимает воспаление и отек, ускоряет ' + 'заживление повреждений кожи;\n' + '• Энергетически подпитывает кожу, стимулирует, пробуждает, ' + 'омолаживает. \n' + 'Кожа приобретает жизненную силу, становится эластичной и подтянутой, ' + 'результат виден сразу!';

        var Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
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

    goToBeforeAfter1: function goToBeforeAfter1(tg, callbackQuery) {
        var text = '❣️ Хочешь посмотреть результаты применения косметики <b>OZONE BOX ?</b> \n';

        var Button2 = {
            text: 'Смотреть фото 😻',
            callback_data: 'photo1Cmd'
        };

        var Button1 = {
            text: '🔙',
            callback_data: 'menuCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button2], [Button1]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    goToFeedback: function goToFeedback(tg, callbackQuery) {

        var text = '❣️ <b>Остались вопросы или пожелания? </b>' + '\n' + '\n' + 'Может быть, ты хочешь поделиться впечатлениями от косметики Ozone Box? ' + 'Будем рады услышать твое мнение! 😋' + '\n' + '\n' + 'Чтобы <b>ОСТАВИТЬ ОТЗЫВ</b>, отправь в чат сообщение вида <b>ОТЗЫВ  XXX</b>, где вместо <b>XXX</b> напиши свое сообщение. 🐧 ';

        var Button4 = {
            text: 'Хочу оставить отзыв! 🐧',
            callback_data: 'leaveFeedbackCmd'
        };

        var ButtonB = {
            text: '🔙',
            callback_data: 'menuCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[ButtonB]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    }

};