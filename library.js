
var Author = function(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
};

var Book = function(title, Available, publicationDate, checkoutDate, callNumber, Authors) {
this.title = title;
this.Available = Available;
this.publicationDate = publicationDate;
this.checkoutDate = checkoutDate;
this.callNumber = callNumber;
this.Authors = Authors;
};

Book.prototype.checkOut = function(){
this.Available = false;
var temp = new Date(1000000000);
var d = new Date()-temp;
var res = new Date(d);
this.checkoutDate = res;
};

Book.prototype.isOverdue = function(){
var oneDay=1000*60*60*24;
var todayDate = new Date().getTime();
var difference = todayDate - this.checkoutDate.getTime();
if(Math.round(difference/oneDay) >= 14){
return true;
}
return false;
};

var Patron = function(firstName, lastName, libraryCardNumber, booksOut, fine) {
this.firstName = firstName;
this.lastName = lastName;
this.libraryCardNumber = libraryCardNumber;
this.booksOut = booksOut;
this.fine = fine;
};

Patron.prototype.read = function(book){
this.booksOut.add(book);
}

Patron.prototype.read = function(book){
this.booksOut.remove(this.booksOut.length);
}


var authors = []
authors[0] = new Author("Dr","Seuss");
authors[1] = new Author("Curtis","Jackson");
authors[2] = new Author("Radric Davis");
authors[3] = new Author("Dwayne Carter");
authors[4] = new Author("Tom Sawyer");

var mybooks = []
mybooks[0] = new Book('Cat in The Hat',true,new Date(1991,5,20), new Date(), 10,authors);
mybooks[1] = new Book('From Pieces to Weight',true,new Date(2000,5,20), new Date(), 11,authors);
mybooks[2] = new Book('Autobiography of Gucci mane',true,new Date(2000,5,20), new Date(), 12,authors);
mybooks[3] = new Book('Gone Til November: A Journey of Rikers Island',true,new Date(2000,5,20), new Date(), 13,authors);
mybooks[4] = new Book('Tom Sawyer',true,new Date(2000,5,20), new Date(), 14,authors);

var patrons = []
patrons[0] = new Patron('master','jumbo',1,mybooks,0.00);
patrons[1] = new Patron('kyle','munro',1,mybooks,0.00);
patrons[2] = new Patron('master','jumbo2',1,mybooks,0.00);
patrons[3] = new Patron('master','jumbo3',1,mybooks,0.00);
patrons[4] = new Patron('master','jumbo4',1,mybooks,0.00);

var j = 0;
while(j < patrons.length){
var books = patrons[j].booksOut;
var fine = patrons[j].fine;
for(var i = 0;i if(books[i].isOverdue()){
fine = fine + 5.00;
}
}
patrons[j].fine = fine;
}
