import {modal} from "./modal";
export default function (removeBtnArray, url) {
	removeBtnArray.forEach(btn => {
		btn.addEventListener("click", () => {
			modal();
			document.addEventListener("click", async (e) => {
				if(e.target.classList.contains("btnYes")){
				const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
				const fakeVal = btn.parentElement.parentElement.firstElementChild.lastElementChild.value;
				await fetch(`http://localhost:8888/history`, {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({title: fakeVal, isComplete: true}) 
				})
				btn.parentElement.parentElement.remove();
				await fetch(`${url}/${fakeID}`, {
					method: "DELETE"
				});
				}
			})
		});
	});
}