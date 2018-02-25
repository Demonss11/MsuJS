function twoToTen(sTwo){
    let l = sTwo.length - 1;
    nInt = 0;
    for(i=0;i<=l;i++){
        if(sTwo[i] == '1'){
            nInt = nInt + Math.pow(2,l-i);
        } else if(sTwo[i] == '0'){
            //'nothing '
        }else{
            return;
        }
    }
    return nInt;
}
console.log(twoToTen('1001011'));