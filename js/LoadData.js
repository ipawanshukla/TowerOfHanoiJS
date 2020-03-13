let table = document.getElementById('table-data');
let city = document.getElementById('city');
let state = document.getElementById('state');
let country= document.getElementById('country');

const loadData = () => {
    fetch('./js/MOCK_DATA.json',{mode: 'no-cors'}) // Before this start the server by running http-server
      .then(function(response) { // For installing http-server run npm install -g http-server
        return response.json();
      })
      .then(data => {
       updateTableData(data);
      });
  };

let cityArr=[];
let uniqCityArr =[];
let stateArr = [];
let  uniqStateArr=[];
let  uniqCountryArr=[];
let countryArr = [];

const filterUniqueElements = (data) =>{

  data.forEach(element => {
    cityArr.push(element.city);
    stateArr.push(element.state);
    countryArr.push(element.country);
  });
  
  
  uniqCityArr=cityArr.filter(onlyUnique);
  uniqCountryArr= countryArr.filter(onlyUnique);
  uniqStateArr = stateArr.filter(onlyUnique);
}

const buildFilterArea = () =>{
  uniqStateArr.sort();
  uniqCityArr.sort();
  uniqCountryArr.sort();
  
  let cityDrop = uniqCityArr.map(city => `<option>${city}</option>`);
  city.innerHTML=`<option>None</option>` + cityDrop.join("");
  let stateDrop = uniqStateArr.map(State => `<option>${State}</option>`);
  state.innerHTML=`<option>None</option>`+stateDrop.join("");
  let CountryDrop = uniqCountryArr.map(Country => `<option>${Country}</option>`);
  country.innerHTML=`<option>None</option>`+CountryDrop.join("");



}
const updateTableData = (data) =>{
  filterUniqueElements(data);
  buildFilterArea();  
  buildTableArea(data);

}

const buildTableArea = (data) =>{
  const tableData = data.map(
    obj =>
      `<tr><td>${obj.id}</td><td>${obj.city}</td><td>${obj.phone}</td><td>${obj.state}</td><td>${obj.country}</td></tr>`
  );
  const Tag = `<table  border="1" class="main-table">
    <tr>
    <th>ID</th>
    <th>City</th>
    <th>Phone</th>
    <th>State</th>
    <th>Country</th>
    </tr>
    ${tableData.join("")}
    </table>`;
  table.innerHTML = Tag;
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}
