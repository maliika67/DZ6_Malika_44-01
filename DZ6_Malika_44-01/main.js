//home work

const input = document.querySelector("input");
const lists = document.querySelector(".lists");


const list =[];

const createReverseList = () => {
    const text = input.value;
    if (text ){
        list.push(text);

        input.value = "";
        lists.innerHTML = "";
    }

    list.forEach((item,index,array) =>{
        const p = document.createElement("p");
        p.textContent = item.split('').reverse().join('');
        lists.append(p);
    });
    console.log(list)
}

input.onkeydown = (e) => {
    if (e.key === "Enter"){
        createReverseList();

    }
}