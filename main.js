// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
}
   
/*3.
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided  
*/
function pAequorFactory(Onum , DNAarray){
let survive = true;  

this.specimenNum= Onum;
this.dna= DNAarray;  

/*
Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. 
Then .mutate() will return the object’s dna.
For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 
'A' again.
*/  
this.mutate= function(){
    let tempBase = returnRandBase();
    if(tempBase === specimen.dna){
      returnRandBase();
    }else{
      specimen.dna = tempBase;
    }
  },

  /*Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) 
  to the returned object of the factory function.

.compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are 
identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two 
objects have in common — use the .specimenNum to identify which pAequor objects are being compared. */    
  this.compareDNA= function(pAequorsample){
    let same = 0;
    let common = 0;

    for(let i = 0; i < pAequorsample.dna.length; i++){
      if(this.dna[i] === pAequorsample.dna[i]){
        same += 1;
      }
       common = same/this.dna.length* 100
       common = parseInt(common);
    }
    console.log('Specimen 1 and specimen 2 have ' + common + ' in common.');
  }

/*P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

In the returned object of pAequorFactory(), add another method .willLikelySurvive().

.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns 
false. */
  this.willLikelySurvive = function (){
    let cOccurence = 0;
    let gOccurence = 0;

    for(i = 0; i < this.dna.length; i++){
       if(this.dna[i] === 'C'){
        cOccurence += 1;
       }
       if(this.dna[i] === 'G'){
        gOccurence += 1;
       }
    }        
    
    cOccurence = cOccurence/this.dna.length * 100;
    gOccurence = gOccurence/this.dna.length *100;
    
    if(cOccurence < 60 || gOccurence < 60){
      survive = false;
    }
    return survive;
  }
} 
/*
With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. 
Store these instances in an array for your team to study later. */
let pAequorSurvivers = [];
for(i=1; i <= 30; i++){
  let newObject = new pAequorFactory(i, mockUpStrand()); 
  pAequorSurvivers.push(newObject);   
  }

console.log(pAequorSurvivers);





  
  
  
    

       
  