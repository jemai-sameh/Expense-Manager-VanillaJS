const btnAdd = document.getElementById("btn-add");
const btnCancel = document.getElementById("btn-cancel");
const input_Title = document.getElementById("title-expense")
const input_amount = document.getElementById("amount")
const list = document.getElementById("list-expense")
const total = document.getElementById("total")
let totalAmount = 0;

const CancelAllInput = () => {
    input_Title.value = "";
    input_amount.value = "";
}
const AlertMessage = async (header, message, buttons) => {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.message = message;
    alert.buttons = buttons;
    document.body.appendChild(alert);
    await alert.present();
}

btnCancel.addEventListener('click',()=> AlertMessage("Are you sure?", "", [{ text: "Cancel" }, { text: 'OK', handler: () => CancelAllInput() }]))
btnAdd.addEventListener('click', () => {
    const title = input_Title.value;
    const amount = input_amount.value;

    if (!title.trim().length || !amount.trim().length) {
        AlertMessage("ERROR", 'These fields are required!', ['OK'])
        return;
    }
    if (amount == 0) {
        AlertMessage("ERROR", 'Amount must be greater than zero!', ['OK'])
        return;
    }

    let newLabel = document.createElement("ion-label");
    newLabel.textContent = `${title} : ${amount} $`;
    let newItem = document.createElement("ion-item");
    newItem.appendChild(newLabel);
    list.appendChild(newItem);
    totalAmount += +amount;
    total.textContent = totalAmount;
    total.style.color = "red"
    CancelAllInput()

})



