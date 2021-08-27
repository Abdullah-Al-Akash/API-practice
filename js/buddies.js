const loadBuddies = () => {
        fetch('https://randomuser.me/api/?results=5')
                .then(res => res.json())
                .then(data => displayBuddies(data))
}

loadBuddies()

const displayBuddies = (buddies) => {
        const friends = buddies.results
        const buddiesContainer = document.getElementById('buddies-container');
        for (const buddy of friends) {
                console.log(buddy);
                const p = document.createElement('p');
                p.innerText = `
                        Buddy Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
                `;
                buddiesContainer.appendChild(p);
        }
}
