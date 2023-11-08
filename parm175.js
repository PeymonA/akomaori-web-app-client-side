  const showHome = () => {
    document.getElementById("Home").style.display = "block";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Events").style.display = "none";
    document.getElementById("Learn").style.display = "none";

    document.getElementById("HomeButton").style.backgroundColor = "pink";
    document.getElementById("GuestbookButton").style.backgroundColor = "transparent";
    document.getElementById("ShopButton").style.backgroundColor = "transparent";
    document.getElementById("RegisterButton").style.backgroundColor = "transparent";
    document.getElementById("LoginButton").style.backgroundColor = "transparent";
    document.getElementById("EventsButton").style.backgroundColor = "transparent";
    document.getElementById("LearnButton").style.backgroundColor = "transparent";
}

const showGuestbook = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Guestbook").style.display = "block";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Events").style.display = "none";
    document.getElementById("Learn").style.display = "none";

    document.getElementById("HomeButton").style.backgroundColor = "transparent";
    document.getElementById("GuestbookButton").style.backgroundColor = "pink";
    document.getElementById("ShopButton").style.backgroundColor = "transparent";
    document.getElementById("RegisterButton").style.backgroundColor = "transparent";
    document.getElementById("LoginButton").style.backgroundColor = "transparent";
    document.getElementById("EventsButton").style.backgroundColor = "transparent";
    document.getElementById("LearnButton").style.backgroundColor = "transparent";
}

function showShop() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Shop").style.display = "block";
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Events").style.display = "none";
    document.getElementById("Learn").style.display = "none";

    document.getElementById("HomeButton").style.backgroundColor = "transparent";
    document.getElementById("GuestbookButton").style.backgroundColor = "transparent";
    document.getElementById("ShopButton").style.backgroundColor = "pink";
    document.getElementById("RegisterButton").style.backgroundColor = "transparent";
    document.getElementById("LoginButton").style.backgroundColor = "transparent";
    document.getElementById("EventsButton").style.backgroundColor = "transparent";
    document.getElementById("LearnButton").style.backgroundColor = "transparent";

}

function showEvent() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Events").style.display = "block";
    document.getElementById("Learn").style.display = "none";

    document.getElementById("HomeButton").style.backgroundColor = "transparent";
    document.getElementById("GuestbookButton").style.backgroundColor = "transparent";
    document.getElementById("ShopButton").style.backgroundColor = "transparent";
    document.getElementById("RegisterButton").style.backgroundColor = "transparent";
    document.getElementById("LoginButton").style.backgroundColor = "transparent";
    document.getElementById("EventsButton").style.backgroundColor = "pink";
    document.getElementById("LearnButton").style.backgroundColor = "transparent";
}

function showRegister() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Register").style.display = "block";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Events").style.display = "none";
    document.getElementById("Learn").style.display = "none";

    document.getElementById("HomeButton").style.backgroundColor = "transparent";
    document.getElementById("GuestbookButton").style.backgroundColor = "transparent";
    document.getElementById("ShopButton").style.backgroundColor = "transparent";
    document.getElementById("RegisterButton").style.backgroundColor = "pink";
    document.getElementById("LoginButton").style.backgroundColor = "transparent";
    document.getElementById("EventsButton").style.backgroundColor = "transparent";
    document.getElementById("LearnButton").style.backgroundColor = "transparent";
}

function showLogin() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "block";
    document.getElementById("Events").style.display = "none";
    document.getElementById("Learn").style.display = "none";

    document.getElementById("HomeButton").style.backgroundColor = "transparent";
    document.getElementById("GuestbookButton").style.backgroundColor = "transparent";
    document.getElementById("ShopButton").style.backgroundColor = "transparent";
    document.getElementById("RegisterButton").style.backgroundColor = "transparent";
    document.getElementById("LoginButton").style.backgroundColor = "pink";
    document.getElementById("EventsButton").style.backgroundColor = "transparent";
    document.getElementById("LearnButton").style.backgroundColor = "transparent";
}

