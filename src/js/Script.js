var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x;
var Literature = /** @class */ (function () {
    function Literature() {
    }
    return Literature;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(BookY, BookAu, BookH, BookL, BookG, BookAudio, BookE, BookN) {
        var _this = _super.call(this) || this;
        _this.b_w = false;
        _this.format = "A5";
        _this.year = BookY;
        _this.author = BookAu;
        _this.hardcover = BookH;
        _this.language = BookL;
        _this.genre = BookG;
        _this.audio = BookAudio;
        _this.e_book = BookE;
        _this.normal = BookN;
        return _this;
    }
    Book.prototype.getType = function () {
        x = "Book";
        window.alert("Book");
        return x;
    };
    return Book;
}(Literature));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b_w = false;
        _this.format = "A4";
        return _this;
    }
    Magazine.prototype.getType = function () {
        x = "Magazine";
        window.alert("Magazine");
        return x;
    };
    return Magazine;
}(Literature));
var Newspaper = /** @class */ (function (_super) {
    __extends(Newspaper, _super);
    function Newspaper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b_w = true;
        _this.format = "A3";
        return _this;
    }
    Newspaper.prototype.getType = function () {
        x = "Newspaper";
        window.alert("Newspaper");
        return x;
    };
    return Newspaper;
}(Literature));
var Martin_Eden = new Book(1909, "Jack London", "416 p", "eng", 1, "yes", "no", "yes");
// window.alert(Martin_Eden.getType());
document.getElementById("name1").innerText = "Martin Eden";
document.getElementById("year1").innerText = Martin_Eden.year.toString();
document.getElementById("author1").innerText = Martin_Eden.author;
document.getElementById("hardcover1").innerText = Martin_Eden.hardcover;
document.getElementById("language1").innerText = Martin_Eden.language;
genres(Martin_Eden);
document.getElementById("genre1").innerText = Martin_Eden.genre.toString();
document.getElementById("audio1").innerText = Martin_Eden.audio;
document.getElementById("e_book1").innerText = Martin_Eden.e_book;
document.getElementById("normal1").innerText = Martin_Eden.normal;
var War_and_Peace = new Book(1873, "Leo Tolstoy", "1,225 p", "ru", 2, "yes", "no", "no");
document.getElementById("name2").innerText = "War and Peace";
document.getElementById("year2").innerText = War_and_Peace.year.toString();
document.getElementById("author2").innerText = War_and_Peace.author;
document.getElementById("hardcover2").innerText = War_and_Peace.hardcover;
document.getElementById("language2").innerText = War_and_Peace.language;
document.getElementById("genre2").innerText = War_and_Peace.genre.toString();
document.getElementById("audio2").innerText = War_and_Peace.audio;
document.getElementById("e_book2").innerText = War_and_Peace.e_book;
document.getElementById("normal2").innerText = War_and_Peace.normal;
var Dubrovsky = new Book(1841, "Alexander Pushkin", "64 p", "ru", 1, "no", "no", "yes");
document.getElementById("name3").innerText = "Dubrovsky";
document.getElementById("year3").innerText = Dubrovsky.year.toString();
document.getElementById("author3").innerText = Dubrovsky.author;
document.getElementById("hardcover3").innerText = Dubrovsky.hardcover;
document.getElementById("language3").innerText = Dubrovsky.language;
document.getElementById("genre3").innerText = Dubrovsky.genre.toString();
document.getElementById("audio3").innerText = Dubrovsky.audio;
document.getElementById("e_book3").innerText = Dubrovsky.e_book;
document.getElementById("normal3").innerText = Dubrovsky.normal;
var Macbeth = new Book(1623, "William Shakespeare", "320 p", "eng", 3, "yes", "yes", "yes");
document.getElementById("name4").innerText = "Macbeth";
document.getElementById("year4").innerText = Macbeth.year.toString();
document.getElementById("author4").innerText = Macbeth.author;
document.getElementById("hardcover4").innerText = Macbeth.hardcover;
document.getElementById("language4").innerText = Macbeth.language;
document.getElementById("genre4").innerText = Macbeth.genre.toString();
document.getElementById("audio4").innerText = Macbeth.audio;
document.getElementById("e_book4").innerText = Macbeth.e_book;
document.getElementById("normal4").innerText = Macbeth.normal;
var The_Economist = new Magazine();
var Times = new Newspaper();
var b1 = document.getElementById("b1");
b1.addEventListener("click", function () { Martin_Eden.getType(); });
var b2 = document.getElementById("b2");
b2.addEventListener("click", function () { War_and_Peace.getType(); });
var b3 = document.getElementById("b3");
b3.addEventListener("click", function () { Dubrovsky.getType(); });
var b4 = document.getElementById("b4");
b4.addEventListener("click", function () { Macbeth.getType(); });
var b5 = document.getElementById("b5");
b5.addEventListener("click", function () { The_Economist.getType(); });
var b6 = document.getElementById("b6");
b6.addEventListener("click", function () { Times.getType(); });
function genres(b) {
    if (b.genre == "1") {
        b.genre = "Novel";
    }
    if (b.genre == "2") {
        b.genre = "Historical novel";
    }
    if (b.genre == "3") {
        b.genre = "Tragedy";
    }
}
