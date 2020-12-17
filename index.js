// // let app = document.getElementById('main');
// // let img = document.createElement('img');
// // img.src = 'logo.png'
// // let container = document.createElement('div');
// // container.setAttribute('class', 'container');
// // app.appendChild(img);
// // app.appendChild(container);

// // Create a request variable and assign a new XMLHttpRequest object to it.
// let request = new XMLHttpRequest()
// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// // The request completes and we can access the data inside the onload function. 
// // When we're done, we'll send the request.

// request.onload = function () {

//     // We're going to use JSON.parse() to parse the response, 
//     // and create a data variable that contains all the JSON as an array of JavaScript objects.  
//     data = JSON.parse(this.response)

//     if (request.data >= 200 && request.data < 400) {

//         // Using forEach(), we'll console log out the title of each film to ensure it's working properly  
//         data.forEach((movie) => {
         
           


//             // let card = document.createElement('div');
//             // card.setAttribute('class', 'card')

//             // let head = document.createElement('h1')
//             // head.textContent = movie.title
            
//             // let p = document.createElement('p');
//             // movie.description = movie.description.substring(0, 300);
//             // p.textContent = `$(movie.description)`
//             // container.appendChild(card);
//             // card.appendChild(head);
//             // card.appendChild(p);


//         });
//     }
//     else {
//         // let errorMessage = document.createElement('h1');
//         // errorMessage.textContent = 'Its a error'
//         // app.appendChild(errorMessage)


//     }
// }









// request.send()





// // Begin accessing JSON data here



// // Now we've received a response from our HTTP request,
// // and we can work with it. However, the response is in JSON, 
// // and we need to convert that JSON in to JavaScript objects in order to work with it.
