const btnAdd=document.getElementById("btn-add");
const btnRemove=document.getElementById("btn-remove");
const input_Title=document.getElementById("title-expense")
const input_amount=document.getElementById("amount")
const list=document.getElementById("list-expense")
const total=document.getElementById("total")
let totalAmount=0;
btnAdd.addEventListener('click',()=>{
    const title=input_Title.value;
    const amount=input_amount.value;
    console.log( input_Title.value+" "+input_amount.value)
    let newLabel = document.createElement("ion-label");
    newLabel.textContent = `${title} : ${amount} $`; 
    let newItem = document.createElement("ion-item");
    newItem.appendChild(newLabel);
    list.appendChild(newItem);
    totalAmount+=+amount;
    total.textContent=totalAmount

})