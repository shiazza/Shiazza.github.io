data = [{
    'img1': 'assets/GitHub.png',
    'img2': 'assets/GitHub.png',
    'title': 'WEB E_COMMERCE',
    'subtitle': 'Zenit',
    'desc':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim nostrum iste doloremque, vero neque rem corrupti labore autem. Beatae, molestiae? Ab aperiam dicta, fugit maiores eius amet consequuntur exercitationem?"
},{
    'img1': 'assets/GitHub.png',
    'img2': 'assets/GitHub.png',
    'title': 'WEB E_COMMERCE',
    'subtitle': 'Zenit',
    'desc':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim nostrum iste doloremque, vero neque rem corrupti labore autem. Beatae, molestiae? Ab aperiam dicta, fugit maiores eius amet consequuntur exercitationem?"
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src=`+element.img1+` alt="">
        <img src='${element.img2}' alt="">
    </div>

    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>

    <button class="read-more">
        Baca Selengkapnya
    </button>
</div>`
});
