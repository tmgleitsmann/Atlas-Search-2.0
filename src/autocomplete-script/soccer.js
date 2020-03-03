// Get movie titles from STITCH DATA API
export const getPlayers = async(playerName, callback) => {
   //CALLING soccer autocomplete SERVICE  -- to be used for autocomplete
   const res = await fetch(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/soccersearch-redkv/service/get-player-basic/incoming_webhook/get-player-autocomplete?arg=${playerName}`);
   const players = await res.json();
   if(players.length > 0){
    autocomplete(document.getElementById("myInput"), players, callback);
   }
};

export const userActionAll = async (searchString) =>
{
    //console.log("IN USER ACTION ALL");
    //   console.log("Movie titles: " + movie_titles.length);
    //let searchString = document.getElementById('myInput').value;
    //let txt = "";
    // console.log(searchString);

    
    let webhook_url='https://webhooks.mongodb-stitch.com/api/client/v2.0/app/soccersearch-redkv/service/get-player-basic/incoming_webhook/get-player-basic';
   
    let url = webhook_url + "?arg=" + searchString;

    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (playersJSON) {
        if (playersJSON["$undefined"] === true) {
            console.log('NO FETCH RESULT');
            
        } else {
            if (playersJSON.length !== 0) {
                // DO WHAT YOU NEED TO DO HERE
                console.log('GOT MY PLAYER!!');
            }
        }  // end of ELSE

        // DISPLAY STUFF HERE
        //document.getElementById("movieResults").innerHTML = txt;
    });
}

function autocomplete(inp, arr, callback) {
    var currentFocus;

    /*******This event listener is slow to recieve input*****/
    inp.addEventListener("input", function(e) {        
        var a, b, i, line, val = this.value;
        console.log(arr);
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        let counter = 0;
        for (i = 0; i < arr.length; i++){
            if (arr[i].Last.substr(0, val.length).toUpperCase() === val.toUpperCase()){
                console.log(arr[i].Last+" is a match so far");
                b = document.createElement("DIV");             
                b.innerHTML ="<p>" + arr[i].Last + "</p>";
                b.innerHTML += `<input type='hidden' value="${arr[i].Last}">`;
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    const valueToAppend = this.getElementsByTagName("input")[0].value;
                    inp.value = valueToAppend;
                    callback(valueToAppend);
                    closeAllLists();

                });
                counter +=1;
                a.appendChild(b);
                if(counter == 1){
                    this.parentNode.appendChild(a);
                }
            }
            if(counter==5){
                break;
            }
        }
    });


    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

// UNCOMMENT WHEN CALLING PREFIX:TRUE API for AUTOCOMPLETED TITLES
window.addEventListener('DOMContentLoaded', getPlayers);