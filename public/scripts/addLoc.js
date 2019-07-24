let form = document.querySelector("form")
let input = document.querySelector("input");
let loader = document.querySelector(".loader")
let wrapperTo = document.querySelector(".wrapperTo")
let fallback = document.querySelector("div.fallback")
let tabPage = document.querySelector("div.tab")


let flag = false
let state = [];
class LocStorage {
    constructor(){
        console.log("obj");
        if(localStorage.getItem('locations')){
            flag = true;
            state = localStorage.getItem('locations').split("@")
            state.pop();
            console.log(state);
        }
        
    }
    refresh(){

        state = localStorage.getItem('locations').split("@");
        state.pop();
        console.log(state);
    }
    containLoc(loc){
        let flag = false;
        state.forEach(e =>{
            if(e===loc){
                flag = true;
            }
        })
        return flag
    }
    addLoc(loc){
        if(this.containLoc(loc)){
            fallback.textContent="location already saved :)";
        }
        else{
            state.push(loc);
            console.log(state,state.join("@"));
            let str = state.join("@")+"@";
            localStorage.setItem('locations',str)
            this.refresh()
            console.log(state)
        }
    }
   
}
let LOCAL = new LocStorage();

let tab= loc=>{
    let html = `<h3 class="display">${loc}</h3>
                <button class = "save">save</button>`
    return html;
}

function hasClass(element,className){
    let x= element.classList;
    for(i=0;i<element.classList.length;i++){
        if(x[i]==className){
            console.log("have this class")
            return true
        }
    }
    return false
}

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    fallback.textContent = "";
    /*remove hide class to loader if present*/
    if((hasClass(loader,'hide'))){
        loader.classList.toggle("hide");
    }
    /*add hide class to data if class removed from it by previous display of data*/
    if(!(hasClass(wrapperTo,'hide'))){
        wrapperTo.classList.toggle("hide");
    }
    
    let location = input.value;
    if(!location){
        fallback.textContent = "please enter a location";
        loader.classList.toggle("hide");
    }else{
        fetch("/location?q="+location).then((res)=>{
            res.json().then((data)=>{
                loader.classList.toggle("hide");/*add hide class to hide the loader*/
                wrapperTo.classList.toggle("hide");/*remove hide class to display data ehen available*/
                if(data.error){
                    return fallback.textContent= data.error;
                }
                
                let div = document.createElement('div').innerHTML(tab('axy'))
                tabPage.appendChild(div);
                save = document.querySelector('button.save')
                save.addEventListener('click',e =>{
                    e.preventDefault();
                    LOCAL.addLoc(display.textContent);
                    
                })
            })
        })
    }
    
});






 