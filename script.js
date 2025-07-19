const customtext = document.getElementById("customtext");
const customlist = document.getElementById("customlist");
const add_new_task = document.getElementById("add_new_task");

add_new_task.addEventListener("click", () => {
  const customtexts = customtext.value.trim();
  let createTime = new Date();
  let hours = createTime.getHours();
  let mintues = createTime.getMinutes();
  let second = createTime.getSeconds();
  let year = createTime.getFullYear();
  let month = createTime.getMonth() + 1;

  hours = hours <= 10 ? "0" + hours : hours;
  mintues = mintues <= 10 ? "0" + mintues : mintues;
  second = second <= 10 ? "0" + second : second;
  year = year <= 10 ? "0" + year : year;
  month = month <= 10 ? "0" + month : month;

  const fulltimes = `created: ${hours}:${mintues}:${second}: ${year}/${month}`;

  if (customtexts !== "") {
    const newitems = document.createElement("li");

    newitems.innerHTML = `
        ${customtexts} 
        <small>${fulltimes}</small>
        <br>
        <button id="remove_task">X</button>
        `;

    newitems.querySelector("#remove_task").addEventListener("click", () => {
      customlist.removeChild(newitems);
    });

    customlist.appendChild(newitems);
    customtext.value = "";
  } else {
    alert("Please Type Text To Add");
  }
});
