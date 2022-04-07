// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };

  const addValueOnSelect = () => {
      for (house of houses) {
        const elements = document.getElementById('house');
        var options = document.createElement('option');
        options.appendChild(document.createTextNode(house.name));
        options.value = house.code;
        elements.appendChild(options);
      }
  }

addValueOnSelect();

document.getElementById("house").addEventListener("change", e => {
    const Child = document.getElementById("characters");
    while (Child.firstChild) {
        Child.removeChild(Child.lastChild);
    }
    for(character of getCharacters(houseCode=e.target.value)) {
        const elements = document.getElementById('characters');
        var thecharacter = document.createElement('li');
        thecharacter.appendChild(document.createTextNode(character));
        elements.appendChild(thecharacter);
      }
  });