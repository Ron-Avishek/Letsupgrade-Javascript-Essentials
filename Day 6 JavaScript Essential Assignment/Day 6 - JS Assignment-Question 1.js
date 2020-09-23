let targets=[{
    name:'ram',
    age :40,
    city : 'Delhi',
    salary : 120000,
},
{
    name: 'shyam',
    age : 35,
    city : 'Chennai',
    salary : 75000,
},
{
    name: 'Laksham',
    age : 25,
    city : 'Chennai',
    salary : 25000,
},
{
    name: 'Jamini',
    age : 20,
    city : 'Cuttak',
    salary : 16000,
}];


function display(targets){
    let target_data='';
    let c=1;
   
    targets.forEach(function(element,index){
        let presetrow=`<tr>
                <td>${c}</td>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.city}</td>
                <td>${element.salary}</td>
                <td><button onclick="delete_ele(${index})" class="del_btn">delete</button></td>`;

                


        target_data+=presetrow;



    c++;
    });
    document.getElementById('tablerows').innerHTML = target_data;  
};

function insert(e){
    e.preventDefault()
    let target={};
    let ins_name=document.getElementById("ins-name").value;
    let ins_age = document.getElementById("ins-age").value;
    let ins_city = document.getElementById("ins-city").value;
    let ins_salary= document.getElementById("ins-salary").value;
    target.name=ins_name;
    target.age = Number(ins_age);
    target.city = ins_city;
    target.salary =Number(ins_salary);
    console.log(ins_salary);
    
    targets.push(target);
    display(targets);
return false;
}

display(targets);

function search()
{
  let ser_ele= document.getElementById("searching").value;
 let ser_res_arr=targets.filter(function(targets){
     if (targets.name.indexOf(ser_ele) != -1)
     {
       return targets.name.indexOf(ser_ele) != -1;
     }
     else if (targets.city.indexOf(ser_ele) != -1){
         return targets.city.indexOf(ser_ele) != -1;
           

     }
     ;

 })

 display(ser_res_arr);

}

function delete_ele(index){
    console.log(index);
    targets.splice(index,1);
    display(targets);
    

}