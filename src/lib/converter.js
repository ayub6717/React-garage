// Input hisebe jokhon amra farenhit ke pabo tokhon ei converter kaaz korbe, ekhane props ke newa hoyeche

export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
// Input hisebe jokhon amra Celcious ke pabo tokhon ei converter kaaz korbe, ekhane props ke newa hoyeche
export function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}


// input hisebe temperature ke nibe ebong kon input function ke call korte hobe sheta nibe 
export function convert(temperature, convertTo) {
const input = parseFloat(temperature); {/* input a ke float number kore nicchi*/}
    if (Number.isNaN(input)) {
        return ''; 
        //eki sathe check korhi number kina? eta jodi number na hoy amra return kore dicchi blank
    }
    const output = convertTo(input); {/*converTwo e je input pabo shetar output convert kore nicchi*/}
    const rounded = Math.round(output * 1000) / 1000; {/*round korar jonno doshomik er pore koto gho nibo*/}
    return rounded.toString(); 
    //*string e convert kore [nilam]
}