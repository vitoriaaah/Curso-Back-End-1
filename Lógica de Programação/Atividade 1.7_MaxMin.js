
function entredois(num, min,max,inclusivo=false){
    if(inclusivo ==true){
        return num>= min && num<=max  ;
    }else{
      return num> min && num<max;
    }
}
