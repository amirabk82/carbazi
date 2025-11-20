

// index page:
// services

function servicesPostGenerator(){
    servicesContainer = document.getElementById("services-container");
    for(el of services){
    
        servicesContainer.innerHTML += `<div class="col-sm-6 col-lg-4">
        <a href="service-details.html?id=`+el.id+`">
            <div class="service-item">
                <div class="service-img">
                    <img src="assets/img/javid/`+el.pic[0]+`" alt="Service">
                </div>
                <div class="service-content">
                    <i class="bx `+el.icon+`"></i>
                    <i class="bx `+el.icon+` service-icon"></i>
                    <h3>`+el.title+`</h3>
                    <p>`+el.summary+`</p>
                </div>
            </div>
        </a>
    </div>`
    
    }
}






function getIdFromURL(){
    const params = new URLSearchParams(window.location.search);
     id = params.get("id");
    return id;
}


// service-details page:
function serviceDetailsGenerator(){

    id = getIdFromURL();

    let sliderItems = "";
    for(let i =0; i<services[id].pic.length; i++){
        sliderItems += 
        `<div class="service-details-slider-item">
            <img src="assets/img/javid/`+services[id].pic[i]+`" alt="Service">
        </div>`
    }

    serviceDetailsContainer = document.getElementById("service-details-container");
serviceDetailsContainer.innerHTML=`<div class="service-details-item">
<div class="service-details-img">
    <div class="service-details-slider owl-theme owl-carousel">

    `+sliderItems+`;

    </div>
    <h3>`+services[id].title+`</h3>
    <p>`+services[id].describe+`</p>
</div>
</div>`
}
