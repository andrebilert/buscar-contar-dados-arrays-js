/*
Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

1 Contar o número de categorias e o número de livros em cada categoria
2 Contar o número de autores
3 Mostrar livros do autor Augusto Cury
4 Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert. T Kiyosaki e Sharon L. Lechter",
            },
            
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//1
const totalCategories = booksByCategory.length

for (let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

//2
function countAuthor(){

    //array que receberá os número de authors
    let authors = [];

    //laço para buscar category dentro de booksByCategory
    for (let category of booksByCategory){

        //laço para buscar authors dentro de category.books 
        for(let books of category.books){

            //verifica se o author está dentro do array, se não estiver será incluso
            if(authors.indexOf(books.author) == -1){

                //incluindo o author no array
                authors.push(books.author);
            }
        }
    }
    //caso retirar o length irá mostrar o nome dos authors
    console.log("Total de autores são: ", authors.length)
}

countAuthor()

//3
function booksOfAugustoCury(){

    //array que receberá os nomes dos titles
    let booksAugustoCury = [];

    //laço para buscar category dentro de booksByCategory
    for (let category of booksByCategory){

        //laço para buscar authors dentro de category.books 
        for(let books of category.books){

            //se o livro possuir author Augusto Cury
            if(books.author === 'Augusto Cury'){
                
                //inclui nome do livro no Array
                booksAugustoCury.push(books.title);
            }
        }
    }
    console.log("Os de livros do Augusto Cury são: ", booksAugustoCury)
}

booksOfAugustoCury()

//4

//terá parametro
function booksOfAuthor(author){

    //array que receberá os número dos titulos
    let booksAuthor = [];

    //laço para buscar category dentro de booksByCategory
    for (let category of booksByCategory){

        //laço para buscar authors dentro de category.books 
        for(let books of category.books){

            //se o livro possuir author solicitado por parametro
            if(books.author === author){
                
                //inclui nome do livro no Array
                booksAuthor.push(books.title);
            }
        }
    }
    //.join pode incluir alguma coisa entre as string, no caso virgula e espaço
    console.log(`Os de livros do ${author} são: ${booksAuthor.join(", ")} `)
}

booksOfAuthor('George S. Clason')