//Numbers to check
//const input = "5, 23, 15, 30, 32, 3, 50, 100, 41, 51, 17, 19, 405, 230, 560, 140, 71, 490";
//let input = prompt("Add your numbers seperated by commas.")
//Start script when page is loaded.
window.addEventListener('load', onLoad);
function onLoad() {
    //Solve anagram on button click.
    document.getElementById('btn1').addEventListener('click', function () {
        //Get text in text element
        let input = document.getElementById('txtElement').value;
        //Split text input seperated by comma
        let numbers = input.split(", ");
        //Print input list on page
        document.write(" Numbers in list to check are: " + input + "</br>");

        //Check for every element in array
        for (let i = 0; i < numbers.length; i++) {

            // Make new array with every element sorted from 0-9
            let number = numbers[i];
            let sortNumber = number.split("").sort().join("");
            
            /*
            //Removing leading zeros
            let splitNumber = number.split("");
            let copySplit = splitNumber.slice(0);
            //Reverse number so trailing zeros become leading zeroes 100 -> 001
            //Convert numerical string to number to remove all preceding zeros
            let removeLeadingZeros = Number(copySplit.reverse().join('')).toString().length;
            //Reset length of array
            splitNumber.length = removeLeadingZeros;
            //Sort array from 1-9 and make 1 number
            let sortNumber = splitNumber.sort().join("");
            */
            
            //Check for every element in sorted array
            for (let j = 0; j < numbers.length; j++) {
                //Check for matches between input array and sorted array
                if (i === j) {
                    //If index is same then skip
                    continue;
                }

                //Continue to find same value between i & j index
                let matchNumber = numbers[j];
                if (sortNumber === matchNumber.split("").sort().join("")) {
                    //Print anagram match in console
                    console.log(number + " is an anagram for " + matchNumber);
                    //Print anagram match in page
                    document.write(number + " is an anagram for " + matchNumber + "</br>");
                }

            }
        }
    });
}