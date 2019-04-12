// add solution here
function theBeatlesPlay() {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 var empty = new Array();
 let MLength = musicians.length;
 let ILength = instruments.length;
 
 for (let i = 0; i<MLength;i++) {
   for (let j = 0; j < ILength; j++) {
     console.log(empty[musicians[i] + " plays " +instruments[j]]);
   }
 }
  
  
  
  
  
  
}