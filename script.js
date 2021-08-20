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
  function insert(i)
  {
    item = {
        name : document.getElementById('name').value,
        from : document.getElementById('from').value,
        to : document.getElementById('to').value,
        at : document.getElementById('at').value,
        money : document.getElementById('money').value
     }
     save(i);
  }
  function save(i)
   {
   if(item.name != undefined ) d[i].name = item.name;
   if(item.from != undefined) d[i].from = item.from;
   if(item.to != undefined) d[i].to = item.to;
   if(item.at != undefined) d[i].at = item.at;
   if(item.money != undefined) d[i].money = item.money;
   show();
   }
  function dele(i)
  {
    d.splice(i, 1);
    show();
    
  }
  function show() 
  {
    s= '';
    for (var i = 0; i < d.length; i++) {
      s += `<tr>
            <td> <input type = checkbox id = checkbox> </td>
            <td>` + d[i].name + `</td>
            <td>` + d[i].from + `</td>
            <td>` + d[i].to + `</td>
            <td>` + d[i].at + `</td>
            <td>` + d[i].money + `</td>
            <td> <input type = button value = Delete onclick=dele(`+ i +`)> </td>
            <td> <input type = button value = Insert onclick=insert(`+ i +`)> </td>
        </tr>`;
    }
    e = document.getElementById("t");
    e.innerHTML = s;
  }
  
  function sortIncome()
  {  
    d.sort( (a, b) => b.money - a.money );
    show();
  }
  function sortFrom()
   {
    
    d.sort( (a, b) => b.from - a.from );
    show();
  }
  function sortTo()
  {
    
    d.sort( (a, b) => b.to - a.to );
    show();
  }
  function sortFirstName()
  {
  
    d.sort( (a, b) => a.name.localeCompare(b.name));
    show();
   
  }
  function sortLastName()
  {
    d.sort( (a, b) => getLastName(a.name).localeCompare(getLastName(b.name)));
    show();
  }
  function sortFirstNameDe()
  {  
    d.sort( (a, b) => b.name.localeCompare(a.name));
    show();
  }
  function sortLastNameDe()
  {
    d.sort( (a, b) => getLastName(b.name).localeCompare(getLastName(a.name)));
    show();
  }
  function getLastName(fullName)
  {
    return fullName.split(' ').slice(-1).join('');
  }
  function showSort(value)
  {
      if (value === 'si'){
        sortIncome();
      }
      else if (value === 'sf'){
          sortFrom();
      }
      else if (value === 'st'){
          sortTo();
      }
      else if (value === 'sfn'){
          sortFirstName();
       }
      else if (value === 'sln'){
          sortLastName();
       }
    else if (value === 'sfnd'){
          sortFirstNameDe();
       }
      else if (value === 'slnd'){
          sortLastNameDe();
       }
  }
  show();