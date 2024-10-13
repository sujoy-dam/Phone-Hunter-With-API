console.log('connected')
const loadAllPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    displayAllPhone(data.data)
}
const displayAllPhone = (phones) => {
    console.log(phones)
    const phonesContainer = document.getElementById('phones-container')
    phones.forEach(phone => {
        console.log(phone)
        const { brand, image, phone_name } = phone
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
                        <button class="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        
        `
        phonesContainer.append(div)
    });


}

const loadDetails = ()=>


// const searchLoadPhones = ()=>{
//     const res = fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
// }




loadAllPhone()