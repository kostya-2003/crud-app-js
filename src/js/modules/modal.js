export function modal(){
    const root = document.getElementById("root");
    const modal = document.createElement("div");
    const modalChild = document.createElement("div");
    const modalBtn = document.createElement("div")
    const h3 = document.createElement("h3");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    h3.textContent = "Are you sure ?"
    btn1.textContent = "Yes";
    btn2.textContent = "No";
    modal.className = "modal";
    modalChild.className = "modalChild";
    modalBtn.className = "modalBtn";
    btn1.className = "btnYes";
    btn2.className = "btnNo";
    modalChild.append(h3, modalBtn);
    modalBtn.append(btn1, btn2)
    modal.append(modalChild);
    root.append(modal);
    
    btn1.addEventListener("click", removeModal);
    btn2.addEventListener("click", removeModal);
}

export function  removeModal() {
    const modal = document.querySelector(".modal");
    modal.remove();
}

