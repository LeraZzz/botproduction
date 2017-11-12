module.exports ={

    watch1VS: function(tg, callbackQuery){
       // let photo1 = '<a href="https://vk.com/photo-154365435_456239089">&#8205;</a>'
        let text = '<a href="https://pp.userapi.com/c621706/v621706902/1e710/94YDuBm5LkY.jpg">&#8205;</a>'+
            '❣ Вот таких результатов помогает достичь косметика <b>OzoneBox</b> :'

        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '•1•',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '2',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '3',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '4',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '5',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '6',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                             Button2,
                             Button3,
                             Button4,
                             Button5,
                             Button6],
                            [ButtonB]



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

    watch2VS: function(tg, callbackQuery){
       // let photo2 = '<a href="https://vk.com/photo-154365435_456239085">&#8205;</a>'
        const text ='❣️️ Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:' + '<a href="https://pp.userapi.com/c841120/v841120315/24ad8/RpFlG_LX5fQ.jpg">&#8205;</a>'
        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '1',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '•2•',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '3',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '4',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '5',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '6',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                                Button2,
                                Button3,
                                Button4,
                                Button5,
                                Button6],
                            [ButtonB]



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

    watch3VS: function(tg, callbackQuery){

        const text = '❣️ Вот таких результатов помогает достичь косметика <b>OzoneBox</b> ololo:'+ '<a href="https://pp.userapi.com/c841120/v841120315/24abd/cimEGZ6GRfc.jpg">&#8205;</a>'

        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '1',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '2',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '•3•',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '4',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '5',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '6',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                                Button2,
                                Button3,
                                Button4,
                                Button5,
                                Button6],
                            [ButtonB]



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

    watch4VS: function(tg, callbackQuery){
        let photo1 = '<a href="https://pp.userapi.com/c841120/v841120315/24ab4/2nbC5yIg-qs.jpg">&#8205;</a>'
        const text = '❣️ Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:'  + photo1


        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '1',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '2',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '3',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '•4•',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '5',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '6',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                                Button2,
                                Button3,
                                Button4,
                                Button5,
                                Button6],
                            [ButtonB]



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

    watch5VS: function(tg, callbackQuery){
        let photo5 = '<a href="https://pp.userapi.com/c841120/v841120315/24b04/h7b3Btfdmro.jpg">&#8205;</a>'
        const text = '❣️ Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:'  + photo5

        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '1',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '2',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '3',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '4',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '•5•',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '6',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                                Button2,
                                Button3,
                                Button4,
                                Button5,
                                Button6],
                            [ButtonB]



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

    watch6VS: function(tg, callbackQuery){
        let photo6 = '<a href="https://pp.userapi.com/c841120/v841120315/24ae1/0S3jqnd9dsw.jpg">&#8205;</a>'
        const text = '❣️ Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:'  + photo6

        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '1',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '2',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '3',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '4',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '5',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '•6•',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                                Button2,
                                Button3,
                                Button4,
                                Button5,
                                Button6],
                            [ButtonB]



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

    watchVS: function(tg, callbackQuery){
        let photo1 = '<a href="https://pp.userapi.com/c824600/v824600181/1dc6b/0aJfiOURMAU.jpg">&#8205;</a>\\n\''
        const text = ' let text = \'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:'  + photo1

        let ButtonB = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let Button1 = {
            text: '•1•',
            callback_data: 'photo1Cmd'
        }

        let Button2 = {
            text: '2',
            callback_data: 'photo2Cmd'
        }
        let Button3 = {
            text: '3',
            callback_data: 'photo3Cmd'
        }
        let Button4 = {
            text: '4',
            callback_data: 'photo4Cmd'
        }
        let Button5 = {
            text: '5',
            callback_data: 'photo5Cmd'
        }
        let Button6 = {
            text: '6',
            callback_data: 'photo6Cmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1,
                                Button2,
                                Button3,
                                Button4,
                                Button5,
                                Button6],
                            [ButtonB]



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



   /* hairVS: function(tg, callbackQuery){
        let text = 'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>:'  + '<a href="https://pp.userapi.com/c824600/v824600181/1dc6b/0aJfiOURMAU.jpg">&#8205;</a>\n'

        let Button1 = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
        }

        let options = Object.assign(
            {},
            {
                parse_mode: 'HTML',
                reply_markup: JSON.stringify(
                    {
                        inline_keyboard: [
                            [Button1],
                            [Button2],
                            [Button3],
                            [Button4],
                            [Button5],
                            [Button6],
                            [Button7],
                            [Button8],
                            [Button9],
                            [Button10]



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

    skinVS: function(tg, callbackQuery){
        let text = 'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>: '  + '<a href="https://pp.userapi.com/c840730/v840730134/200ac/LZYisinMYKg.jpg">&#8205;</a>\n'

        let Button1 = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
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

    bodyVS: function(tg, callbackQuery){
        let text = 'Вот таких результатов помогает достичь косметика <b>OzoneBox</b>: ' + '<a href="https://pp.userapi.com/c840730/v840730134/200a2/WZar-WMPCUI.jpg">&#8205;</a>\n'

        let Button1 = {
            text: '🔙',
            callback_data: 'goToBeforeAfterCmd'
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
    }
*/

}