const charPermutation = (str) => {
    
    // create a regex to check the matching char
    const regex = /(.)\1+/

    //creat a splitted char array
    const charArr = str.split('');
    const array = []
    let filteredSubArr;

    //return 0 if the of same  char appear back to back
    if (str.match(regex) !== null && str.amtch(regex)[0] === 0) return 0;


    

    //create a swapper function to swap char 
    const swapper = (index0, index1) => {
        let temp = charArr[index0]
        charArr[index0] = charArr[index1];
        charArr[index1] = temp;
    }
    
    //create a recursive function  using heap's algorithm
    const generate = (int) => {
        if (int == 1) {
            array.push(charArr.join(""))
        } else {
            for (let i = 0; i != int; ++1){
                generate(int - 1);
                swapper(int%2 ? 0: i, int-1)
            }
        }
    }

    generate(charArr.length)
    
    //get the filtere sub array with diff chars
    filteredSubArr = array.filter(char => {
       return  !char.match(regex)
    })

    console.log(filteredSubArr)
    return filteredSubArr.length

} 


charPermutation(("aa")) //=> 0
charPermutation(("zzzzzzz")) //=> 0
charPermutation(("aab")) //=> 2
charPermutation(("aabb")) //=> 0

charPermutation(("abcdefa")) //=> 3600