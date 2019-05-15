let hostName = window.location.hostname;
let protocol = window.location.protocol;
let host = window.location.host;
let baseUrl = protocol + "//" + host;

export const chatBotAppConfig = 
{
    localTest: true,
    hostName: hostName,
    protocol: protocol,
    host: host,
    baseUrl: baseUrl,
    chatBotController: '/api/ChatBot',
    chatBotSendQuestion: '/SendQuestionNew',
    //chatBotController: '/api/Incident',
    //chatBotSendQuestion: '/SendQuestion',
    welcomeObject: {
        textOne: 'Это система автоматической консультации. Задайте свой вопрос текстом или голосом.',
        textTwo: 'Если система не справится, напишите обращение, и инженер свяжется с вами в ближайшее время.'
    }
}