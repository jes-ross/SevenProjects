const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
const originalInput = document.getElementById('original-input')
const encryptor = document.getElementById('encryptor')
const result = document.getElementById('result')
const range = document.getElementById('range')




const shiftMessage = () => {
    const wordArray = [...originalInput.value.toUpperCase()]
    printChar(0, wordArray)
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return
    originalInput.value = originalInput.value.substring(1)
    const spanChar = document.createElement("span")
    result.appendChild(spanChar)
    animateChar(spanChar)
        .then(() => {
            const noEncryptedChar = wordArray[currentLetterIndex]
        spanChar.innerHTML = alphabet.includes(noEncryptedChar) ?
            alphabet[(alphabet.indexOf(noEncryptedChar) + parseInt(range.value)) % alphabet.length] :
            noEncryptedChar
        printChar(currentLetterIndex + 1, wordArray)
        })
    
}


const animateChar = spanChar => {
    let letterChanges = 0
    return new Promise(resolve => {
        const interval = setInterval(() => {
            spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)]
            letterChanges++
            if(letterChanges === 3){
                clearInterval(interval)
                resolve()
            }
        }, 50)
    })
}


const submit = e => {
    e.preventDefault()
    result.innerHTML = ''
    shiftMessage()
}


encryptor.onsubmit = submit