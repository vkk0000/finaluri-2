// function displaytext(){
//     var text = document.getElementById('textinput').value;
//     var fontsize = document.getElementById('fontsizeinput').value;

//     var outputDiv = document.getElementById('output');
//     outputDiv.style.fontSize = fontsize + 'px';
//     outputDiv.textContent = text;
// }


// function generatetable() {
//          var width = document.getElementById('width').value;
//         var height = document.getElementById('height').value;
    
//          if (width && height) {
//              let table = "<table>";
           
//              for (let i = 0; i < height; i++) {
//                  table += "<tr>";
               
//                  for (let j = 0; j < width; j++) {
//                      table += "<td>" + (i * width + j + 1) + "</td>";
//                  }
//              }      
//            document.getElementById('tablecontainer').innerHTML = table;   
//          }
//      }



// function gamotana(){
//     var m = parseInt(document.getElementById('m').value);
//     var n = parseInt(document.getElementById('n').value);
//     let output ='';

//     if (m<=n){
//         for(let i = m; i<=n; i++){
//             output += i +'<br>';
//         }
//     }else{
//         for(let i = m; i>=n; i--){
//             output += i +'<br>';
//         }
//     }
//     ;
//     document.getElementById('gamo').innerHTML = output;
// }


// function generateTable() {
   
//     const rows = document.getElementById("rows").value;
//     const cols = document.getElementById("cols").value;
//     const width = document.getElementById("width").value;
//     const height = document.getElementById("height").value;
//     const bgColor = document.getElementById("bgColor").value;
//     const borderSize = document.getElementById("borderSize").value;

//     const container = document.getElementById("table-container");
//     container.innerHTML = '';

  
//     const table = document.createElement("table");
  
//     table.style.backgroundColor = bgColor;

//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement("tr");

//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement("td");
          
//             tr.appendChild(td);
//         }

//         table.appendChild(tr);
//     }

//     container.appendChild(table);
// }



// function generateRandomNumber(){
//     let a = parseInt(document.getElementById('a').value);
//     let b = parseInt(document.getElementById('b').value);

//     if(a < b){
//         let randomnumber = Math.floor(Math.random()*(b-a+1)) + a;
//         document.getElementById('result').textContent = `random rumber:  ${randomnumber}`;
//     }
//     if(a > b){
//         let randomnumber = Math.floor(Math.random()*(b-a+1)) + a;
//         document.getElementById('result').textContent = `random rumber:  ${randomnumber}`;
//     }


// }



// function printrandom(n,a,b){
//     const randint = Math.floor(Math.random()*(b-a+1))+a;
//     document.getElementById('result').innerHTML = `n=${n}, Random integer from [${a}, ${b}] is: ${randint}`;
// }
//     const n = 5;
//     const a = 1;
//     const b = 10;

//     printrandom(n,a,b);



// const photos = [
//     "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
//     "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg",
//     "photo11.jpg", "photo12.jpg", "photo13.jpg", "photo14.jpg", "photo15.jpg",
//     "photo16.jpg", "photo17.jpg", "photo18.jpg", "photo19.jpg", "photo20.jpg"
// ];

// function getRandomPhotos() {
//     const shuffled = photos.sort(() => 0.5 - Math.random());  
//     return shuffled.slice(0, 4);  
// }

// function displayPhotos() {
//     const randomPhotos = getRandomPhotos();
//     const container = document.getElementById('photoContainer');
//     container.innerHTML = ""; 
//     randomPhotos.forEach(photo => {
//         const imgElement = document.createElement('img');
//         imgElement.src = photo;  
//         container.appendChild(imgElement);
//     });
// }


// window.onload = displayPhotos;


// function generateTable() {
    
//     const rows = document.getElementById("rows").value;
//     const columns = document.getElementById("columns").value;
//     const imageCount = document.getElementById("images").value;

//     const imageUrl = "https:via.placeholder.com/100"; 

    
//     let tableHTML = "<table>";

   
//     for (let i = 0; i < rows; i++) {
//         tableHTML += "<tr>";
//         for (let j = 0; j < columns; j++) {
//             tableHTML += "<td>";
//             for (let k = 0; k < imageCount; k++) {
//                 tableHTML += `<img src="${imageUrl}" alt="Image">`;
//             }
//             tableHTML += "</td>";
//         }
//         tableHTML += "</tr>";
//     }

//     tableHTML += "</table>";
  
//     document.getElementById("tableContainer").innerHTML = tableHTML;
//  }



// function calculate(operation) {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     let result;

//     if (operation === '+') {
//         result = num1 + num2;
//     } else if (operation === '-') {
//         result = num1 - num2;
//     } else if (operation === '*') {
//         result = num1 * num2;
//     } else if (operation === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = 'შეცდომა: ვერ გაყოფთ 0-ით';
//         }
//     } else if (operation === 'sqrt') {
//         result = Math.sqrt(num1);
//     }

//     document.getElementById('result').textContent = result;
// }



// function generateRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 31);   
//     document.getElementById("randomNumberDisplay").textContent = randomNumber;
// }



