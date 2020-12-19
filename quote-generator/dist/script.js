let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  "“First, solve the problem. Then, write the code.” –- John Johnson",
  "“Experience is the name everyone gives to their mistakes.” –- Oscar Wilde",
  "“Java is to JavaScript what car is to Carpet.” -– Chris Heilmann",
  "“Ruby is rubbish! PHP is phpantastic!” -– Nikita Popov",
  "“If at first you don’t succeed; call it version 1.0” -– Unknown",
  "“If it works, don’t touch it!” -– Unknown",
  "“Weeks of programming can save you hours of planning.”-– Unknown",
  "“Talk is cheap. Show me the code.” -― Linus Torvalds",
  "“Happiness should be a function without any parameters.” -― Pranshu Midha",
  "“Programming is not easy like Sunday morning, it is silent poetry.”-― Waseem Latif",
  "“Life does not have a ctrl-z. Type wisely.”-― Imtiaz Iqbal",
  "“Enlightenment is the unprogrammed state.” -― Jed McKenna",
  "“People do not care about what you say, they care about what you build.” -- Mark Zuckerberg",
  "“If it is not hard, you are not learning anything” --Unknown"
];
btn.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});

let bgcolors = [
  "#734dcc",
  "#3a0057",
  "#bb4430",
  "#6e00ff",
  "#844329",
  "#654597",
  "#62a399",
  "#8b80f9",
  "#36382e"
];

btn.addEventListener("click", function () {
  let randomQuote = bgcolors[Math.floor(Math.random() * bgcolors.length)];
  document.getElementById("bgcolors").style.backgroundColor = randomQuote;
});