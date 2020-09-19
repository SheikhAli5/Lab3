let x:string;
    interface IUsing {
    audio:string;
    normal:string;
    e_book:string;
}
interface IType{
    getType();
}
abstract class Literature {
    format:string;
    protected b_w:boolean;
    publisher:string;
}
class Book extends Literature implements IUsing,IType{
        b_w = false;
        readonly format = "A5";
        year:number;
        author:string;
        hardcover:string;
        language:string;
        genre:number;
        audio: string;
        e_book: string;
        normal: string;

    constructor(BookY: number, BookAu: string, BookH: string, BookL: string, BookG: number, BookAudio: string, BookE: string, BookN: string) {
        super();

        this.year = BookY;
        this.author = BookAu;
        this.hardcover = BookH;
        this.language = BookL;
        this.genre = BookG;
        this.audio = BookAudio;
        this.e_book = BookE;
        this.normal = BookN;

    }
        getType(){
            x="Book";
            window.alert("Book");
            return x;
        }


    }
class Magazine extends Literature{
    b_w = false;
    readonly format = "A4";
    getType(){
        x="Magazine";
        window.alert("Magazine");
        return x;

    }
}
class Newspaper extends Literature{
    b_w = true;
    readonly format = "A3";
    getType(){
        x="Newspaper";
        window.alert("Newspaper");
        return x;

    }
}

let Martin_Eden: Book =  new Book(1909,"Jack London","416 p","eng",1,"yes","no","yes");
// window.alert(Martin_Eden.getType());

(<HTMLInputElement>document.getElementById("name1")).innerText="Martin Eden";
(<HTMLInputElement>document.getElementById("year1")).innerText=Martin_Eden.year.toString();
(<HTMLInputElement>document.getElementById("author1")).innerText=Martin_Eden.author;
(<HTMLInputElement>document.getElementById("hardcover1")).innerText=Martin_Eden.hardcover;
(<HTMLInputElement>document.getElementById("language1")).innerText=Martin_Eden.language;
genres(Martin_Eden);
(<HTMLInputElement>document.getElementById("genre1")).innerText=Martin_Eden.genre.toString();
(<HTMLInputElement>document.getElementById("audio1")).innerText=Martin_Eden.audio;
(<HTMLInputElement>document.getElementById("e_book1")).innerText=Martin_Eden.e_book;
(<HTMLInputElement>document.getElementById("normal1")).innerText=Martin_Eden.normal;


let War_and_Peace: Book =  new Book(1873,"Leo Tolstoy","1,225 p","ru",2,"yes","no","no");
(<HTMLInputElement>document.getElementById("name2")).innerText="War and Peace";
(<HTMLInputElement>document.getElementById("year2")).innerText=War_and_Peace.year.toString();
(<HTMLInputElement>document.getElementById("author2")).innerText=War_and_Peace.author;
(<HTMLInputElement>document.getElementById("hardcover2")).innerText=War_and_Peace.hardcover;
(<HTMLInputElement>document.getElementById("language2")).innerText=War_and_Peace.language;
(<HTMLInputElement>document.getElementById("genre2")).innerText=War_and_Peace.genre.toString();
(<HTMLInputElement>document.getElementById("audio2")).innerText=War_and_Peace.audio;
(<HTMLInputElement>document.getElementById("e_book2")).innerText=War_and_Peace.e_book;
(<HTMLInputElement>document.getElementById("normal2")).innerText=War_and_Peace.normal;

let Dubrovsky: Book =  new Book(1841,"Alexander Pushkin","64 p","ru",1,"no","no","yes");
(<HTMLInputElement>document.getElementById("name3")).innerText="Dubrovsky";
(<HTMLInputElement>document.getElementById("year3")).innerText=Dubrovsky.year.toString();
(<HTMLInputElement>document.getElementById("author3")).innerText=Dubrovsky.author;
(<HTMLInputElement>document.getElementById("hardcover3")).innerText=Dubrovsky.hardcover;
(<HTMLInputElement>document.getElementById("language3")).innerText=Dubrovsky.language;
(<HTMLInputElement>document.getElementById("genre3")).innerText=Dubrovsky.genre.toString();
(<HTMLInputElement>document.getElementById("audio3")).innerText=Dubrovsky.audio;
(<HTMLInputElement>document.getElementById("e_book3")).innerText=Dubrovsky.e_book;
(<HTMLInputElement>document.getElementById("normal3")).innerText=Dubrovsky.normal;
let Macbeth: Book =  new Book(1623,"William Shakespeare","320 p","eng",3,"yes","yes","yes");
(<HTMLInputElement>document.getElementById("name4")).innerText="Macbeth";
(<HTMLInputElement>document.getElementById("year4")).innerText=Macbeth.year.toString();
(<HTMLInputElement>document.getElementById("author4")).innerText=Macbeth.author;
(<HTMLInputElement>document.getElementById("hardcover4")).innerText=Macbeth.hardcover;
(<HTMLInputElement>document.getElementById("language4")).innerText=Macbeth.language;
(<HTMLInputElement>document.getElementById("genre4")).innerText=Macbeth.genre.toString();
(<HTMLInputElement>document.getElementById("audio4")).innerText=Macbeth.audio;
(<HTMLInputElement>document.getElementById("e_book4")).innerText=Macbeth.e_book;
(<HTMLInputElement>document.getElementById("normal4")).innerText=Macbeth.normal;
let The_Economist: Magazine = new Magazine();

let Times: Newspaper = new Newspaper();

let b1 = document.getElementById("b1");
b1.addEventListener("click",function (){Martin_Eden.getType()});

let b2 = document.getElementById("b2");
b2.addEventListener("click",function (){War_and_Peace.getType()});

let b3 = document.getElementById("b3");
b3.addEventListener("click",function (){Dubrovsky.getType()});

let b4 = document.getElementById("b4");
b4.addEventListener("click",function (){Macbeth.getType()});

let b5 = document.getElementById("b5");
b5.addEventListener("click",function (){The_Economist.getType()});

let b6 = document.getElementById("b6");
b6.addEventListener("click",function (){Times.getType()});

function genres(b) {
    if(b.genre=="1"){
        b.genre="Novel"
    }
    if(b.genre=="2"){
        b.genre="Historical novel"
    }
    if(b.genre=="3"){
        b.genre="Tragedy"
    }

}