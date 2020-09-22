interface loadDatesTypes {
  birth: string;
  workingYear: number;
}

export function loadDates({ birth, workingYear }: loadDatesTypes) {
  const today = new Date();
  const birthDate = new Date(birth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const todayMonth = today.getMonth();
  const birthMonth = birthDate.getMonth();
  const workingTime = today.getFullYear() - workingYear;
  if (
    todayMonth < birthMonth ||
    (todayMonth == birthMonth && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  document.getElementById("age").textContent = age.toString();
  document.getElementById("working").textContent = workingTime.toString();
  return;
}
