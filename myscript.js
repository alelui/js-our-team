// alert('ciaone');
members = [
    {
        'name': "Wayne Barnett",
        'role': "Founder & CEO",
        'img': "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        'name': "Angela Caroll",
        'role': "Cheif Editor",
        'img': "img/angela-caroll-chief-editor.jpg",
    },
    {
        'name': "Walter Gordon",
        'role': "Office Manager",
        'img': "img/walter-gordon-office-manager.jpg",
    },
    {
        'name': "Angela Lopez",
        'role': "Social Media Manager",
        'img': "img/angela-lopez-social-media-manager.jpg",
    },
    {
        'name': "Scott Estrada",
        'role': "Developer",
        'img': "img/scott-estrada-developer.jpg",
    },
    {
        'name': "Barabara Ramos",
        'role': "Graphic Desiner",
        'img': "img/barbara-ramos-graphic-designer.jpg",
    },
];

// console.log(members);

// for (let i = 0; i < members.length; i++){
//     console.log(members[i]);
//     console.log(members[i].name);
//     console.log(members[i].role);
//     console.log(members[i].img);

//     for(let k in members[i]){
//         console.log(members[i][k]);
//     }  
// }

let items; 
const container = document.querySelector('.team-container');
// console.log(container);

for (let i = 0; i < members.length; i++){
   
   items =`
   <div class="team-card">
        <div class="card-image">
            <img src=${members[i].img} alt=${members[i].name}>
        </div>
        <div class="card-text">
            <h3>${members[i].name}</h3>
            <p>${members[i].role}</p>
        </div>
    </div>
   `
    // console.log(items);
    container.innerHTML += items;
}



// aggiunta membri 

const addBotton = document.getElementById('addMemberButton');
// console.log(addBotton);
addBotton.addEventListener('click', function(){
    // container.innerHTML = " ";
    let newName = document.getElementById('name');
    let newRole = document.getElementById('role');
    let newImage = document.getElementById('image');

    // console.log(newName);
    // console.log(newRole);
    // console.log(newImage);

    const newMember = {
        'name': newName.value,
        'role': newRole.value,
        'img': newImage.value,
    }

    members.push(newMember);
    // console.log(members);
    newName.value = "";
    newRole.value = "";
    newImage.value = "";

    //soluzione SENZA CICLO ma per addottarla bisogna COMMENTARE RIGA 80 DOVE E' SPECIFICATO IL RESET DEL CONTAINER
    items =`
    <div class="team-card">
         <div class="card-image">
             <img src=${newMember.img} alt=${newMember.name}>
         </div>
         <div class="card-text">
             <h3>${newMember.name}</h3>
             <p>${newMember.role}</p>
         </div>
     </div>
    `;
    // console.log(items);
    container.innerHTML += items;

    //sluzione CON CICLO ma per addottarla bisogna SCOMMENTARE RIGA 80 DOVE E' SPECIFICATO IL RESET DEL CONTAINER
    // for (let i = 0; i < members.length; i++){
   
    //     items =`
    //     <div class="team-card">
    //          <div class="card-image">
    //              <img src=${members[i].img} alt=${members[i].name}>
    //          </div>
    //          <div class="card-text">
    //              <h3>${members[i].name}</h3>
    //              <p>${members[i].role}</p>
    //          </div>
    //      </div>
    //     `
    //      // console.log(items);
    //      container.innerHTML += items;
    //  }

});






