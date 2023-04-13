let input = document.getElementById("inp3");
let output = getElementById("inp4")
input = (input.value);

var sum = 0;

for(let i=0; i<10; i++){
    sum = sum + Number(input.charAt(i));
}

var ans = ""
for(let i=1; i<=sum; i++)
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

