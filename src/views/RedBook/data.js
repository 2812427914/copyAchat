// const chat = async (messageList, apiKey) => {
//     try {
//         const result = await fetch(
//             "http://gpt-proxy.jd.com/sse/gateway/azure/chat/completions",
//             {
//                 method: "post",
//                 // signal: AbortSignal.timeout(8000),
//                 // 开启后到达设定时间会中断流式输出
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${apiKey}`,
//                 },
//                 body: JSON.stringify({
//                     erp: "tangzihang1",
//                     model: "gpt-3.5-turbo",
//                     stream: true,
//                     messages: messageList,
//                 }),
//             }
//         );
//         return result;

//     } catch (error) {
//         throw error;
//     }
// }

const chat = async (messageList, apiKey) => {
    try {
        const result = await fetch(
            "https://api.chatanywhere.com.cn/v1/chat/completions",
            {   
                
                method: "post",
                // signal: AbortSignal.timeout(8000),
                // 开启后到达设定时间会中断流式输出
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo-16k",
                    stream: true,
                    messages: messageList,
                }),
            }
        );
        return result;

    } catch (error) {
        throw error;
    }
}

const test = () => {
    return 'asdf'
}
export default chat; test
