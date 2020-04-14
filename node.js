const corlorsToIndex = array => {
 let res = "bleu";
 for (let i = 0; i < array.length; i++) {
 res += `Il y a la couleur ${array[i]} à l'index ${i}!`;
 if (i !== array.length - 1) {//si notre index est différent
de la longueur du tableau - 1
 res += '\n'; //on ajoute le caractère '\n' (retour à la
ligne)
 }
 }
 return (res);
}
console.log(corlorsToIndex(["bleu", "rouge", "jaune", "vert",
"violet", "blanc"]));
