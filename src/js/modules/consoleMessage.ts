export function consoleMessage(email?: string) {
  console.log("%c ", "padding: 400px 0");
  console.log(`     _     _
    | |   (_)
    | |__  _ _ __ ___   _ __ ___   ___
    | '_ \\| | '__/ _ \\ | '_ ' _ \\ / _ \\
    | | | | | | |  __/ | | | | | |  __/
    |_| |_|_|_|  \\___| |_| |_| |_|\\___|
    `);
  if (email) {
    console.log(
      `%c contact email: ${email}`,
      "color: #ffd000; padding: 12px 40px; background-color: black;"
    );
  }
}
