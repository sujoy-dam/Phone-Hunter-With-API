//  console.log('connected')
const loadAllPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    displayAllPhone(data.data)
}
const displayAllPhone = (phones) => {
    // console.log(phones)
    document.getElementById('spinner').classList.add('hidden')

    const phonesContainer = document.getElementById('phones-container')
    if(phones.length ===0){
        phonesContainer.innerHTML=`
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
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary" id="details">Show Details</button>
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
    setTimeout(()=>{

        displayAllPhone(data.data)
    }, 2000)
}

const displaySearchPhones =()=>{

}
// const loadDetails = ()=>{

// }


// const searchLoadPhones = ()=>{
//     const res = fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
// }



// displayAllPhone()
loadAllPhone()