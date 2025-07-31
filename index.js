function convertToCelsius(farenheit){
    return (farenheit - 32) * 5/9;
}
    function describeTemperature(farenheit) {
        const celsius = convertToCelsius(farenheit)
        let description = `${farenheit}°F is ${celsius.toFixed(2)}°C, which is `;
   if (celsius < 0) { description += "very cold";}
    else if (celsius < 20 ) { description += "cold"}
        else if (celsius < 30 ) {description += "warm";}
            else if (celsius < 40) {description += "hot";}
                else if (celsius >= 40) {description += "very hot"}
                    else {description += "how are you alive?"}
                        return description;}
const farenheitInput = prompt("Enter a temperature in Fahrenheit:");
const description = describeTemperature(farenheitInput);
alert(description);