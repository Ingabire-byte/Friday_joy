function classification(age){
    if(age >=0 && age <=12){
        return "MIMICRY";

    }else if(age >=13 && age <=19){
        return "SELF-DISCOVERY";
    }else if(age >=20 && age <=45){
        return "COMMITMENT";
}else{
    return "LEGACY";
}
}
console.log(classification(10));
console.log (classification(16));
console.log(classification(31));
console.log(classification(60));