function showLearn() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Guestbook").style.display = "none";
    document.getElementById("Shop").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Events").style.display = "none";
    document.getElementById("Learn").style.display = "block";

    document.getElementById("HomeButton").style.backgroundColor = "transparent";
    document.getElementById("GuestbookButton").style.backgroundColor = "transparent";
    document.getElementById("ShopButton").style.backgroundColor = "transparent";
    document.getElementById("RegisterButton").style.backgroundColor = "transparent";
    document.getElementById("LoginButton").style.backgroundColor = "transparent";
    document.getElementById("EventsButton").style.backgroundColor = "transparent";
    document.getElementById("LearnButton").style.backgroundColor = "pink";
}

function footer () {
    const fetchVersion = fetch("https://cws.auckland.ac.nz/ako/api/Version");
    const streamVersion = fetchVersion.then((response) => response.text());
    streamVersion.then((data) => { document.getElementById("foot").innerText = data; })
}


function sendComment() {
    const yourComment = document.getElementById("yourComment").value;
    const yourName = document.getElementById("yourName").value;

    fetch("https://cws.auckland.ac.nz/ako/api/Comment", {
        headers: {
            "accept" : "text/plain",
            "content-type" : "application/json",
        },
        body : JSON.stringify({
            comment : yourComment,
            name : yourName
        }),
        method : "POST",  
    });

}

function sendRegister() {
    const yourUsername = document.getElementById("yourUsername").value;
    const yourPassword = document.getElementById("yourPassword").value;
    const yourAddress = document.getElementById("yourAddress").value;

    const registerResult = document.getElementById('registerResult');

    fetch("https://cws.auckland.ac.nz/ako/api/Register", {
        headers: {
            "accept" : "text/plain",
            "content-type" : "application/json",
        },
        body : JSON.stringify({
            username : yourUsername,
            password : yourPassword,
            address : yourAddress
        }),
        method : "POST",  
    }).then(
        d=>d.text()
      ).then(
        d=>{registerResult.innerText = d},
        d=>{registerResult.innerText = 'Error: ' + d},
      );
    
}

function sendLogin() {
    const username = document.getElementById("yourUsernameLogin").value;
    const password = document.getElementById("yourPasswordLogin").value;

    const fetchPromise = fetch("https://cws.auckland.ac.nz/ako/api/TestAuth", {
        headers: {
            Authorization: 'Basic ' + btoa(username + ':' + password),
        }, 
    });

    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => loginAfter(data, btoa(username + ':' + password)));
}

function loginAfter(data , login) {
    let loginResult = document.getElementById('loginResult');
    if (data === "") {
        loginResult.innerText = "Try Again";
    }
    else {
        localStorage.setItem("user", JSON.stringify(login));
        loginResult.innerText = "Success";
        LogIn();
    }
}

function refreshIframe(){
    const iframeElem = document.getElementById('Comments');
    iframeElem.src = iframeElem.src;
}

function getItems() {
    const fetchPromise = fetch("https://cws.auckland.ac.nz/ako/api/AllItems");
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showItems(data));   
}

function getMatching() {
    const fetchPromise = fetch("https://cws.auckland.ac.nz/ako/api/MatchingPair");
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => showPairs(data));   
}

function getCalender() {
    const fetchPromise = fetch("https://cws.auckland.ac.nz/ako/api/EventCount");
    const streamPromise = fetchPromise.then((response) => (response.json()));
    streamPromise.then((data) => (showEvents1(data)));

}

function download(count) {
    const fetchPromise = fetch(`https://cws.auckland.ac.nz/ako/api/Event/${count}`);
    const streamPromise = fetchPromise.then((response) => (response.blob()));
    streamPromise.then((data) => {
        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = "file";
        a.click();
    });
    
}

