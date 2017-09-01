var issort = (data)=>{
    for(var i = 0;i<data.length;i++){
        for(var j = i-1;j>=0;j--){
            if(data[j]>data[j+1]){
                data[j]+=data[j+1];
                data[j+1]=data[j]-data[j+1];
                data[j]-=data[j+1];
            }
        }
    }
    //callback(null,data);
}
var input=[23,21,76,16,52,43];
issort(input);
console.log(input);
