let input = document.getElementById("inp3");
let output = getElementById("inp4")
input = Number(input.value);

var ans = ""
for(let i=1; i<=input; i++)
{
    if(i%20 == 0){
        ans += "FizzBuzz ";
    } else if(i % 4 == 0){
        ans += "Fizz ";
    } else if(i%5 == 0){
        ans += "Buzz";
    } else {
        ans += i;
        ans += " ";
    }
}

output.innetText = ans;

