function addNewWEField(){
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=null;
    weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewAQField(){
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=null;
    aqOb.insertBefore(newNode,aqAddButtonOb);

}
function generateCV(){

    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //we
    let wes=document.getElementsByClassName("weField");
    let str=''

    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;

    //aq
    let aqs=document.getElementsByClassName("aqField");
     str=''

    for(let e of aqs){
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML=str;

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';


}
//printCV
function printCV(){
    window.print();
}