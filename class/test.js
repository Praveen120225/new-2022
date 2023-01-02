class Account{
    min_bal=500
    acc_id;
    acc_name;
    constructor(id,name,amount){
        this.acc_id=id
        this.acc_name=name
        this.acc_amount=amount
    }


    deposit_Amount(amount){
        this.acc_amount=this.acc_amount+amount
    }
}
       
    
    let a1=new Account(101,"praveen",40000)
console.log(a1);
a1.deposit_Amount(2000)
console.log(a1);

class SA extends Account {
    min_Bal = 500
    acc_Amount;
    constructor(id, name, amount) {
        super(id, name);
        this.acc_Amount = amount
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}
let s1=new SA(100,"rahul",50000)
console.log(s1);
console.log(s1.get_Bal());
