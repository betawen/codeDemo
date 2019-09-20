function sleep(time) {
    let startTime = new Date()
    while (new Date() - startTime < time) {}
    console.log('1s over')
}
new Promise(resolve => resolve()).then(() => {
    console.log('promise')
})

setTimeout(() => {
    console.log('setTimeout - 1')
    setTimeout(() => {
        console.log('setTimeout - 1 - 1')
        sleep(10)
    })
    new Promise(resolve => resolve()).then(() => {
        console.log('setTimeout - 1 - then')
        new Promise(resolve => resolve()).then(() => {
            console.log('setTimeout - 1 - then - then')
        })
    })
    // process.nextTick(() => {
    //     console.log('next tick')
    // })
    sleep(10)
})
process.nextTick(() => {
    console.log('nextTick');
})
setTimeout(() => {
    console.log('setTimeout - 2')
    setTimeout(() => {
        console.log('setTimeout - 2 - 1')
        sleep(10)
    })
    new Promise(resolve => resolve()).then(() => {
        console.log('setTimeout - 2 - then')
        new Promise(resolve => resolve()).then(() => {
            console.log('setTimeout - 2 - then - then')
        })
    })
    sleep(10)
})
console.log('start')