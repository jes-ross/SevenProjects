class Display {
    constructor(displayLastValue, displayActualValue){
        this.displayActualValue = displayActualValue
        this.displayLastValue = displayLastValue
        this.calculator = new Calculator()
        this.operationType = undefined
        this.actualValue = ''
        this.lastValue = ''
        this.signs = {
            add: '+',
            substract: '-',
            division: '%',
            multiply:'x'
        }
    }

    delete(){
        this.actualValue = this.actualValue.toString().slice(0, -1)
        this.printValue()
    }


    deleteAll(){
        this.actualValue = ''
        this.lastValue = ''
        this.operationType = undefined
        this.printValue()
    }

    compute(type){
        this.operationType !== 'equal' && this.calc()
        this.operationType = type
        this.lastValue = this.actualValue || this.lastValue
        this.actualValue = ''
        this.printValue()
    }


    addNumber(number){
        if(number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString()
        this.printValue()
    }

    printValue(){
        this.displayActualValue.textContent = this.actualValue
        this.displayLastValue.textContent = `${this.lastValue} ${this.signs[this.operationType] || ''}`
    }

    calc(){
        const lastValue = parseFloat(this.lastValue)
        const actualValue = parseInt(this.actualValue)

        if( isNaN(actualValue) || isNaN(lastValue)) return
        this.actualValue = this.calculator[this.operationType](lastValue, actualValue)
    }
}