// UZDUOTIS 1

// function Notebook(totalPages, usedPages) {
//     this.totalPages = totalPages;
//     this.usedPages = usedPages;
// }

// Notebook.prototype.use = function(numberOfPages) {
//     this.usedPages += numberOfPages;
//     console.log(`Used pages: ${this.usedPages}`);
// }

// Notebook.prototype.leftPages = function() {
//     let leftPages = this.totalPages - this.usedPages;
//     console.log(`Left unused pages: ${leftPages}`);
// }


// UZDUOTIS 2:

// class Notebook {

//     constructor(totalPages, usedPages) {
//         this.totalPages = totalPages;
//         this.usedPages = usedPages;
//     }

//     use(numberOfPages) {
//         this.usedPages += numberOfPages;
//         console.log(`Used pages: ${this.usedPages}`);
//     }

//     leftPages() {
//         let leftPages = this.totalPages - this.usedPages;
//         console.log(`Left unused pages: ${leftPages}`);
//     }

//     set add(numberOfNewPages) {
//         this.totalPages += numberOfNewPages;
//         console.log(`Total pages: ${this.totalPages}`);
//     }

//     get getInfo() {
//         console.log(`This notebook has a total pages of ${this.totalPages}. Used pages: ${this.usedPages}`);
//     }
// }

// PAPILDOMA:

const Notebook = {
    use(numberOfPages) {
        this.usedPages += numberOfPages;
        console.log(`Used pages: ${this.usedPages}`);
    },
    leftPages() {
        let leftPages = this.totalPages - this.usedPages;
        console.log(`Left unused pages: ${leftPages}`);
    }
}

// ********** ********** **********
//             TESTING
// ********** ********** **********

// FOR FIRST AND SECOND TASK :
// function Notebook(totalPages, usedPages) {
//     this.totalPages = totalPages;
//     this.usedPages = usedPages;
// }


// FOR ADDITIONAL TASK:
const first = Object.create(Notebook);
const second = Object.create(Notebook);

first.totalPages = 100;
first.usedPages = 25;
second.totalPages = 500;
second.usedPages = 255;

// FOR FIRST AND SECOND TASK:
// const first = new Notebook(100, 25);
// const second = new Notebook(500, 255);

// SHARED:
console.log(first);
console.log(second);


console.log(first.use(20));
console.log(first.leftPages());
console.log(first);

console.log(second.use(100));
console.log(second.leftPages());
console.log(second);

// FOR SECOND TASK:
// first.getInfo;
// first.add = 1000;
// first.getInfo;
