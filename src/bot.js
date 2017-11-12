import TelegramBot from 'node-telegram-bot-api'
import faq_func from './faq_func'
import goods_func from './goods_func'
import buy_func from './buy_func'
import start_functions from './start_functions.js'
import menu_func from './menu_func.js'
import vs from './vs.js'
import catalog_func from './catalog_func.js'
const botan = require('botanio')('786f747c-6fe7-4a7f-95a6-c8ef510a59f0')


let tg

function create() {

    //const token = "387016243:AAEXimznXpHl5ke6qpUanexj_Wm9mH79y_s"//zzz_bot
  //  const token = "467244885:AAHILNeTqyldJJzC4XLyfbIl8JxmdK8w62A" //ozone_cosmetics
    const token ="455260011:AAFkh4l9_xhFCr6C3rXxEASrkM-kXD5d0do"

    tg = new TelegramBot(token, {
        polling: true
    })
    tg.on('message', onMessage)
    tg.on('callback_query', onCallbackQuery)

}


function onMessage(message) {

    console.log('message:', message)

    botan.track(message, 'Start', (err) => {
        if (err) {
            console.log("ANALYTICS ERROR: ", err)
        }
    })

    if (message.text && message.text.toLowerCase() === 'хуй') {
        tg.sendMessage(message.chat.id, '<b>Ты</b> ', {
            parse_mode: 'HTML'
        })
        return
    }

    else if (message.text && message.text.toLowerCase() === '/start') {
        start_functions.helloMessage(tg, message)
        return
    }

    else if (message.contact !== undefined && message.contact !== 0) {
        let text = 'Заказ обратного звонка: ' + message.contact.first_name + ' ' + message.contact.last_name + ' ' + message.contact.phone_number
        tg.sendMessage(-1001126980476, text)
    }
    else if (message.text == '🔹 Главное меню' ){
        const sendStartMessage1 = start_functions.sendStartMessage(tg, message)
    }


    else {
        tg.sendMessage(message.chat.id, '<b>Данная команда не поддерживается! \n</b>' + 'Используйте <b>/help</b> для справки!', {
            parse_mode: 'HTML'
        })
        let text = 'Сообщение:\n' + 'отправитель: ' + message.from.first_name + ' ' + message.from.last_name + '\n' +
            'текст: ' + message.text
        tg.sendMessage(-1001126980476, text)
    }
}