function buyProduct(id) {
    if (loggedIn ===  false) {
        
        showLogin();

        return;
    }
    user = localStorage.getItem("user");
    lengthOf = user.length;
    const fetchPromise = fetch("https://cws.auckland.ac.nz/ako/api/PurchaseItem/" + id, {
        headers: {
            Authorization: 'Basic ' + user.substring(1, lengthOf - 1),
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => popUp(`Thank you user ${data.userName} for buying product id ${data.productID}`));   

}

function popUp(string) {
    let modal = document.getElementById("modal");
    let text = document.getElementById("modalText");
    text.innerText = string;
    modal.style.display="block";
    window.onclick = function() {
        modal.style.display = "none";
    }
}

function shrink() {
    let input = document.getElementById("search");
    let ids = localStorage.getItem("items");

    if (!input.value) {
        ids = ids.split(",")
        for (let i = 0; i < ids.length; i++) {
            let temp = document.getElementById('shop'+ids[i]);
            temp.style.display = "table-row";
        }
        return;
    }
    else {
        const fetchPromise = fetch(`https://cws.auckland.ac.nz/ako/api/Items/${input.value}`);
        const streamPromise = fetchPromise.then((response) => (response.json()));
        streamPromise.then((data) => (hideItems(data, ids)));
    }
}

function hideItems(data, ids) {
    ids = ids.split(",")
    let newIds = []

    const getNew = (data) => {
        newIds.push(data.id);
    }


    data.forEach(getNew)
    
    for (let i = 0; i < ids.length; i++) {
        if (!(newIds.includes(ids[i]))) {
            let temp = document.getElementById('shop'+ids[i]);
            temp.style.display = "none";
        }
        else {
            let temp = document.getElementById('shop'+ids[i]);
            temp.style.display = "table-row";
        }
    }
}

function showPairs(data) {
    let htmlString = "";

    let pairs = data.pairs.split("|");

    localStorage.setItem("pairs",pairs);
    localStorage.setItem("score", 0)

    document.getElementById("Score").innerHTML = `You have gotten 0 correct`;

    let list1 = [];
    let list2 = [];
    for (let i = 0; i < pairs.length; i ++) {
        temp = pairs[i].split("@");
        list1.push(temp[0]);
        list2.push(temp[1]);
    }
    
    list1 = Shuffle(list1);
    list2 = Shuffle(list2);

    for (let i = 0; i < list1.length; i ++) {
        let url1 = list1[i].split(',');
        let url2 = list2[i].split(',');

        if (url1[0] === "data:image/svg+xml;base64") {
            htmlString += `<tr><td><img src=${list1[i]} alt=image width="50px" height="50px" draggable="false"/><td>`;
        }
        else if (url1[0] === "data:audio/mpeg;base64") {
            htmlString += `<tr><td><audio controls><source src=${list1[i]} type="audio/mpeg"</audio><td>`;
        }
        else {  
            htmlString += `<tr><td>${list1[i]}</td>`;
        }

        htmlString += `<td><div class="middle_div" id="${list1[i]}" ondrop="mydrop(event)" ondragover="mydragover(event)"></td>`;

        if (url2[0] === "data:image/svg+xml;base64") {
            htmlString += `<td><img src=${list2[i]} id="${list2[i]}" alt=image width="50px" height="50px" ondragstart="mydragstart(event)"/><td></tr>`;
        }
        else if (url2[0] === "data:audio/mpeg;base64") {
            htmlString += `<td id="${list2[i]}" draggable="true" ondragstart="mydragstart(event)"><audio controls><source src=${list2[i]}
                type="audio/mpeg" ></audio><td></tr>`;
        }
        else {
            htmlString += `<td><p id="${list2[i]}" draggable="true" ondragstart="mydragstart(event)">${list2[i]}</p></td></tr>`;
        }
        
    }

    const t1 = document.getElementById("learnTable");

    t1.innerHTML = htmlString;
}

function mydragstart(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function mydragover(ev) {
    ev.preventDefault();
}

function mydrop(ev) {
    if (ev.dataTransfer !== null) {
        const data = ev.dataTransfer.getData("text/plain");

        let htmlString = "";

        id = document.getElementById(data).getAttribute("id");
        document.getElementById(data).remove();
        ids = id.split(",")

        if (ids[0] === "data:image/svg+xml;base64") {
            htmlString += `<img src=${id} id="${id}" alt=image width="50px" height="50px" ondragstart="mydragstart(event)"/>`;
        }
        else if (ids[0] === "data:audio/mpeg;base64") {
            htmlString += `<audio controls><source src=${id}type="audio/mpeg"></audio>`;
        }
        else {
            htmlString += `<p id="${id}" draggable="true" ondragstart="mydragstart(event)">${id}</p></td>`;
        }

        ev.target.innerHTML += htmlString;

        Score(ev.target.getAttribute("id") + "@" + id)
        
    }
}

function Score(string) {
    score = parseInt(localStorage.getItem("score"));
    
    pairs = localStorage.getItem("pairs");
    if (pairs.includes(string)) {
        score += 1 
        document.getElementById("Score").innerHTML = `You have gotten ${score} correct`;
        localStorage.setItem("score", score);
    }
    
}

function Shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function showItems(products) {
    let htmlString = `<tr class='even'><td>Photo</td><td>Name</td><td>Description</td><td>Price</td></tr>`;
    let photoArray = [];
    const showProduct = (product, count) => {
        count += 1;
        photoArray.push(`${product.id}`);
        if (count % 2 === 1) {
            htmlString += `<tr class='odd' id='shop${product.id}'><td id="image-container${count}"></td><td>${product.name}</td>
            <td>${product.description}</td><td>$${product.price}</td><td><button onclick="buyProduct(${product.id})">Buy</button></td></tr>`; 
        }     
        else {
            htmlString += `<tr class='even' id='shop${product.id}'><td id="image-container${count}"></td><td>${product.name}</td>
            <td>${product.description}</td><td>$${product.price}</td><td><button onclick="buyProduct(${product.id})">Buy</button></td></tr>`; 
        }  
    }
    count = 0;
    products.forEach(showProduct, count);
    const ourTable = document.getElementById("shopTable");
    ourTable.innerHTML = htmlString;
    localStorage.setItem("items", photoArray);
    showPhotos(photoArray);
}

function showEvents2(data, count) {
    let list = data.split("\n");
    let htmlString = "";
    if (count % 2 == 0) {
        htmlString += `<tr class='even'><td>${(list[9].split(":"))[1]}</td><td>${(list[10].split(":"))[1]}</td>
            <td>${(list[11].split(":"))[1]}</td><td>${Date((list[6].split(":"))[1]).toString()}</td><td>${Date((list[7].split(":"))[1]).toString()}</td>
            <td><button onclick="download(${count})">Download</button></td></tr>`;
    }
    else {
        htmlString += `<tr class='even'><td>${(list[9].split(":"))[1]}</td><td>${(list[10].split(":"))[1]}</td>
            <td>${(list[11].split(":"))[1]}</td><td>${Date((list[6].split(":"))[1]).toString()}</td><td>${Date((list[7].split(":"))[1]).toString()}</td>
            <td><button onclick="download(${count})">Download</button></td></tr>`;
    }
    const ourTable = document.getElementById("eventTable");
    ourTable.innerHTML += htmlString;
}

function showEvents1(data) {
    let htmlString = `<tr class='even'><td>Summary</td><td>Description</td><td>Location</td><td>Starts</td><td>Finishes</td></tr>`;
    const ourTable = document.getElementById("eventTable");
    ourTable.innerHTML = htmlString;

    for (let i = 0; i < data; i++) {
        const fetchPromise = fetch(`https://cws.auckland.ac.nz/ako/api/Event/${i}`);
        const streamPromise = fetchPromise.then((response) => (response.text()));
        streamPromise.then((data) => (showEvents2(data, i)));
    }
}

function showPhotos(photoArray) {
    for (let i = 0; i < photoArray.length; i++) {
        let fetchPhoto = "https://cws.auckland.ac.nz/ako/api/ItemImage/";
        photoArray[i] = fetchPhoto + photoArray[i];
    }
    function showPhoto(photo, count) {
        count += 1;
        fetch(photo).then((response) => response.blob()).then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            const container = document.getElementById(`image-container${count}`);
            imageElement.style.height = '100px';
            imageElement.style.width = '100px';
            container.appendChild(imageElement);
        })
    }
    count = 0;
    photoArray.forEach(showPhoto, count);

}

function LogOut() {
    localStorage.removeItem("user");
    let loginResult = document.getElementById('loginResult');
    loginResult.innerHTML = "Please Login";
    document.getElementById("Logged").innerHTML = "<p>You are not logged in<p>";
    loggedIn = false;
    document.getElementById("LoginButton").style.display = "block";
}

function LogIn() {
    document.getElementById("Logged").innerHTML = "<p>You are logged in<p><button onclick='LogOut()'>Log Out</button>";
    showHome();
    loggedIn = true;
    document.getElementById("LoginButton").style.display = "none";
}

showHome();
footer();
getItems();
LogOut();
getCalender();
getMatching();
loggedIn = false;

