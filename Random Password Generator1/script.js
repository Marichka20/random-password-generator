let password=document.getElementById("password1");

 function generatePassword() {
  let chars =[" IGotThePower21!!!!",
  "LoveOfMyLife(1-1=1+1)",
  "LadyInRed[1998-1999]",
  "AmazingGrace$100.100",
  "TheRussianGovernmentSucks-1",
  "HugsForDrugsandCats+1",
  "Loading…2023!!!!!!!!!!",
  "Pretty_Fly_For_A_Wi-Fi1",
  "!!!!!Lov3MyPiano!!!!!!!",
  "BankLogin!!!!3223333",
  "&ebAy.44.445500++++",
  "jelly22fi$hhhhhhhh12",
  "CrossingtheRiver(23)",
  "Back-to-Work1313313!!!!"
];
let password = "";
 for (let i = 0; i < chars.length; i++){
  password = chars[Math.floor(Math.random() * i)];
  }
  document.getElementById("password1").value = password;
 }

 
 let password2=document.getElementById("password2");

 function generatePassword2() {
  let chars =["WithFortune--2",
  "DestructiveKiss!!8",
  "MatchRock(8)",
  "GallonConfuse6%",
  "MassInternational3@",
  "TranslationWorse-9",
  "SweetenThreat009",
  "FairWicked@20",
  "Though%Sign 05",
  "Colony@Permission18",
  "Self!Efficiency2",
  "TreasuryFront!!2",
  "SlaveryAshamed!2",
  "FireBasket!"
];
let password = "";
 for (let i = 0; i < chars.length; i++){
  password = chars[Math.floor(Math.random() * i)];
  }
  document.getElementById("password2").value = password;
 }
