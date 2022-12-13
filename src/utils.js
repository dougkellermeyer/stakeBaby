//sorting logic for matching user uploaded spec against protocol specs (specs/specs.json)

const protocolSpecJson = require('./specs/specs.json')

export const matchProtocol = (userSpec) => {
    console.log(JSON.stringify(userSpec));
    
    //with individual function check for each spec and return match %

    //for os, looking for string match (ex. "mac")

    //then for cpuCores, ram, storage, and serverCount need to find closest match and all > matches
    // -> ex. user cpuCores: '8' should return NEAR as it's === 8 but also all protocols 
    // --> that require less than 8 cpus

    //for speed use the similar logic as above (return all protocols that are <= user uploaded speed AND "any")

    let userOs = userSpec.os;
    let osMatches = []; 

    //cycle through the spec and find all the matches for os by exact string match

    //test push comment

    for (let i = 0; i < protocolSpecJson.length; i++) {
        const protocolObjectOs = protocolSpecJson[i].os;
        for (let j = 0; j < protocolObjectOs.length; j++) {
            const osObj = protocolObjectOs[j];
            if(osObj.osName === userOs){
                osMatches.push(protocolSpecJson[i])
            }
        }
    }
   return osMatches;
};

