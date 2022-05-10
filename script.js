const input = document.querySelector("input");
const div=document.querySelector ('div');
const passwords = ['wiosna', 'lato','jesień','zima'];
const messages = [ "- Weź parasol, bo może padać! - Zabierz kurtkę lub sweter, bo wieczory są chłodne! - Jeśli masz alergie, to pamiętaj, że jest dużo pyłków w powietrzu!"
, "- Pij dużo wody, aby się nie odwodnić! - Weź okulary słoneczne, bo ma prażyć słońce! - Nasmaruj się kremem z filtrem, bo oparzenia słoneczne nie są przyjemne!", 
"- Odżywiaj się zdrowo, bo to sezon zachorowań! - Ubierz czapkę, bo może być wietrznie! - Zrób i sporzywaj co wieczór syrop z cebuli!", 
"- Wychodząc z domu nie zapomnij czapki i szalika! - Kup sobie ciepłą kurtkę i buty! - Pamiętaj mróz cię nie zabije, a wręcz spacer na nim uodparnia!"];

const showMessage = (e) => {
    div.textContent='';
    const text =e.target.value;
 passwords.forEach((item, i) => {
    
  if (item.toLowerCase() === text.toLowerCase()) {
   div.textContent = messages[i];
   text ='';
 
  } 
 })
}

input.addEventListener('focus',(e)=>{
    e.target.classList.add('write');
})

input.addEventListener('blur',(e)=>{
    e.target.classList.remove('write');
})

input.addEventListener("input", showMessage)

