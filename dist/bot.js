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

var _vs = require('./vs.js');

var _vs2 = _interopRequireDefault(_vs);

var _catalog_func = require('./catalog_func.js');

var _catalog_func2 = _interopRequireDefault(_catalog_func);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0');

var tg = void 0;

function create() {

    //const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"//zzz_bot
    //  const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A" //ozone_cosmetics
    var token = "455260011:AAFkh4l9_xhFCr6C3rXxEASrkM-kXD5d0do";

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
        _start_functions2.default.helloMessage(tg, message);
        return;
    } else if (message.contact !== undefined && message.contact !== 0) {
        var text = 'Заказ обратного звонка: ' + message.contact.first_name + ' ' + message.contact.last_name + ' ' + message.contact.phone_number;
        tg.sendMessage(-1001126980476, text);
    } else if (message.text === '🔹 Главное меню') {
        var sendStartMessage1 = _start_functions2.default.sendStartMessage(tg, message);
    } else if (message.text.search(/КУПИТЬ/i) === 0) {
        tg.sendMessage(message.chat.id, 'Спасибо! Мы свяжемся с Вами в ближайшее время!! 🙃', {
            parse_mode: 'HTML'
        });
        var _text = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' + 'текст: ' + message.text;
        tg.sendMessage(-1001126980476, _text);
    } else if (message.text.search(/ВРЕМЯ/i) === 0) {
        tg.sendMessage(message.chat.id, 'Спасибо за заказ звонка! Мы свяжемся с Вами в ближайшее время! 🙃', {
            parse_mode: 'HTML'
        });
        var _text2 = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' + 'текст: ' + message.text;
        tg.sendMessage(-1001126980476, _text2);
    } else if (message.text.search(/ОТЗЫВ/i) === 0) {
        tg.sendMessage(message.chat.id, 'Спасибо за отзыв! Вы помогаете нам меняться к лучшему 🙃', {
            parse_mode: 'HTML'
        });
        var _text3 = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' + 'текст: ' + message.text;
        tg.sendMessage(-1001126980476, _text3);
    } else if (message.text && message.text.toLowerCase() === '/help') {
        tg.sendMessage(message.chat.id, 'Вы можете отправлять боту сообщения следующих форматов <b>КУПИТЬ ХХХ</b>, <b>ОТЗЫВ ХХХ</b>, <b>ВРЕМЯ ХХХ</b>' + ' где <b>ХХХ</b> это текст вашего сообщения', {
            parse_mode: 'HTML'
        });
    } else {
        tg.sendMessage(message.chat.id, 'Спасибо, что направили нам сообщение. Наш менеджер свяжется с Вами в течение ближайшего времени', {
            parse_mode: 'HTML'
        });
        var _text4 = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' + 'текст: ' + message.text;
        tg.sendMessage(-1001126980476, _text4);
    }
}

function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

    if (callbackQuery.data === 'catalogCmd') {
        var goToFromMenu1 = _menu_func2.default.goToCatalog(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogSkinCmd') {

        var catalogSkin1 = _catalog_func2.default.catalogSkin(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogHairCmd') {

        var catalogHair1 = _catalog_func2.default.catalogHair(tg, callbackQuery);
    } else if (callbackQuery.data === 'catalogBodyCmd') {

        var catalogBody1 = _catalog_func2.default.catalogBody(tg, callbackQuery);
    } else if (callbackQuery.data === 'menuCmd') {

        var goToMenu = _start_functions2.default.sendStartMessage2(tg, callbackQuery);
    } else if (callbackQuery.data === 'mini1Cmd') {

        var goToMiniBox1_1 = _goods_func2.default.gotoMiniBox1(tg, callbackQuery);
    } else if (callbackQuery.data === 'mini2Cmd') {

        var goToMiniBox2_1 = _goods_func2.default.gotoMiniBox2(tg, callbackQuery);
    } else if (callbackQuery.data === 'mini3Cmd') {

        var goToMiniBox3_1 = _goods_func2.default.gotoMiniBox3(tg, callbackQuery);
    } else if (callbackQuery.data === 'mini4Cmd') {

        var goToMiniBox4_1 = _goods_func2.default.gotoMiniBox4(tg, callbackQuery);
    } else if (callbackQuery.data === 'mini5Cmd') {

        var goToMiniBox5_1 = _goods_func2.default.gotoMiniBox5(tg, callbackQuery);
    } else if (callbackQuery.data === 'mini6Cmd') {

        var goToMiniBox6_1 = _goods_func2.default.gotoMiniBox6(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyMiniBox1Cmd') {

        var buyMiniBox1_1 = _buy_func2.default.buyMiniBox1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyMiniBox2Cmd') {

        var buyMiniBox2_1 = _buy_func2.default.buyMiniBox2(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyMiniBox3Cmd') {

        var buyMiniBox3_1 = _buy_func2.default.buyMiniBox3(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyMiniBox5Cmd') {

        var buyMiniBox4_1 = _buy_func2.default.buyMiniBox4(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyMiniBox5Cmd') {

        var buyMiniBox5_1 = _buy_func2.default.buyMiniBox5(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyMiniBox6Cmd') {

        var buyMiniBox6_1 = _buy_func2.default.buyMiniBox(tg, callbackQuery);
    } else if (callbackQuery.data === 'fullHairRecoveryCmd') {

        var goToComplexHair = _goods_func2.default.goToComplexHair1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyComplexHairCmd') {

        var buyComplexHair = _buy_func2.default.buyComplexHair1(tg, callbackQuery);
    } else if (callbackQuery.data === 'idealSkinCmd') {
        var goToComplexFace = _goods_func2.default.goToComplexFace1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyComplexFaceCmd') {
        var buyComplexFace = _buy_func2.default.buyComplexFace1(tg, callbackQuery);
    } else if (callbackQuery.data === 'idealBodyCmd') {

        var goToComplexBody = _goods_func2.default.goToComplexBody1(tg, callbackQuery);
    } else if (callbackQuery.data === 'buyComplexBodyCmd') {

        var buyComplexBody = _buy_func2.default.buyComplexBody1(tg, callbackQuery);
    } else if (callbackQuery.data === 'goToBeforeAfterCmd') {

        var goToBeforeAfter = _menu_func2.default.goToBeforeAfter1(tg, callbackQuery);
    } else if (callbackQuery.data === 'photo1Cmd') {

        var watch1VS1 = _vs2.default.watch1VS(tg, callbackQuery);
    } else if (callbackQuery.data === 'photo2Cmd') {

        var watch2VS1 = _vs2.default.watch2VS(tg, callbackQuery);
    } else if (callbackQuery.data === 'photo3Cmd') {

        var watch3VS1 = _vs2.default.watch3VS(tg, callbackQuery);
    } else if (callbackQuery.data === 'photo4Cmd') {

        var watch4VS1 = _vs2.default.watch4VS(tg, callbackQuery);
    } else if (callbackQuery.data === 'photo5Cmd') {

        var watch5VS1 = _vs2.default.watch5VS(tg, callbackQuery);
    } else if (callbackQuery.data === 'photo6Cmd') {

        var watch6VS1 = _vs2.default.watch6VS(tg, callbackQuery);
    } else if (callbackQuery.data === 'FAQCmd') {
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

        var goToFeedback1 = _menu_func2.default.goToFeedback(tg, callbackQuery);
    }
}

create();