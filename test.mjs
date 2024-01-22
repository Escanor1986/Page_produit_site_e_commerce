const array = new Array(100).fill().map((e, i) => i + 1);
const target = Math.floor(Math.random() * 100);

let numberOfTries = 0;

const binarySearch = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    numberOfTries++;
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (array[midIndex] == target) {
      console.log(`You found the anwser in ${numberOfTries} attempt !`);
      return array[midIndex];
    } else if (array[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  console.error("The number you're looking for is not in the present array !");
  return -1;
};

console.log(binarySearch(array, target));

// Implémentation en utilisant la récursivité

const recursiveBinarySearch = (array, target, start, end) => {
  if (start > end) {
    return null;
  } else {
    let mid = Math.floor((start + end) / 2);
    numberOfTries++;
    console.log(
      `L'index de départ est le : ${start} \n L'index de fin est le : ${end}`
    );
    if (array[mid] === target) {
      return mid + 1; // car mid retourne l'index et non le nombre à rechercher
    } else if (array[mid] < target) {
      return recursiveBinarySearch(array, target, mid + 1, end);
    } else {
      return recursiveBinarySearch(array, target, start, mid - 1);
    }
  }
};

console.log(recursiveBinarySearch(array, target, 0, array.length - 1));

let voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2021,
  afficherInfo: function () {
    return `${this.marque} ${this.modele} (${this.annee})`;
  },
};

console.log(voiture.afficherInfo());

// Ajout d'une nouvelle prorpiété
voiture.couleur = "fushia";

// modification d'une propriété existante
voiture.annee = 2022;

// Suppression d'une propriété
delete voiture.modele;

// accéder à une propriété de l'objet
console.log(voiture.marque);

let bibliotheque = [
  { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", pages: 96 },
  { titre: "1984", auteur: "George Orwell", pages: 328 },
  { titre: "Le Meilleur des mondes", auteur: "Aldous Huxley", pages: 254 },
];

// Ajouter un nouveau livre à la fin du tableau (car au début cela
// impliquerait de déplacer tous les index et donc nécessite plus de mémoire)
bibliotheque.push({ titre: "Dune", auteur: "Frank Herbert", pages: 600 });

// Afficher deux propriétés des objets contenue dans le tableau
console.log(
  bibliotheque.map(elem => {
    return elem.titre + "  de  " + elem.auteur;
  })
);

// Recher un livre son titre et retourner l'objet dont question
const getBook = bibliotheque.filter((elem, index) => {
  if (elem.titre === "Le Petit Prince") {
    return bibliotheque;
  }
});

console.log(getBook);

// Afficher le titre et l'auteur de chaque livre
bibliotheque.forEach(livre => {
  console.log(`${livre.titre} de ${livre.auteur}`);
});

// Rechercher un livre par son titre
function trouverLivreParTitre(titre) {
  return bibliotheque.find(livre => livre.titre === titre);
}

const livreRecherche = trouverLivreParTitre("Le Petit Prince");
console.log(livreRecherche);
