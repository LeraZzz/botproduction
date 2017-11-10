'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _faq_func = require('./faq_func');

var _faq_func2 = _interopRequireDefault(_faq_func);

var _goods_func = require('./goods_func');

var _goods_func2 = _interopRequireDefault(_goods_func);

var _buy_func = require('./buy_func');

var _buy_func2 = _interopRequireDefault(_buy_func);

var _start_functions = require('./start_functions.js');

var _start_functions2 = _interopRequireDefault(_start_functions);

var _menu_func = require('./menu_func.js');

var _menu_func2 = _interopRequireDefault(_menu_func);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0');

var tg = void 0;

function create() {
    var token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"; //zzz_bot
    //const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A" //ozone_cosmetics

    tg = new _nodeTelegramBotApi2.default(token, {
        polling: true
    });
    tg.on('message', onMessage);
    tg.on('callback_query', onCallbackQuery);
}

function onMessage(message) {
    console.log('message:', message);

    botan.track(message, 'Start', function (err) {
        if (err) {
            console.log("ANALYTICS ERROR: ", err);
        }
    });

    if (message.text && message.text.toLowerCase() === 'хуй') {
        tg.sendMessage(message.chat.id, '<b>Ты</b> ', {
            parse_mode: 'HTML'
        });
        return;
    } else if (message.text && message.text.toLowerCase() === '/start') {
        _start_functions2.default.sendStartMessage(tg, message);
        return;
    } else if (message.contact !== undefined && message.contact !== 0) {
        var text = 'Заказ обратного звонка: ' + message.contact.first_name + ' ' + message.contact.last_name + ' ' + message.contact.phone_number;
        tg.sendMessage(-1001126980476, text);
    } else {
        tg.sendMessage(message.chat.id, '<b>Данная команда не поддерживается! \n</b>' + 'Испоьзуйте <b>/help</b> для справки!', {
            parse_mode: 'HTML'
        });
        var _text = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' + 'текст: ' + message.text;
        tg.sendMessage(-1001126980476, _text);
    }
}

/*function onContact(contact){
    console.log('YEAAHHH')
    let t = contact.first_name
    var text ='Заказ звонка:'+ //contact.first_name + contact.last_name + contact.phone_number

  let textInfo = Informat.toString()
    tg.sendMessage(-1001126980476, text)

}*/

function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

    if (callbackQuery.data === 'catalogCmd') {
        var goToFromMenu1 = _menu_func2.default.goToCatalog(tg, callbackQuery);
    } else if (callbackQuery.data === 'menuCmd') {

        var goToMenu = _start_functions2.default.sendStartMessage2(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogHairCmd') {

        var goToComplexHair = _goods_func2.default.goToComplexHair1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyComplexHairCmd') {

        var buyComplexHair = _buy_func2.default.buyComplexHair1(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogFaceCmd') {
        var goToComplexFace = _goods_func2.default.goToComplexFace1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyComplexFaceCmd') {
        var buyComplexFace = _buy_func2.default.buyComplexFace1(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogBodyCmd') {

        var goToComplexBody = _goods_func2.default.goToComplexBody1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyComplexBodyCmd') {

        var buyComplexBody = _buy_func2.default.buyComplexBody1(tg, callbackQuery);
    } else if (callbackQuery.data === 'goToBeforeAfterCmd') {

        var goToBeforeAfter = _menu_func2.default.goToBeforeAfter1(tg, callbackQuery);
    }

    /*
    else if (callbackQuery.data === 'catalogSkin') {
          const goToCatalogSkin = goToCatalogSkin1(callbackQuery)
    }
        else if (callbackQuery.data === 'catalogOil') {
          const goToCatalogOil = goToCatalogOil1(callbackQuery)
    }
      else if (callbackQuery.data === 'catalogComplex') {
          const goToCatalogComplex = goToCatalogComplex1(tg, callbackQuery)
    }
    */
    else if (callbackQuery.data === 'FAQCmd') {
            var goToFromMenu2 = _menu_func2.default.goToFAQ(tg, callbackQuery);
        } else if (callbackQuery.data === 'faqMythsCmd') {
            var goToFaqMyths1 = _faq_func2.default.goToFaqMyths(tg, callbackQuery);
        } else if (callbackQuery.data === 'myth1Cmd') {
            var goTo1Myth1 = _faq_func2.default.goTo1Myth(tg, callbackQuery);
        } else if (callbackQuery.data === 'myth2Cmd') {
            var goTo2Myth1 = _faq_func2.default.goTo2Myth(tg, callbackQuery);
        } else if (callbackQuery.data === 'myth3Cmd') {
            var goTo3Myth1 = _faq_func2.default.goTo3Myth(tg, callbackQuery);
        } else if (callbackQuery.data === 'faqQuestionsCmd') {
            var goToFaqQuestions1 = _faq_func2.default.goToFaqQuestions(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq1Cmd') {
            var goTo1Faq1 = _faq_func2.default.goTo1Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq2Cmd') {
            var goTo2Faq1 = _faq_func2.default.goTo2Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq3Cmd') {
            var goTo3Faq1 = _faq_func2.default.goTo3Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq4Cmd') {
            var goTo4Faq1 = _faq_func2.default.goTo4Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq5Cmd') {
            var goTo5Faq1 = _faq_func2.default.goTo5Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq6Cmd') {
            var goTo6Faq1 = _faq_func2.default.goTo6Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'faq7Cmd') {
            var goTo7Faq1 = _faq_func2.default.goTo7Faq(tg, callbackQuery);
        } else if (callbackQuery.data === 'callBackCmd') {
            var getNumberForCallBack = _menu_func2.default.goToCallBack(tg, callbackQuery);
        } else if (callbackQuery.data === 'aboutCmd') {
            var goToAboutInfo1 = _menu_func2.default.goToAboutInfo(tg, callbackQuery);
        } else if (callbackQuery.data === 'principCmd') {
            var goToPrincip = _menu_func2.default.goToPrincip1(tg, callbackQuery);
        } else if (callbackQuery.data === 'feedBackCmd') {

            var helpText = "Если у вас есть пожелания к работе магазина, напишите сюда ваш отзыв, и мы обязательно учтем его в дальнейшей работе";

            tg.sendMessage(callbackQuery.message.chat.id, helpText);
        }
}

create();