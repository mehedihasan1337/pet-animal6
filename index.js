// categoris on html

const removeActiveClass=()=>{
    const buttons= document.getElementsByClassName("category-btn ")
    for (let btn of buttons) {
        btn.classList.remove("active")
    }

}

// create loadCategories 

const  loadCategories = () =>{
    console.log(" loadCategories created")
    // fatch the data
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
const  loadPets = () =>{
    console.log(" loadCategories created")
    // fatch the data
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) =>  displayPets(data.pets))
    .catch((error) => console.log(error));
};

const loadAllpets = () => {
    console.log("wow 2 second gone")
     document.getElementById("spinner").style.display ="none"
}

const loadCategoryPets = (category) =>{
      document.getElementById("spinner").style.display="block"
    
    // alert(id);

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
//    remove
    removeActiveClass();
   const activeBtn = document.getElementById(`btn-${category}`)
        activeBtn.classList.add("active")
        displayPets(data.data);
    })

      .catch((error) => console.log(error));
    
     
      setTimeout(function () {
        loadAllpets()
    
    },2000)
     
};







// const cardDemo ={
   
//         petId: 1,
//         breed: "Golden Retriever",
//         category: "Dog",
//         date_of_birth: "2023-01-15",
//         price: 1200,
//         image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//         gender: "Male",
//         pet_details: "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//         vaccinated_status: "Fully",
//         pet_name: "Sunny"
   
// }

const displayPets = (pets) =>{
    const petContainer = document.getElementById("pets")
    petContainer.innerHTML = "";
    
    if(pets.length ==0 ){
        petContainer.classList.remove("grid");
        petContainer.innerHTML =`
     
           <div class=" h-100 bg-[#dfdede]  rounded-2xl">
       
      <img class=" mx-auto pt-10"
      src="images/error.webp"
      alt="Shoes"
      
    <div class=" items-center text-center">
      <h2 class="font-extrabold text-center text-xl">No Information Available</h2>
       <p class="text-center px-3 pb-5"> Try refreshing the page, clearing the cache, 
      or checking if the website is down.</p>
    
     </div>
    </div>

     
        `;
        return
    } else {
        petContainer.classList.add("grid");
    }

    pets.forEach(pet => {
        const { pet_name, vaccinated_status, pet_details, gender, image, price, date_of_birth, category, breed, petId} = pet;
        console.log(pet);
        const card = document.createElement("div");
        card.classList ="card card-compact border p-4"
        card.innerHTML =
        `
        
          <figure class="h-[150px]">
    <img
      src=${image}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
    <div class="border-b pb-4 ">
        <h2 class="font-bold">${pet_name}</h2>
        <div class="flex gap-1 ">
        <img src="https://img.icons8.com/?size=24&id=jQkL4uOqbTW7&format=png" alt="">
        <p ">Breed: ${breed }</p>
        </div>
         <div class="flex gap-1 ">
         <img  src="https://img.icons8.com/?size=24&id=84997&format=png" alt="">
        <p>Birth: ${date_of_birth}</p>
        </div>

         <div class="flex gap-1 ">
         <img src="https://img.icons8.com/?size=24&id=20353&format=png" alt="">
        <p>Gender: ${gender}</p>
        </div>

         <div class="flex gap-1 ">
         <img class="w-5" src="https://img.icons8.com/?size=80&id=QHui8fGzf5rs&format=png" alt="">
        <p>Price:  ${price}</p>
        </div>
        
    </div>

    <div class="mt- text-center mt-3 flex justify-between">
      <button onclick="petImage('${image}')" class=" bg-white rounded-md  border py-1   px-2"> <img class="w-4" src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png" alt=""></button>
      
      <button  onclick="petCongrats('Congrats')" class="bg-white rounded-md font-semibold text-[#0E7A81] border  px-2">Adopt</button>
      <button onclick="petDetails('${petId}')" class="bg-white rounded-md font-semibold text-[#0E7A81] border   px-2 ">Details</button>
    </div>
  </div>
  
        `;
        petContainer.append(card);
    })
};


// category:"Cat"
// category_icon:"https://i.ibb.co.com/N7dM2K1/cat.png"
// id:1

// create DisplayCategories

const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById(" categories")
    categories.forEach((item) =>{ 
        console.log(item)

        // create a button
        const buttonContainer = document.createElement("div")
        
       
       buttonContainer.innerHTML = `
       <button  id="btn-${item.category}" onclick=" loadCategoryPets('${item.category}')"
          class="btn  border bg-white category-btn rounded-2xl  px-2 lg:px-16  from-200 lg:font-500 text-xl ">
       <img class="lg:w-8 w-4" src=${item. category_icon} alt="">    ${item.category}
       </button>
       `
            
     

    //    add button
        categoryContainer.append(buttonContainer)

    })
    
}



// const pet ={
   
//         petId: 1,
//         breed: "Golden Retriever",
//         category: "Dog",
//         date_of_birth: "2023-01-15",
//         price: 1200,
//         image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//         gender: "Male",
//         pet_details: "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//         vaccinated_status: "Fully",
//         pet_name: "Sunny"
// }
 
   


const petDetails = async(petIds) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petIds}`)
     const data = await response.json();
    
    console.log(data.petData)
    const { pet_name, vaccinated_status, pet_details, gender, image, price, date_of_birth, category, breed, petId} = data.petData;
       
    const modalContainer = document.getElementById("modal-container")
    modalContainer.innerHTML =`
       <dialog id="my_modal_1" class="modal">
  <div class="modal-box">
       <figure class="h-full">
    <img
      src=${image}
      class="h-full w-full "
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
  <h2 class="font-bold">${pet_name}</h2>
    <div class="border-b pb-4 grid grid-cols-2">
        
        <div class="flex gap-1 ">
        <img src="https://img.icons8.com/?size=24&id=jQkL4uOqbTW7&format=png" alt="">
        <p ">Breed: ${breed }</p>
        </div>
         <div class="flex gap-1 ">
         <img  src="https://img.icons8.com/?size=24&id=84997&format=png" alt="">
        <p>Birth: ${date_of_birth}</p>
        </div>

         <div class="flex gap-1 ">
         <img src="https://img.icons8.com/?size=24&id=20353&format=png" alt="">
        <p>Gender: ${gender}</p>
        </div>

         <div class="flex gap-1 ">
         <img class="w-5" src="https://img.icons8.com/?size=80&id=QHui8fGzf5rs&format=png" alt="">
        <p>Price:  ${price}</p>
        </div>


        
        
    </div>
    <div>
    <h3 class="font-extrabold" > Details Information </h3>
      <p> ${pet_details}</p>
      </div>

      <div class="modal-action">
      <form method="dialog">
        
        <button class="btn px-52 ">Close</button>
      </form>
    </div>
    </div>

  
  
    
</dialog>
    `

    my_modal_1.showModal();

}
// petCongrats
const petCongrats = (congrats) => {
    my_modal_5.showModal()
        


}



// jhjihi
const petImage = (image) => { 
     const modalContainer = document.getElementById("like-btn")
    const div = document.createElement("div") 
    
    div.innerHTML +=`
       
  <div >
 
    <img
      src=${image} />
    
        </div>
    `

    modalContainer.appendChild(div)

}





loadCategories();

loadPets();




