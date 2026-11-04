const paperContainer = document.getElementById("paperContainer");

async function fetchPaperData() {
    try {
        const response = await fetch("https://upadhayay.github.io/db.json");

        const data = await response.json();

        const books = data.books;

        let publishedBooks = [];
        for (const book of books)
        {
            if(book.published)
            {
                publishedBooks.push(book);
            }
        }
        


        let bookCount = 0;

        for (const book of publishedBooks)
        {   
            let newArticle = document.createElement("article");
            newArticle.classList.add("paper");
            if (publishedBooks.length - bookCount < 3 && publishedBooks.length % 3 != 0 || publishedBooks.length - bookCount <= 4 && publishedBooks.length % 3 === 1)
            {
                newArticle.style.gridColumn = "span 3";
            }
            else {
                newArticle.style.gridColumn = "span 2";
            }
            

            let newPaperIcon = document.createElement("h1");
            newPaperIcon.classList.add("paperIcon");
            newPaperIcon.textContent = "📄";

            let newInfoDiv = document.createElement("div");
            newInfoDiv.classList.add("paperInfo");

            let newTitle = document.createElement("p");
            newTitle.textContent = book.title;
            newTitle.classList.add("paperTitle");
            

            let newYear = document.createElement("p");
            newYear.textContent = `Year: ${book.year}`;
            newYear.classList.add("paperYear");

            let newPublished = document.createElement("aside");
            newPublished.textContent = `Published: ${book.published ? "Yes" : "No"}`;
            newPublished.classList.add("paperPublished");


            newInfoDiv.append(newTitle);
            newInfoDiv.append(newYear);
            newInfoDiv.append(newPublished);

            newArticle.append(newPaperIcon);
            newArticle.append(newInfoDiv);
            
            paperContainer.append(newArticle);
            bookCount++;
        }
    }
    catch (error) {
        console.error("Could not load data");
    }
}

fetchPaperData();

const menuToggle = document.querySelector("#hamburgerMenu");
    const navLinks = document.querySelectorAll(".navLinks"); //all goes through all instances of navLinks class
    const menu = document.querySelector("#menu");

    menuToggle.addEventListener("click", function() {
        navLinks.forEach(function(navLink) {
            navLink.classList.toggle("open"); //adds class open when hamburger menu is opened for each navLink
        });
        
        menu.classList.toggle("open")
        

        
        const isOpen = menu.classList.contains("open"); 
        if (isOpen) {
            menuToggle.textContent = "|||";
        } else {
            menuToggle.textContent = "☰";
        }
        menuToggle.setAttribute("aria-expanded", isOpen); 
    });
