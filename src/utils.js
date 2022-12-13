//sorting logic for matching user uploaded spec against protocol specs (specs/specs.json)

const protocolSpecJson = require('./specs/specs.json')

export const matchProtocol = (userSpec) => {

    //with individual function check for each spec and return match %

    //for os, looking for string match (ex. "mac")

    let userOs = userSpec.os;
    let osMatches = [];

    for (let i = 0; i < protocolSpecJson.length; i++) {
        const protocolObjectOs = protocolSpecJson[i].os;
        for (let j = 0; j < protocolObjectOs.length; j++) {
            const osObj = protocolObjectOs[j];
            if (osObj.osName === userOs) {
                osMatches.push(protocolSpecJson[i])
            }
        }
    }

    //then for cpuCores, ram, storage, and serverCount need to find closest match and all > matches
    //TODO rewrite as single function with userSpec param and then modifies the globalMatch array/object
    let userCpuCores = userSpec.cpuCores;    
    let cpuCoreMatches = protocolSpecJson.filter(protocol => userCpuCores >= protocol.cpuCores);
    console.log("cpu matches", cpuCoreMatches);

    let userRam = userSpec.ram;
    let userRamMatches = protocolSpecJson.filter(protocol => userRam >= protocol.ram);
    let userRamMisses = protocolSpecJson.filter(protocol => userRam < protocol.ram);
    console.log("ram matches", userRamMatches);
    console.log("ram misses", userRamMisses);

    let userStorage = userSpec.storage;
    let userStorageMatches = protocolSpecJson.filter(protocol => userStorage >= protocol.storage);
    console.log("storage matches", userStorageMatches);

    let userServerCount = userSpec.serverCount;
    let userServerCountMatches = protocolSpecJson.filter(protocol => userServerCount >= protocol.serverCount);
    console.log("server count", userServerCountMatches);

    let userSpeed = userSpec.speed;
    let userSpeedMatches = protocolSpecJson.filter(protocol => userSpeed >= protocol.speed);
    console.log("speed count", userSpeedMatches);

    //for speed use the similar logic as above (return all protocols that are <= user uploaded speed AND "any")

    //cycle through the spec and find all the matches for os by exact string match

    //TODO write reduce function to combine matches and return to App.js

    //TODO write missing spec message for each spec ("you need 8 more GBs of RAM to run this protocol")
    

    return osMatches;

};

