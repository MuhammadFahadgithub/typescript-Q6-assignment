//Stripping Names: Store a person's name, and include some whitespace
// characters at the begining and end of the name. Make sure you use
// each character combination, "\t" and "\n", at least once. Print the
// name once, so the whitespace around the name is displayed. Then print
// the name after striping the white spaces.
var personName = "  \n\tMUHAMMAD FAHAD\t\n  ";
console.log(personName);
var without_whitespace = personName.trim();
console.log(without_whitespace);
