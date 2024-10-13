//  console.log('connected')
const loadAllPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    displayAllPhone(data.data)
}
const displayAllPhone = (phones) => {
    // console.log(phones)
    // if(phones.length > 5){
    //     phones.slice(0,5)
    // }
    document.getElementById('spinner').classList.add('hidden')

    const phonesContainer = document.getElementById('phones-container')
    if (phones.length === 0) {
        phonesContainer.innerHTML = `
            <h1 class="text-8xl font-extrabold text-violet-600 text-center">NO phones is available</h1>
        `
        phonesContainer.classList.remove('grid')
        phonesContainer.classList.add('min-h-100vh')
        return;
    }
    phonesContainer.classList.add('grid')
    phonesContainer.innerHTML = ""
    phones.forEach(phone => {
        // console.log(phone)
        const { brand, image, phone_name, slug } = phone
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-5 pt-10">
                    <img
                    src=${image}
                    alt="Phone"
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold text-2xl">${phone_name}</h2>
                    <p>${slug}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary" onclick="loadDetails('${slug}')">Show Details</button>
                    </div>
                </div>
            </div>
        
        `
        phonesContainer.append(div)
    });


}
document.getElementById('search').addEventListener('click', function () {
    const searchField = document.getElementById('input').value;
    console.log(searchField)
    loadSearchPhones(searchField)
    document.getElementById('spinner').classList.remove('hidden')

})
const loadSearchPhones = async (phoneName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data = await res.json()
    console.log(data.data)
    setTimeout(() => {

        displayAllPhone(data.data)
    }, 2000)
}

// const displaySearchPhones =()=>{
//     console.log('connected')
// }
const loadDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    displayModal(data.data)
    my_modal_5.showModal()
}
const displayModal = (details) => {
    console.log(details)
    const { brand, image, name, mainFeatures, slug, others, releaseData } = details
    const modalBox = document.getElementById('modal')

    modalBox.innerHTML = `
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <div>
                    <img class="mx-auto" src=${image}
                    <h3 class="text-2xl font-bold">${name}</h3>
                    <p><span class="font-lg font-bold">Storage:</span> ${mainFeatures.storage}</p>
                    <p><span class="font-lg font-bold">Display Size:</span> ${mainFeatures.displaySize}</p>
                    <p><span class="font-lg font-bold">Chipset:</span> ${mainFeatures.chipSet}</p>
                    <p><span class="font-lg font-bold">Memory:</span> ${mainFeatures.memory}</p>
                    <p><span class="font-lg font-bold">Slug:</span> ${slug}</p>
                    <p><span class="font-lg font-bold">Release Data:</span> ${releaseData?releaseData:'Not available'}</p>
                    <p><span class="font-lg font-bold">Brand:</span> ${brand}</p>
                    <p><span class="font-lg font-bold">GPS:</span> ${others?.GPS? others.GPS : "Not available"}</p>
                    <p><span class="py-4">Press ESC key or click the button below to close</p>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    
    `
    // modalBox.append(div)
}


// const searchLoadPhones = ()=>{
//     const res = fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
// }



// displayAllPhone()
loadAllPhone()