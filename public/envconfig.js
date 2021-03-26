const envConfig = (() => {
    let envstring ="__STRING__"
    envstring = envstring.split(';')
    let result = {
        API_URL:'http://api.dev.lan:3001',
        WEBSOCKET_HOST: 'http://api.dev.lan:9001'
    }
    for (let i=0;i<envstring.length;i++) {
        if (envstring[i].indexOf('=')+1) {
            let splitted = envstring[i].split('=')
            result[splitted[0].split('VUE_')[1]] = splitted[1]
        }
    }
    result.API_URL = result.API_URL[result.API_URL.length-1]==='/'?result.API_URL.slice(0,result.API_URL.length-1):result.API_URL
    result.WEBSOCKET_HOST = result.WEBSOCKET_HOST[result.WEBSOCKET_HOST.length-1]==='/'?result.WEBSOCKET_HOST.slice(0,result.WEBSOCKET_HOST.length-1):result.WEBSOCKET_HOST
    return result;
})();
