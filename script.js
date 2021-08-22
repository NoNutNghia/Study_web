d = [
      {
         name: 'Nguyễn Quốc Đức',
         from: 2011,
         to: 2015,
         at: 'Thang long',
         money: -90},
      {
         name: 'Phạm Mạnh Quân',
         from: 2013,
         to: 2016,
         at: 'THPT Lê Quý Đôn Hà Đông',
         money: -2},
      {
         name: 'Đoàn Khánh Trường',
         from: 2016,
         to: 2021,
         at: 'ĐH BKHN',
         money: -20},
      {
         name: 'Lê Văn Minh',
         from: 2016,
         to: 2020,
         at: 'ĐHTL',
         money: -7.5},
      {
         name: 'Nguyễn Văn Chung',
         from: 2017,
         to: 2020,
         at: 'THPT LÊ LỢI',
         money: -10},
      {
         name: 'Kiều Lê Việt Anh',
         from: 2017,
         to: 2021,
         at: 'ĐHBKHN',
         money: -40},
      {
         name: 'Vũ Đình Linh',
         from: 2017,
         to: 2020,
         at: 'Serpukhov-Russia',
         money: 640},
      {
         name: 'Lê Minh Thịnh',
         from: 2017,
         to: 2020,
         at: 'THPT C. Lam Sơn',
         money: -10},
      {
         name: 'Nguyễn Ngọc Nghĩa',
         from: 2017,
         to: 2019,
         at: 'THPT Nam Khoái Châu',
         money: -10},
      {
         name: 'Trương Quốc Việt',
         from: 2017,
         to: 2019,
         at: 'THPT Phan Châu Trinh',
         money: 10},
      {
         name: 'Võ Hoàng Thắng',
         from: 2017,
         to: 2020,
         at: 'Bluemoon sushi & grill',
         money: 26},
      {
         name: 'Cao Hải Long',
         from: 2017,
         to: 2020,
         at: 'THPT Đống Đa',
         money: 10},
      {
         name: 'Lương Minh Đức',
         from: 2018,
         to: 2022,
         at: 'Hà Nội',
         money: 123},
      {
         name: 'Bùi Công Hoàng',
         from: 2018,
         to: 2021,
         at: 'ĐHQG HN',
         money: 35},
      {
         name: 'Nguyễn Đình Duy',
         from: 2019,
         to: 2021,
         at: 'kishinoura ',
         money: 130},
      {
         name: 'Vũ Tuấn Việt',
         from: 2019,
         to: 2020,
         at: 'logistics',
         money: 15},
      {
         name: 'Phùng Quang Huy',
         from: 2020,
         to: 2021,
         at: 'HTS',
         money: 7},
      {
         name: 'Nguyễn Bảo Huy',
         from: 2021,
         to: 2024,
         at: 'University of Sydney',
         money: -500}
  ]
function show() {
   var s = ' ';
   for (var i = 0; i < d.length; i++) {
      s += `<tr>
            <th><input type = checkbox onclick = mark(`+ i +`)></th>
            <th>`+ d[i].name +` </th>
            <th>`+ d[i].from +` </th>
            <th>`+ d[i].to +` </th>
            <th>`+ d[i].at +` </th>
            <th>`+ d[i].money +`</th> 
            <th><input type = button value = Delete onclick = remove(`+ i +`)></th>
            <th><input type = button value = Insert onclick = insert(`+ i +`)></th> 
            </tr>`;
   }  
   document.getElementById("t").innerHTML = s;     
}
show();
function add() {
   item = {
      name : document.getElementById('name').value,
      from : document.getElementById('from').value,
      to : document.getElementById('to').value,
      at : document.getElementById('at').value,
      money : document.getElementById('money').value
   };
   d = [item].concat(d);
   show();   
   document.getElementById('name').value = ' ';
   document.getElementById('from').value = ' ';
   document.getElementById('to').value = ' ';
   document.getElementById('at').value = ' ';
   document.getElementById('money').value = ' ';
}

function sBF(){
   d.sort((a, b) => a.from - b.from);
   show();
}
function sBT(){
   d.sort((a, b) => a.to - b.to);
   show();
}
function sortName(){
   d.sort( (a, b) => a.name.localeCompare(b.name) );
}
function sBFName(){
   sortName();
   show();
}
function sBFNameDe(){
   sortName();
   d.reverse();
   show();
}
function getLastName(fullName){
   return fullName.split(' ').slice(-1).join('');
}
function sortLastName(){
   d.sort( (a, b) => getLastName( a.name ).localeCompare( getLastName(b.name) ) );
}
function sBLName() {
   sortLastName();
   show();
} 
function sBLNameDe() {
   sortLastName();
   d.reverse();
   show();
} 
function sBI() {
   d.sort( (a, b) => a.money - b.money );
   show();
}
function remove(i) {
   d.splice(i ,1);
   show();
}
var current_i;
function insert(i) {
   document.getElementById('name').value = d[i].name;
   document.getElementById('from').value = d[i].from;
   document.getElementById('to').value = d[i].to;
   document.getElementById('at').value = d[i].at;
   document.getElementById('money').value = d[i].money;
   current_i = i;
   document.getElementById('add').style.display = 'none';
   document.getElementById('save').style.display = 'inline';
}
function save() {
   item = {
      name : document.getElementById('name').value,
      from : document.getElementById('from').value,
      to : document.getElementById('to').value,
      at : document.getElementById('at').value,
      money : document.getElementById('money').value
   };
   d[current_i] = item;
   show();
   document.getElementById('add').style.display = 'inline';
   document.getElementById('save').style.display = 'none';
   document.getElementById('name').value = ' ';
   document.getElementById('from').value = ' ';
   document.getElementById('to').value = ' ';
   document.getElementById('at').value = ' ';
   document.getElementById('money').value = ' ';
}

function showSort(value) {
   if(value === 'sf') sBF();
   if(value === 'st') sBT();
   if(value === 'sfn') sBFName();
   if(value === 'sln') sBLName();
   if(value === 'sfnd') sBFNameDe();
   if(value === 'slnd') sBLNameDe();
   if(value === 'si') sBI();
}