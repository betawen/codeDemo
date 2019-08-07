const urls = [
    "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33",
    "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33",
    "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33",
];

function getElective(url) {
    const reg = new RegExp("(^|&)elective=([^&]*)(&|$)", "i");
    const r = url.substr(1).match(reg);

    if (r != null) {
        return r[2] ? r[2].split(",") : [];
    }

    return [];
}

urls.forEach((url) => {
    const result = getElective(url);
    console.log(result);
});


/*** another way ************
function searchParams(url) {
    const searchParams = new URLSearchParams(url)
    const getElective = searchParams.get('elective')

    if(getElective) {
        return getElective.split(',').filter(item => item)
    } else {
        return []
    }
}
searchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33') // []
searchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33') // ["800"]
searchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33') // ["800","700"]
 */