// function generateTable() {
//     const columns = document.getElementById('columns').value;
//     const rows = document.getElementById('rows').value;
//     const imageCount = document.getElementById('imageCount').value;

//     const images = [
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100',
//         'https:via.placeholder.com/100'
//     ];

//     let table = '<table>';

//     for (let i = 0; i < rows; i++) {
//         table += '<tr>';
//         for (let j = 0; j < columns; j++) {
//             let imageIndex = (i * columns + j) % imageCount;  
//             table += `<td><img src="${images[imageIndex]}" alt="Image"></td>`;
//         }
//         table += '</tr>';
//     }

//     table += '</table>';


//     document.getElementById('tableContainer').innerHTML = table;
// }




// function generateRandomDivs() {
//     for (let i = 0; i < 10; i++) {
//         const width = Math.floor(Math.random() * 51) + 50;  
//         const height = Math.floor(Math.random() * 51) + 50;  
//         const area = width * height;  

//         const div = document.createElement('div');
//         div.classList.add('random-div');
//         div.style.width = `${width}px`;
//         div.style.height = `${height}px`;
//         div.style.left = `${Math.random() * (window.innerWidth - width)}px`;
//         div.style.top = `${Math.random() * (window.innerHeight - height)}px`;

//         div.innerHTML = `Area: ${area} px²`;

//         document.body.appendChild(div);
//     }
// }

// generateRandomDivs();




// const cyanBox = document.querySelector('.cyan-box');
// const container = document.querySelector('.container');
// const step = 10;  

// function handleButtonClick(direction) {
//   const boxStyle = window.getComputedStyle(cyanBox);
//   const top = parseInt(boxStyle.top);
//   const left = parseInt(boxStyle.left);

//   if (direction === 'ზემოთ' && top > 0) {
//     cyanBox.style.top = `${top - step}px`;
//   } else if (direction === 'ქვემოთ' && top + cyanBox.offsetHeight < container.offsetHeight) {
//     cyanBox.style.top = `${top + step}px`;
//   } else if (direction === 'მარცხნივ' && left > 0) {
//     cyanBox.style.left = `${left - step}px`;
//   } else if (direction === 'მარჯვნივ' && left + cyanBox.offsetWidth < container.offsetWidth) {
//     cyanBox.style.left = `${left + step}px`;
//   }
// }



// const gridContainer = document.getElementById('grid-container');
// const colors = ['green', 'blue', 'red', 'yellow'];

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// function addRandomSquare() {
//   if (gridContainer.childElementCount >= 120) return;  

//   const square = document.createElement('div');
//   square.className = 'square';
//   square.style.backgroundColor = getRandomColor();
//   gridContainer.appendChild(square);
// }


// setInterval(addRandomSquare, 1000);

// document.addEventListener('keydown', function(event) {
//     const ball = document.getElementById('ball');
//     let ballRect = ball.getBoundingClientRect();
//     let pitchRect = document.querySelector('.pitch').getBoundingClientRect();
//     let step = 10;

//     if (event.key === 'ArrowUp' && ballRect.top > pitchRect.top) {
//         ball.style.top = ball.offsetTop - step + 'px';
//     } else if (event.key === 'ArrowDown' && ballRect.bottom < pitchRect.bottom) {
//         ball.style.top = ball.offsetTop + step + 'px';
//     } else if (event.key === 'ArrowLeft' && ballRect.left > pitchRect.left) {
//         ball.style.left = ball.offsetLeft - step + 'px';
//     } else if (event.key === 'ArrowRight' && ballRect.right < pitchRect.right) {
//         ball.style.left = ball.offsetLeft + step + 'px';
//     }
// });



// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2021
// };


// console.log("Brand:", car.brand);
// console.log("Year:", car.year);



// const student = {
//     name: "John Doe",
//     age: 20,
//     subjects: ["Math", "English"]
//   };
 

//   student.subjects.push("Programming");
 
 
//   console.log("Name:", student.name);
//   console.log("Age:", student.age);
//   console.log("Subjects:", student.subjects);
 


// const calculator = {
// num1: 10,
// num2: 5,
// add() {
//   return this.num1 + this.num2;
// },
// subtract() {
//   return this.num1 - this.num2;
// }
// };

// console.log("Addition:", calculator.add());       
// console.log("Subtraction:", calculator.subtract()); 



// let cities = [
//     {name: "Tbilisi", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Batumi", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Kutaisi", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Rustavi", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Gori", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Zugdidi", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Poti", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Telavi", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Ozurgeti", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10},
//     {name: "Mtskheta", population: Math.floor(Math.random() * 1000000) + 1000, area: Math.floor(Math.random() * 1000) + 10}
// ];

// let result = document.getElementById("result");
// result.innerHTML = '';

// for (let city of cities) {
//     let cityDiv = document.createElement("div");
//     cityDiv.innerHTML = `City: ${city.name}<br>Population:
//      ${city.population}<br>Area: ${city.area} km²<br>Density:
//       ${city.population / city.area} people/km²`;
//     result.appendChild(cityDiv);
// }
