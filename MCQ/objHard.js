let temp = {
    a:10,
    b:20,
    sum(){
        return this.a + this.b;
    },
    multi : ()=>{
        return this.a * this.b;
    }
}
console.log(temp.sum())
console.log(temp.multi())