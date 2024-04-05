document.addEventListener('DOMContentLoaded', ()=>{
     const FeaturedProducts = [
   
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
{     
     slug : "Featured",
     category : "For Sale",
     tag : "Ensuite",
     name: "Luxury Villa",
     location: "Flamingo",
     cctv: `<i class="fa fa-check-square-o"></i>`,
     beds: 3,
     rooms: 3,
     size: "230 SQ.M",
     price: "2.1M",
     image: "images/gallery16.jpg",
     baths: 3
},  
]

document.getElementById('FeaturedProducts').innerHTML = 
`
${
FeaturedProducts.map((fps)=>{
     return`
     <div class="item">
          <div class="card__image card__box rounded">
              <div class="card__image-header h-250 rounded-top">
                  <div class="ribbon text-capitalize">${fps.slug}</div>
                  <img src="${fps.image}" alt="" class="img-fluid w100 img-transition rounded"/>
                  <div class="info rounded">${fps.category}</div>
              </div>
              <div class="card__image-body">
                  <span class="badge badge-primary text-capitalize mb-2 rounded">${fps.tag}</span>
                  <h6 class="text-capitalize">
                      ${fps.name}
                  </h6>

                  <p class="text-capitalize">
                      <i class="fa fa-map-marker"></i>
                      ${fps.location}
                  </p>
                  <ul class="list-inline card__content">
                      <li class="list-inline-item">

                          <span>
                              baths <br/>
                              <i class="fa fa-bath"></i> ${fps.baths}
                          </span>
                      </li>
                      <li class="list-inline-item">
                          <span>
                              beds <br/>
                              <i class="fa fa-bed"></i> ${fps.beds}
                          </span>
                      </li>
                      <li class="list-inline-item">
                          <span>
                              rooms <br/>
                              <i class="fa fa-inbox"></i> ${fps.rooms}
                          </span>
                      </li>
                      <li class="list-inline-item">
                          <span>
                              area <br/>
                              <i class="fa fa-map"></i> ${fps.size}
                          </span>
                      </li>
                  </ul>
              </div>
              <div class="card__image-footer">
                  <figure>
                  <i class="fa fa-video-camera img-fluid fa-2x mt-2"></i>
                  </figure>
                  <ul class="list-inline my-auto">
                      <li class="list-inline-item">
                          <a href="#">
                              ${fps.cctv} <br/>
                          </a>

                      </li>

                  </ul>
                  <ul class="list-inline my-auto ml-auto">
                      <li class="list-inline-item ">
                          <h6>${fps.price}</h6>
                      </li>

                  </ul>
              </div>
          </div>
          </div>
          `
     }).join('')
}`
})