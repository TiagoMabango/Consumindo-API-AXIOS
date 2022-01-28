async function getContent() {
  try {
    const res = await fetch(`http://localhost:4567/`);
    const data = await res.json();
    showUsers(data);
  } catch (error) {
    console.log(error);
  }
}

getContent();

function showUsers(data) {
  let output = "";
  data.forEach(({ name }) => {
    output += `
      <li>Nome : ${name}</li>
    `;
  });
  document.querySelector("#app").innerHTML = output;
}
