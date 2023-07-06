const findPlayers = async => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value; 
    searchField.value = '';
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchText}`)
    .then(res => res.json())
    .then(data => showPlayers(data.player));
}

const showPlayers = data => {
    const allPlayers = document.getElementById('all-players');
    allPlayers.textContent = '';
    data.forEach(player => {
        console.log(player);
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('card-group');
        innerDiv.innerHTML = `
        <div class="card">
            <img src="${player.strCutout}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text"> <b> Description : </b>${player.strDescriptionEN.substring(0, 100)}...</p>
                </div>
        </div>`
        allPlayers.appendChild(innerDiv);
    });
    
}




