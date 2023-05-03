
const apiURL = 'https://jsonplaceholder.typicode.com/todos';
let resultObject;
let lengthOfArray;
let filteredArray=[];

const lists = document.querySelector('#matches')

const request = new XMLHttpRequest();
request.open('GET', 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
request.send();

function datafetched(){
    resultObject = JSON.parse(request.responseText)
    // console.log('data fetched')
    lengthOfArray = resultObject.length
//    console.log('result object created')
}
request.addEventListener('readystatechange', ()=>{
    if(request.readyState===4){
        // console.log('requested to fetch data')
        datafetched();
    }
})

 

const inputBar = document.querySelector('#inputBar');

inputBar.addEventListener('input', function (){
    let lengthOfFilter = inputBar.value.length
    lists.innerHTML=null;

    lists.style.display = 'block';
    if(lengthOfFilter===0){
        lists.style.display = 'none';

    }
    // console.log('length of array is '+ lengthOfArray)

    for(let i = 0; i<lengthOfArray; i++){

        let lenghtOfValue = resultObject[i].city.length
        // console.log('length of filter is '+ lengthOfFilter)
        for(let j = 0; j<(lenghtOfValue - lengthOfFilter + 1); j++){
            let comparator1 = resultObject[i].city.substr(0,lengthOfFilter)
            comparator1=comparator1.toUpperCase();
            let comparator2 = inputBar.value;
            comparator2=comparator2.toUpperCase();
            if(comparator1===comparator2){
                // console.log(comparator1)
                // filteredArray.push(resultObject[i])
                let list = document.createElement('li');
                list.innerText=resultObject[i].city;
                list.classList.add("samplesuggestion");
                lists.append(list);
                break;
            }
        }
    }
    

    // let lengthOfFilteredArray = filteredArray.length;
    // for(let b = 0; b<lengthOfFilteredArray; b++){
    //     let list = document.createElement('li');
    //     list.innerText=filteredArray[b].title;
    //     list.classList.add("samplesuggestion");
    //     lists.append(list);
    // }


    }
   


    
    

);