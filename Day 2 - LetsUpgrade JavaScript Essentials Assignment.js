// Question 1:
//program to search for a particular character in a string

let string = "Java Essential";

//comparing for n in string
let char='n'

let c=0;

for(let i=0;i<string.length;i++)
{
    if(string[i]==char){
        c++;

    }

}

if(c>0){
    console.log("charachter exist");
}
else{
    console.log("element dosent exist!")
}


// Question 2:
//Program to convert minutes to seconds

let minutes = 500;
let seconds=0;
for(let i=1;i<=minutes;i++)
{
    seconds=seconds+60;
}
console.log(minutes+" minutes has "+seconds+" seconds");


//Question 3
//Program to search for a element in a array of strings

let array_string = ['Rony will be going today. Rony is leaving for Usa. Dont know when Rony will return'];
let present='today';
let c=0;
for(let i=0;i<array_string.length;i++)
{
    if(array_string[i]==present)
    {
      c++;  
    }
    
}

if (c > 0) {
    console.log("match Found");;
}
else {
    console.log("match not Found");
}


//Question 4
//Program to display only elements containing 'a' in them from a array

let array_string = ['Rony will be going today. Rony is leaving for Usa. Dont know when Rony will return'];
let c=0;
for(let i=0;i<array_string.length;i++)
{
    for(let j=0;j<i.length;j++)
    {
        if(i[j]=='a')
        {
            console.log(i);
            c++;
        }
    }
}

if(c==0)
{
    console.log("No element with an A in it");
}


//Question 5
//Print an array in reverse order

let array_string = ['Rony will be going today. Rony is leaving for Usa. Dont know when Rony will return'];
for(let i=array_string.length;i>=0;i--)
{
    console.log(array_string[i]);
}


