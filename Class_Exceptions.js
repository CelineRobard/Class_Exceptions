//Fait par : Céline Robard
//Le : 01/09/2021

//Examen mi-session : exercice 1

class Article{

    //Déclaration des attributs
    #reference;
    #prixHT;
    #tauxTaxe;

    //Initialisation des valeurs des attributs
    constructor(reference,prixHT,tauxTaxe){
            this.reference=reference;
            this.prixHT=prixHT;
            this.tauxTaxe=tauxTaxe;
    }

    //Lecture des attributs
    get reference(){
        return this.#reference;
    }
    get prixHT(){
        return this.#prixHT;
    }
    get tauxTaxe(){
        return this.#tauxTaxe;
    }
    get prixTTC(){
        return this.#prixHT*this.#tauxTaxe;      //propriété calculée
    }

    //Ecriture des attributs
    set reference(reference){
        if(ErreurSaisie.detecterVide(reference)){
            throw new Error('Veuillez compléter le champ référence');
        }else{
            if(ErreurFormat.detecterNombre(reference)){
                throw new Error('Veuillez saisir une chaîne de caractère')
            }else{
                this.#reference=reference;
            }
        }
    }
    set prixHT(prixHT){
        if(ErreurSaisie.detecterVide(prixHT)){
            throw new Error('Veuillez compléter le champ prixHT');
        }else{
            if(ErreurFormat.detecterString(prixHT)){
                throw new Error('Veuillez saisir un chiffre')
            }else{
                this.#prixHT=prixHT;
            }
        }
    }
    set tauxTaxe(tauxTaxe){
        if(ErreurSaisie.detecterVide(tauxTaxe)){
            throw new Error('Veuillez compléter le champ tauxTaxe');
        }else{
            if(ErreurFormat.detecterString(tauxTaxe)){
                throw new Error('Veuillez saisir un chiffre')
            }else{
                this.#tauxTaxe=tauxTaxe;   
            }
        }    
    }

    //Méthode d'affichage 
    afficher(){
        console.log('Référence : ' + this.#reference + ', PrixHT : ' + this.#prixHT + ', TauxTaxe ' + this.#tauxTaxe +  ', PrixTTC' + this.prixTTC);
    }

}

class ErreurFormat{
    
    static detecterString(variable){
        if(typeof(variable) === 'string'){
            return true;
        }else{
            return false;
        }
    }
    static detecterNombre(variable){
        if(typeof(variable) === 'number'){
            return true;
        }else{
            return false;
        }
    }
}

class ErreurSaisie{

    static detecterVide(variable){
        if(variable == ''){
            return true;
        }else if(variable == ' '){
            return true;
        }else if(variable == null){
            return true;
        }else{
            return false;
        }
    }
}

//Programme pour tester la classe Article

try {
    let chouxDeBruxelle=new Article('LEGVERT02353250',0.99,1.2);
    let siropErable=new Article('CONDIM3969440',5,1.05);
    let vinaigreBalsamique=new Article('CONDIM698745',7,1.10);

    console.log('-- Choux de Bruxelles --');
    chouxDeBruxelle.afficher();
    console.log('\n-- Sirop d\'érable --');
    siropErable.afficher();
    siropErable.reference='CONDIM6396878';
    siropErable.prixHT=10;
    siropErable.tauxTaxe=2.2;
    siropErable.afficher();
    console.log('\n-- Vinaigre Balsamique --');
    vinaigreBalsamique.afficher();

    console.log('\n-- tenter de générer un article avec un attribut manquant --');
    //let articleIncomplet=new Article(' ',1,1.5);
    //let articleIncomplet2=new Article('mon article incomplet','',1.5);
    let articleIncomplet3=new Article('mon article',1,null);

    console.log(articleIncomplet3.prixHT);
    
} catch (error) {
    console.log(error.message);  
}

