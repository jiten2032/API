let app = document.getElementById('main');
let img = document.createElement('img')
img.src = 'logo.png';
app.appendChild(img)
let container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container)

let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
    data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {

            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            let h1 = document.createElement('h1');
            h1.textContent = movie.title;
            console.log(h1);
            let p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}`
            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);

        });

    }
    else {
        let errorMessage = document.createElement('h1');
        errorMessage.textContent = "It's an Error"
        app.appendChild(errorMessage)

    }

}


request.send()
