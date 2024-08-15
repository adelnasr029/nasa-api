//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', picOfTheDay)
function picOfTheDay(){
let choice = document.querySelector('input').value
console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${choice}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if( data['media_type'] === 'image'){
          document.querySelector('img').srcset = data.hdurl
        } else if( data['media_type'] === 'video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.title
        document.querySelector('p').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}



function toCsvText(array) {
  // good luck
return array.join('\n')

}


console.log(toCsvText([
  [ 0, 1, 2, 3, 45 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]
 ]))