var Item=document.getElementById('Tracker');
var Itemlist=document.getElementById('itemList');
Item.addEventListener('submit',function(event){
    event.preventDefault();
    var Name=document.getElementById('name').value;
    var itemName=document.getElementById('item').value;
    var Quantity=document.getElementById('QTY').value;
    var money=document.getElementById('amount').value;
    var phone=document.getElementById('mobile').value;
    if(Name.trim()=== ' ' || itemName.trim()=== ' ' || Quantity.trim()=== ' ' || money.trim()=== ' ' || phone.trim()=== ' '){
        alert("please fill the all manadatory details ");
        return;
    }
    var listItem=document.createElement('li');
    Itemlist.textContent = 'Name:' + Name + 'item :' + itemName +'quantity :'+ Quantity +'amount :'+ money + 'phone number :'+ phone ;
    var deleteButton = document.createElement('button');
    deleteButton.textContent='Edit';
    deleteButton.addEventListener('click',function(){
        listItem.remove()
    });

    listItem.appendChild(deleteButton);
    Itemlist.appendChild(listItem);
    Item.reset();
})