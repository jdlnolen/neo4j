if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {

  Kadira.connect('tnZSKaY2ZGm2oaHeH', '331ce8c4-5210-45f7-b531-fb723d7a75b9');
  
  var Neo4j = Meteor.npmRequire('neo4j');
    var db = new Neo4j.GraphDatabase("http://meteor:WQcecdGj2Bj7pkYvPkUn@meteor.sb02.stations.graphenedb.com:24789");



  Meteor.startup(function () {
/*
    var Neo4j = Meteor.npmRequire('neo4j');
    var db = new Neo4j.GraphDatabase("http://meteor:WQcecdGj2Bj7pkYvPkUn@meteor.sb02.stations.graphenedb.com:24789");
    return db
    var name = user.emails[0].address + Date(); 
    db.query('CREATE (:User {_id:"' + name + '"})', null, function(err, res){
        if(err){
            //handle error here
        }
    });    
*/

});

  Accounts.onCreateUser(function(options, user) {
    var name = user.emails[0].address + Date();
    Meteor.defer(function() {
        db.query('CREATE (:User {_id:"' + name + '"})', null, function(err, res){
            if(err){
                //handle error here
            }
        });
    });
   
  return user;
});


}
