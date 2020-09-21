window.onload = () => {
  console.log("%c ", "padding: 400px");
  console.log(`     _     _
    | |   (_)
    | |__  _ _ __ ___   _ __ ___   ___
    | '_ \\| | '__/ _ \\ | '_ ' _ \\ / _ \\
    | | | | | | |  __/ | | | | | |  __/
    |_| |_|_|_|  \\___| |_| |_| |_|\\___|
    `);
  console.log(
    `%c contact email: kkfuri@gmail.com`,
    "color: #ffd000; padding: 12px 40px; background-color: black;"
  );
  setTimeout(
    () => document.querySelector("#presentation .card").classList.add("show"),
    400
  );
};
