
function Card(rank, suit){

    this.rank = rank;
    this.suit = suit;

    this.image = cardImage;
    this.toString = cardToString;

}

function cardToString(){

    var rank, suit;

    switch(this.rank){

        case 1: rank = "A"; break;
        case 2: rank = "2"; break;
        case 3: rank = "3"; break;
        case 4: rank = "4"; break;
        case 5: rank = "5"; break;
        case 6: rank = "6"; break;
        case 7: rank = "7"; break;
        case 8: rank = "8"; break;
        case 9: rank = "9"; break;
        case 10: rank = "10"; break;
        case 11: rank = "J"; break;
        case 12: rank = "Q"; break;
        case 13: rank = "K"; break;
        default: rank = null; break;

    }

    switch(this.suit){

        case 1: suit = "Clubs"; break;
        case 2: suit = "Diamonds"; break;
        case 3: suit = "Hearts"; break;
        case 4: suit = "Spades"; break;
        default: suit = null; break;

    }

    if (rank == null || suit == null){
        return "Invalid card.";
    }

    return rank + " of " + suit;
}

function cardImage(){

    var rank, suit;

    switch(this.rank){

        case 1: rank = "A"; break;
        case 2: rank = "2"; break;
        case 3: rank = "3"; break;
        case 4: rank = "4"; break;
        case 5: rank = "5"; break;
        case 6: rank = "6"; break;
        case 7: rank = "7"; break;
        case 8: rank = "8"; break;
        case 9: rank = "9"; break;
        case 10: rank = "10"; break;
        case 11: rank = "J"; break;
        case 12: rank = "Q"; break;
        case 13: rank = "K"; break;
        default: rank = null; break;

    }

    switch(this.suit){

        case 1: suit = "C"; break;
        case 2: suit = "D"; break;
        case 3: suit = "H"; break;
        case 4: suit = "S"; break;
        default: suit = null; break;

    }

    return "<img src='/cards_png_zip/PNG/'" + rank + suit + ".png' />";
}

var rank = parseInt((Math.random()*12)+1);
var suit = parseInt((Math.random()*3)+1);
var testCard = new Card(3, 2);
alert(testCard.toString())

function Deck(){

    this.cards = [];

    this.makeDeck = deckMakeDeck;
    this.shuffle = deckShuffle;
    this.deal = deckDeal;
    this.draw = deckDraw;
    this.addCard = deckAddCard;
    this.combine = deckStackDeck;
    
}


function deckMakeDeck(){

    var maxSuit = 4;
    var maxRank = 13;

    for (var suit = 1; suit <= maxSuit; suit++){
        for (var rank = 1; rank <= maxRank; rank++){
            this.cards.push(new Card(rank, suit));
        }
    }

}

function deckShuffle(){

    for(i = 0; i <= this.cards.length; i++){
        var tribute = parseInt(Math.random()*this.cards.length);
        var temp = this.cards[i];
        this.cards[i] = this.cards[tribute];
        this.cards[tribute] = temp;
    }

}

function deckDeal(){

    if (this.cards.length > 0){
        return this.cards.shift();
    }
    else
        return null;

}

function deckDraw(n){

    if(n-1 >= 0 && n-1 < this.cards.length){
       return this.cards.splice(n-1,1);
    }
    else
        return null

}

function deckAddCard(card){
    this.cards.push(card)
}

function deckStackDeck(deck){

    for (var i = 0; i < deck.cards.length; i++){
        this.cards.push(deck.cards[i])
    }
    deck.cards = [];

}

var deck = new Deck();
var hand = new Deck();

deck.makeDeck();
deck.shuffle();

alert(deck.cards);

for (var i = 0; i < 7; i ++){
    hand.addCard(deck.deal());
}

for (var i = 0; i < hand.cards.length; i++){
    $("#hand").append(hand.cards[i].image());
}

/*
alert(hand.cards);
deck.combine(hand);
alert (deck.cards);
alert (hand.cards);

deck.makeDeck();
deck.shuffle();

alert(deck.cards);
alert(deck.deal());
alert(deck.deal());
alert(deck.deal());
alert(deck.cards);

deck.shuffle();
alert(deck.cards);
alert(deck.draw(5));
*/
