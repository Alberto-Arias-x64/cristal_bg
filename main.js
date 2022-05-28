function redir(link) {
    window.open(link, '_blank')
}

function read_json() {
    const target = document.querySelector('.bg_img')

    const loop = (res) => {
        const list = document.querySelectorAll('.img_bg')
        let index = 0
        setInterval(() => {
            if (index === 0){
                list[list.length-1].classList.add('hide')
                list[list.length-1].classList.remove('show')
            }
            list[index].classList.add('hide')
            list[index].classList.remove('show')
            index += 1
            list[index].classList.remove('hide')
            list[index].classList.add('show')
            //console.log(index)
            if (index === res.length) index = 0
        }, 4000);
    }

    fetch('./imgs.json')
        .then(res => res.json())
        .then(res => {
            target.innerHTML += `<img class="img_bg show" src="./images/${res[res.length-1]}" alt="">`
            res.forEach((element, index) => {
                target.innerHTML += `<img class="img_bg hide" src="./images/${element}" alt="">`
                if (index === res.length -1) loop(res)
            })
        })
}