let searchText1 = document.getElementById('searchText1');
document.getElementById("submit").addEventListener('click', search);
const url = `https://api.schooldigger.com/v1.2/schools?st=NJ&zip=${searchText1.value}&appID=6bcf25ea&appKey=8b6ea6dac0161c38433bebf496cf5960`;
let data;
 
function search(event) {
    event.preventDefault();
    fetch(url)
        .then(function(response) {
            console.log("This is the response: ", response)
            return response.json();
        })
 
        .then(function(myJson) {
            data = myJson;
            textt.innerHTML = "";
            for (i = 0; i < myJson.schoolList.length; i++) {
                const ranName = myJson.schoolList[i].schoolName;
                console.log("This is ranName: ", ranName);
                const paragraph = document.createElement("p");
                paragraph.innerText = ranName;
                document.getElementById("textt").appendChild(paragraph);
            }
            
        })
 
}
