#!/usr/bin/env node

const buff = [];
const lString = function(str, limit, lastMsg){
    if (!lastMsg) {
        lastMsg = "\n\nToo large to show...";
    }

    if (limit < lastMsg.length) {
        throw Error(`限制的长度应该大于 ${lastMsg.length}`);
    }

    // TODO...
    let tmp = '';
    // lastMsg = str.length > limit ? lastMsg : '';
    while(str.length > limit) {
        tmp += str.substring(0,limit)
        tmp += '\n'
        tmp += lastMsg;
        str = str.substring(limit);
    }
    tmp += str;
    return tmp;
}

process.stdin.on('data', (data) => {
    buff.push(data)
});

process.stdin.once('end', () => {
    const str = Buffer.concat(buff).toString('UTF-8');
    const lastMsg = "\n\nToo large to show...";

    // 测试用例按248代替2048准备，请保持参数不变
    const res = lString(str,248,lastMsg);
    process.stdout.write(res);
});