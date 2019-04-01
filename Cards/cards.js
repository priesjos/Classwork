
function Card(rank, suit){

    this.rank = rank;
    this.suit = suit;

    this.toString = cardToString();
    this.createNode = cardCreateNode(); //handles images and graphics

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
        return "Invalid card."
    }

    return rank + " of " + suit;
}