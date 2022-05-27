function redir(link) {
    window.open(link, '_blank')
}

function read_json() {
    const target = document.querySelector('.bg_img')
    fetch('./imgs.json')
        .then(res => res.json())
        .then(res => {
            let index = 0
            res.forEach((element) => {
                target.innerHTML += `<img class="img_bg hide" src="./images/${element}" alt="">`
            })
            const list = document.querySelectorAll('.img_bg')
            setInterval(() => {
                list[index].classList.add('hide')
                list[index+1].classList.remove('hide')
                list[index+1].classList.add('show')
                index += 1
                if (index === res.length-1) index = 0
            }, 2000);
        })
}