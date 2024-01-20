function downloader(url) {
    console.log(`Downloading data from ${url}`)
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log(`Downloading done from ${url}`)
            resolve("File.txt")
        },4000)
    })
}

function writeFile(data) {
    console.log(`Writing on ${data}`)
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`writing done from ${data}`)
            resolve ([data,"qwe.com"])
        },2000)
    })
}

function uploadFile(fileName, newUrl) {
    console.log(`Uploading ${fileName} on ${newUrl}`)
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Uploading done on ${newUrl}`)
            resolve();
        },3000)
    })
}

// Step By Step
downloader("abc.com")
    .then((fileName) => {
        return writeFile(fileName)
    })
    .then((array)=>{
        return uploadFile(array[0],array[1])
    })

// Download Upload
downloader("abc.com")
    .then((filName)=> {
        return uploadFile(filName,"uvc.com")
    })