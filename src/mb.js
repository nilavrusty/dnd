let name  = {
    fn : 'Neelabh',
    ln : 'Dutta'
}

let printName = function(a,b){
    console.log(this.fn +' '+ this.ln + ' ' + a+ ' '+b)
}
let func = new Function()
func.prototype.mybind = function(...args){

    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
    
}

let pn2 = printName.mybind(name,'aaaaa','bbbbb')