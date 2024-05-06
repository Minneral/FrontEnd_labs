function first (arr : number[]) {
    
      const areaCode = arr.slice(0, 3).join('');
      const firstPart = arr.slice(3, 6).join('');
      const secondPart = arr.slice(6).join('');
    
      return `(${areaCode}) ${firstPart}-${secondPart}`;
}

function second(amount: number, digit: number)
{
    if(digit < 0)
        return 0;

    let sum : number = 0;
    
    for(let i = 0; i < amount; i++)
    {
        if(i < digit)
        {
            if(i % 3 == 0 || i % 5 == 0)
            {
                sum += i;
            }
        }
    }

    return sum;
}

function third(arr : number[], step: number)
{
    if(step < 0) {
        return null;
    }

    return arr.slice(arr.length - step).concat(arr.slice(0, arr.length-step));  
}

function fourth(arr1: number[], arr2: number[])
{
    let arr: number[] = arr1.concat(arr2);
    arr = arr.sort();

    if(arr.length % 2 == 0)
    {
        return (arr[arr.length/2-1] + arr[arr.length/2])/2;
    }
    else
    {
        return arr[arr.length/2];
    }
}

console.log(first([1,2,3,4,5,6,7,8,9]));
console.log(second(10, 6));
console.log(third([1,2,3,4,5,6,7,8], 3));
console.log(fourth([1,3,5], [2,4,6]));