'use strict';

module.exports = {

    buyComplexFace1: function buyComplexFace1(tg, callbackQuery) {

        var text = '<b>Комплекс\n' + '«Безупречно чистая кожа»\n</b>' + '<b>3 990 руб\n</b>' + '\n' + 'Благодаря уникальному составу нашей косметики, в основе которой ' + 'находятся озониды (активные формы кислорода), комплекс работает на ' + 'клеточном уровне и действует немедленно после нанесения, тем самым: \n' + '<b>• стимулирует кровоснабжение;\n' + '• усиливает и нормализует обменные процессы;\n' + '• активизирует выработку коллагена и гиалуроновой кислоты, кожа ' + 'насыщается полезными веществами и влагой;\n' + '• успокаивает воспалительные процессы и их последствия;\n' + '• разглаживает мимические морщинки изнутри. </b>\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Озоновый крем дневной. Экспресс-уход. PV 500 (50 мл)\n' + '• Озоновый крем ночной. Релакс. PV 500 (50 мл)\n' + '• Озонированное масло ОТРИ® 6 000 (25 мл)\n' + '• Инструкция по применению' + '\n' + '\n' + 'Для того, чтобы купить комплекс <b>«Безупречно чистая кожа»</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button1 = {
            text: '🔙',
            callback_data: 'catalogCmd'
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
    buyComplexHair1: function buyComplexHair1(tg, callbackQuery) {

        var text = '<b>Комплекс\n' + '«Полное восстановление волос»\n</b>' + '<b>3 490 руб\n</b>' + '\n' + 'Озонотерапия воздействует на кожные покровы, а, значит и на ' + 'расположенные в них волосяные фолликулы, что в свою очередь:\n' + '<b>• стимулирует процессы кровообращения (рост волос);\n' + '• обеспечивает насыщение кислородом;\n' + '• уменьшает болезненные ощущения при наличии травм, синяков и ' + 'т.д.;\n' + '• выводит токсины, вредоносные вещества и шлаки из локальных ' + 'участков головы; \n' + '• заживляет имеющиеся раздражения кожи, уменьшает воспаления, ' + 'убивает грибки и бактерии </b>\n' + '\n' + ' После первого применения Вы получите следующий результат: волосы ' + 'не выпадают, становятся более густыми и объемными, насыщаются ' + 'кислородом. Волосы наполняются и лечатся изнутри.\n' + '\n' + '<b>В комплекс входит:</b> \n' + '• Озоновая маска для волос. Восстанавливает структуру волос. PV 1000 (150 мл)\n' + '• Маска для волос. Озоновый активатор роста. PV 500 (150 мл)\n' + '• Инструкция по применению \n' + '\n' + '\n' + 'Для того, чтобы купить комплекс <b>«Полное восстановление волос»</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button1 = {
            text: '🔙',
            callback_data: 'catalogCmd'
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

    buyComplexBody1: function buyComplexBody1(tg, callbackQuery) {
        var text = '<b>Комплекс\n' + '«Идеальное тело»\n</b>' + '<b>4 590 руб\n</b>' + '\n' + 'Антицеллюлитная серия\n' + '<b>• Уникальный комплекс озонидов расщепляет и выводит жир, повышает ' + 'упругость и улучшает текстуру кожи. Заметно улучшает состояние кожи, ' + 'уменьшает эффект "апельсиновой корки" \n' + '• Применение озон - крема усиливает лимфодренаж и выделение жидкости ' + 'из тканей, что способствует быстрой потере объемов и снижению веса.\n' + '• При регулярном применении озон-крем улучшает тонус кожи, придает ей ' + 'эластичность и бархатистость</b>' + '\n' + '\n' + '<b>В комплекс входит:</b>\n' + '• Озон-крем антицеллюлитный. PV 3 000 (125 мл)\n' + '• Озон-крем от растяжек. PV 3 000 (125 мл)\n' + '• Озонированное масло ОТРИ® 12 000 (25 мл)\n' + '• Инструкция по применению' + '\n' + '\n' + 'Для того, чтобы купить комплекс <b>«Идеальное тело»</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button1 = {
            text: '🔙',
            callback_data: 'catalogCmd'
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

    buyMiniBox1: function buyMiniBox1(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#1</b>\n' + 'Восстановление волос' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Маска для восстановления волос PV 1000' + '\n' + '• Озонированное оливковое масло ОТРИ 6000' + '\n' + '\n';
        '<b>2100 руб</b>' + '\n' + '\n';
        'Для того, чтобы купить минибокс <b>Восстановление волос</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    buyMiniBox2: function buyMiniBox2(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#2</b>\n' + 'Активатор роста волос ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Маска озоновый активатор роста PV 1500' + '\n' + '• Озонированное оливковое масло ОТРИ 6000' + '\n' + '\n';
        '<b>2750 руб</b>' + '\n' + '\n';
        'Для того, чтобы купить минибокс <b>Активатор роста волос</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    buyMiniBox3: function buyMiniBox3(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#3</b>\n' + 'Идеальная чистая кожа ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Дневной крем PV 500 экспресс-уход' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>' + '\n' + '\n';
        'Для того, чтобы купить минибокс <b>Идеальная чистая кожа</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox3Cmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button1], [Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    buyMiniBox4: function buyMiniBox4(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#4</b>\n' + 'Ночной лайт ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Ночной крем PV 500 глубокое увлажнение' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>' + '\n' + '\n';
        'Для того, чтобы купить минибокс <b>Ночной лайт</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    buyMiniBox5: function buyMiniBox5(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#5</b>\n' + 'Идеальная чистая кожа: для сухой и нормальной кожи ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• OzoneBeauty ® Крем для профессионального ухода PV 2000' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>' + '\n' + '\n';
        'Для того, чтобы купить минибокс <b>Идеальная чистая кожа: для сухой и нормальной кожи</b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    },

    buyMiniBox6: function buyMiniBox6(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#6</b>\n' + 'Идеальная чистая кожа: для комбинированной и жирной кожи  ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• OzoneBeauty ® Крем для профессионального ухода PV 2000' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>' + '\n' + '\n';
        'Для того, чтобы купить минибокс <b>Идеальная чистая кожа: для комбинированной и жирной кожи </b>, закажите обратный звонок, и наш менеджер свяжется с вами в течение получаса 👇 \n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var options = Object.assign({}, {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                inline_keyboard: [[Button4]]
            })
        }, {
            message_id: callbackQuery.message.message_id,
            chat_id: callbackQuery.message.chat.id
        });
        tg.editMessageText(text, options);
    }

};