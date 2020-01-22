window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// ici j'effectue une assignation de prefixe prope à chaque navigateur
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
  
}
/*Les champs de ma base de données sont:
  Photo de profil 
  Nom et Prénom 
  Date de naissance
  Sexe 
  ville
  regions
  temperature
  pluviométrie
  l'humidité
*/
var db,store,tx,index;

var demande= window.indexedDB.open('Meteodatabase',1);// un appel pour ouvrir la base de donnés
demande.onupgradeneeded=function(e){
   let db=demande.result; 
   store = db.createObjectStore('ProfilStore',{keyPath:'pID',autoIncrement: true});
   index= store.createIndex('nom','nom',{unique:true})

}
demande.onerror=function(event){


  console.log("Problème lors de l'ouverture vérifier les droits d'accées");
  console.error('Database error :'+event.target.errorCode); 
};
demande.onsuccess=function(event){

  db=event.target.result;
   tx=db.transaction('ProfilStore','readwrite');
   store=tx.objectStore('ProfilStore');
   index=store.index('nom');
   db.onerror=function(event){
    console.log("Problème lors de l'ouverture vérifier les droits d'accées");
  console.error('Database error :'+event.target.errorCode); 
  
   }

   function stocker(user){
   
    store.add(user);
   }
  
   function update(user)
   {
    
     store.put(user);
    
   }

   


   let profil=store.get(2); 
   let profils=index.get('speedy');
   profil.onsuccess=function(){

    console.log(profil.result);
    console.log(profil.result.Sexe);
   }
    profils.onsuccess=function(){

    console.log(profils.result);
    console.log(profils.result.Sexe);
   }
   profil.onerror=function(event){
      console.error('Database error :'+event.target.errorCode);
   }
tx.oncomplete=function(){
  console.log('je ferme la transaction');

  db.close();
}
}
