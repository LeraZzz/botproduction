'use strict';

module.exports = {

    goToComplexFace1: function goToComplexFace1(tg, callbackQuery) {

        var text = '<b> Комплекс\n' + '«Безупречно чистая кожа»\n</b>' + '\n' + 'Подарите себе профессиональный ритуал красоты «Безупречно чистая кожа», разработанный нашими учёными. OzoneBox для лица – профессиональный уход для лица, одобрено Российской Ассоциацией Озонотерапевтов и Дерматологами. ' + '\n' + ' Благодаря уникальному составу нашей косметики, в основе которой ' + 'находятся озониды (активные формы кислорода), комплекс работает на ' + 'клеточном уровне и действует немедленно после нанесения, тем самым: \n' + '<b>• стимулирует кровоснабжение;\n' + '• усиливает и нормализует обменные процессы;\n' + '• активизирует выработку коллагена и гиалуроновой кислоты, кожа\n' + 'насыщается полезными веществами и влагой;\n' + '• успокаивает воспалительные процессы и их последствия;\n' + '• разглаживает мимические морщинки изнутри. </b>\n' + '\n' + ' В составе нет силиконов, сульфатов и альдегидов. Не вызывает привыкания, побочных эффектов или аллергии, поскольку не содержит гормонов, продуктов нефтехимии, силиконов, парабенов, отдушек.\n\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Озоновый крем дневной. Экспресс-уход. PV 500 (50 мл)\n' + '• Озоновый крем ночной. Релакс. PV 500 (50 мл)\n' + '• Озонированное масло ОТРИ® 6 000 (25 мл)\n' + '• Инструкция по применению' + '\n' + '\n' + '<b>Стоимость</b>: 3 990 рублей \n' + '🎁 Бесплатная доставка по всей России ' + '\n' + '<a href="https://pp.userapi.com/c841127/v841127416/37bf4/fFTGD7aoloA.jpg">&#8205;</a>\n';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyComplexFaceCmd'
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

    goToComplexHair1: function goToComplexHair1(tg, callbackQuery) {

        var text = '<a href="https://pp.userapi.com/c841127/v841127416/37be1/LVWhUbzrles.jpg">&#8205;</a>' + '<b>Комплекс\n' + '«Полное восстановление волос»\n</b>' + '\n' + '100% натуральные, кислородные маски для восстановления и питания поврежденных волос и активация роста. Это абсолютно новая технология, которая позволяет восстанавливать волосы на молекулярном уровне после любых ХИМИЧЕСКИХ, ТЕРМИЧЕСКИХ и МЕХАНИЧЕСКИХ воздействий.\n' + '\n' + 'После первых применений Вы получите следующий результат: волосы не выпадают, становятся более густыми и объемными, насыщаются кислородом. Волосы наполняются и лечатся изнутри. Одобрено Ассоциацией Российских Озонотерапевтов и Ассоциацией Трихологов.\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Озоновая маска для волос. Восстанавливает структуру волос. PV 1000 (150 мл)\n' + '• Маска для волос. Озоновый активатор роста. PV 500 (150 мл)\n' + '• Инструкция по применению' + '\n' + '\n' + '<b>Стоимость</b>: 3 490 рублей \n' + '🎁 Бесплатная доставка по всей России ';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };
        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyComplexHairCmd'
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
    goToComplexBody1: function goToComplexBody1(tg, callbackQuery) {

        var text = '<a href="https://pp.userapi.com/c841127/v841127416/37bfe/HBrdiUBRpiQ.jpg">&#8205;</a>' + '<b>Комплекс\n' + '«Идеальное тело»\n</b>' + '\n' + 'Комплекс, который разработан нашими учеными для лечения целлюлита и устранения растяжек, а не для уменьшения их проявлений. Уникальный комплекс озонидов заметно улучшает состояние кожи, уменьшает эффект «апельсиновой корки». Применение озон-крема усиливает лимфодренаж и выделение жидкости из тканей, что способствует быстрой потере объемов и снижению веса. При регулярном применении озон-крем улучшает тонус кожи, придаёт ей эластичность и бархатистость.\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Озон-крем антицеллюлитный. PV 3 000 (125 мл)\n' + '• Озон-крем от растяжек. PV 3 000 (125 мл)\n' + '• Озонированное масло ОТРИ® 12 000 (25 мл)\n' + '• Инструкция по применению' + '\n' + '\n' + '<b>Стоимость</b>: 3 990 рублей \n' + '🎁 Бесплатная доставка по всей России ';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyComplexBodyCmd'
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

    gotoMiniBox1: function gotoMiniBox1(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#1</b>\n' + 'Восстановление волос' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Маска для восстановления волос PV 1000' + '\n' + '• Озонированное оливковое масло ОТРИ 6000' + '\n' + '\n';
        '<b>2100 руб</b>';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox1Cmd'
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

    gotoMiniBox2: function gotoMiniBox2(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#2</b>\n' + 'Активатор роста волос ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Маска озоновый активатор роста PV 1500' + '\n' + '• Озонированное оливковое масло ОТРИ 6000' + '\n' + '\n';
        '<b>2750 руб</b>';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox2Cmd'
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

    gotoMiniBox3: function gotoMiniBox3(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#3</b>\n' + 'Идеальная чистая кожа ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Дневной крем PV 500 экспресс-уход' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>';

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

    gotoMiniBox4: function gotoMiniBox4(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#4</b>\n' + 'Ночной лайт ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• Ночной крем PV 500 глубокое увлажнение' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox4Cmd'
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

    gotoMiniBox5: function gotoMiniBox5(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#5</b>\n' + 'Идеальная чистая кожа: для сухой и нормальной кожи ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• OzoneBeauty ® Крем для профессионального ухода PV 2000' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox5Cmd'
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

    gotoMiniBox6: function gotoMiniBox6(tg, callbackQuery) {

        var text = '<b>MiniOzoneBox#6</b>\n' + 'Идеальная чистая кожа: для сухой и нормальной кожи ' + '\n' + '\n' + '<b>В комплекс входит:\n</b>' + '• OzoneBeauty ® Крем для профессионального ухода PV 2000' + '\n' + '• Озонированное оливковое масло ОТРИ 6000 для точечного применения' + '\n' + '\n';
        '<b>2400 руб</b>';

        var Button4 = {
            text: '🔙',
            callback_data: 'catalogCmd'
        };

        var Button1 = {
            text: 'КУПИТЬ',
            callback_data: 'buyMiniBox6Cmd'
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
    }

};