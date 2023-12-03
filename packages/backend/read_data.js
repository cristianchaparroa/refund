
async function readData(cid) {
    const gateway = "https://aqua-urban-whippet-563.mypinata.cloud"
    const url = `${gateway}/ipfs/${cid}`
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
}

const response_ = readData('QmPnuvqusqqjyMKafk9ungb14fS9W5L8yVQsxVgUYRiD7Z')
console.log(response_)