function onCallbackQuery(callbackQuery) {

    console.log('callbackQuery:', callbackQuery);

     if (callbackQuery.data === 'catalogCmd') {
        const goToFromMenu1 = menu_func.goToCatalog(tg, callbackQuery)
    }

     else if (callbackQuery.data === 'catalogSkinCmd') {

         const catalogSkin1 = catalog_func.catalogSkin(tg, callbackQuery)
     }
     else if (callbackQuery.data === 'catalogHairCmd') {

         const catalogHair1 = catalog_func.catalogHair(tg, callbackQuery)
     }
     else if (callbackQuery.data === 'catalogBodyCmd') {

         const catalogBody1 = catalog_func.catalogBody(tg, callbackQuery)
     }

    else if (callbackQuery.data === 'menuCmd') {

        const goToMenu = start_functions.sendStartMessage2(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'mini1Cmd') {

        const goToMiniBox1_1 = goods_func.gotoMiniBox1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'mini2Cmd') {

        const goToMiniBox2_1 = goods_func.gotoMiniBox2(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'mini3Cmd') {

        const goToMiniBox3_1 = goods_func.gotoMiniBox3(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'mini4Cmd') {

        const goToMiniBox4_1 = goods_func.gotoMiniBox4(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'mini5Cmd') {

        const goToMiniBox5_1 = goods_func.gotoMiniBox5(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'mini6Cmd') {

        const goToMiniBox6_1 = goods_func.gotoMiniBox6(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'buyMiniBox1Cmd') {

        const buyMiniBox1_1 = buy_func.buyMiniBox1(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'buyMiniBox2Cmd') {

        const buyMiniBox2_1 = buy_func.buyMiniBox2(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'buyMiniBox3Cmd') {

        const buyMiniBox3_1 = buy_func.buyMiniBox3(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'buyMiniBox5Cmd') {

        const buyMiniBox4_1 = buy_func.buyMiniBox4(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'buyMiniBox5Cmd') {

        const buyMiniBox5_1 = buy_func.buyMiniBox5(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'buyMiniBox6Cmd') {

        const buyMiniBox6_1 = buy_func.buyMiniBox(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'fullHairRecoveryCmd') {

        const goToComplexHair = goods_func.goToComplexHair1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'buyComplexHairCmd') {

        const buyComplexHair = buy_func.buyComplexHair1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'idealSkinCmd') {
        const goToComplexFace = goods_func.goToComplexFace1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'buyComplexFaceCmd') {
        const buyComplexFace = buy_func.buyComplexFace1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'idealBodyCmd') {

        const goToComplexBody = goods_func.goToComplexBody1(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'buyComplexBodyCmd') {

        const buyComplexBody = buy_func.buyComplexBody1(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'goToBeforeAfterCmd') {

        const goToBeforeAfter = menu_func.goToBeforeAfter1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'photo1Cmd') {

        const watch1VS1 = vs.watch1VS(tg, callbackQuery)
    }

     else if (callbackQuery.data === 'photo2Cmd') {

         const watch2VS1 = vs.watch2VS(tg, callbackQuery)
     }

     else if (callbackQuery.data === 'photo3Cmd') {

         const watch3VS1 = vs.watch3VS(tg, callbackQuery)
     }

     else if (callbackQuery.data === 'photo4Cmd') {

         const watch4VS1 = vs.watch4VS(tg, callbackQuery)
     }

     else if (callbackQuery.data === 'photo5Cmd') {

         const watch5VS1 = vs.watch5VS(tg, callbackQuery)
     }

     else if (callbackQuery.data === 'photo6Cmd') {

         const watch6VS1 = vs.watch6VS(tg, callbackQuery)
     }


    else if (callbackQuery.data === 'FAQCmd') {
        const goToFromMenu2 = menu_func.goToFAQ(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faqMythsCmd') {
        let goToFaqMyths1 = faq_func.goToFaqMyths(tg, callbackQuery)
    }



    else if (callbackQuery.data === 'myth1Cmd') {
        let goTo1Myth1 = faq_func.goTo1Myth(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'myth2Cmd') {
        let goTo2Myth1 = faq_func.goTo2Myth(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'myth3Cmd') {
        let goTo3Myth1 = faq_func.goTo3Myth(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faqQuestionsCmd') {
        let goToFaqQuestions1 = faq_func.goToFaqQuestions(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faq1Cmd') {
        let goTo1Faq1 = faq_func.goTo1Faq(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'faq2Cmd') {
        let goTo2Faq1 = faq_func.goTo2Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq3Cmd') {
        let goTo3Faq1 = faq_func.goTo3Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq4Cmd') {
        let goTo4Faq1 = faq_func.goTo4Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq5Cmd') {
        let goTo5Faq1 = faq_func.goTo5Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq6Cmd') {
        let goTo6Faq1 = faq_func.goTo6Faq(tg, callbackQuery)
    }
    else if (callbackQuery.data === 'faq7Cmd') {
        let goTo7Faq1 = faq_func.goTo7Faq(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'callBackCmd') {
        let getNumberForCallBack = menu_func.goToCallBack(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'aboutCmd') {
        let goToAboutInfo1 = menu_func.goToAboutInfo(tg, callbackQuery)
    }


    else if (callbackQuery.data === 'principCmd') {
        let goToPrincip = menu_func.goToPrincip1(tg, callbackQuery)
    }

    else if (callbackQuery.data === 'feedBackCmd') {

        let goToFeedback1 = menu_func.goToFeedback(tg, callbackQuery)
    }
}


create()

