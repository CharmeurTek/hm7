// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

    function capitalize(str)
    {
        return str.charAt(0).toUpperCase() + str.substr(1);
    }

    const input = document.getElementById('country');
    const result = document.getElementById('suggestions');
        input.addEventListener('input', e =>  {
            var reg = new RegExp(capitalize(e.target.value));
            var res = countryList.filter(function(term) {
                if (term.match(reg)) {
                    return term;
                }
            });
            const Child = document.getElementById("suggestions");
            while (Child.firstChild) {
                Child.removeChild(Child.lastChild);
            }
            if (e.target.selectionEnd <= 0)
                return
            for(country of res) {
                const elements = document.getElementById('suggestions');
                var countries = document.createElement('p');
                countries.appendChild(document.createTextNode(country));
                elements.appendChild(countries);
            }
        });