$(".ad-btn-comprar").on("click", function () {
    if(!$(".prateleira-3 ul li").hasClass("shopping")){
        this.parentNode.parentNode.parentNode.parentNode.classList.add("shopping");
    var shoppingcard = $(".shopping .variation-list select  :selected").data('id')
    if (shoppingcard == '' || !shoppingcard) {
        if (!$(".mensagem").hasClass("mensagem")) {
            setTimeout(() => {
                let mensagem = '<div class="mensagem">Selecione uma opção antes de adicionar o produto ao carrinho<div class="triangle"></div><div class="alert">!</div></div>';
                let OldContent = document.querySelector(".shopping .variation-list").innerHTML;
                document.querySelector(".shopping .variation-list").innerHTML = OldContent + mensagem;
                setTimeout(() => {
                    document.querySelector(".shopping .variation-list").innerHTML = OldContent
                    $(".shopping").removeClass("shopping")
                }, 3000)
            }, 1000);
        }
    } else {
        var btn = this;

        $(btn).addClass('ad-btn-load');
        $(btn).removeClass('ad-btn-load');

        $(btn).find('span').text(`Adicionado ao carrinho`)

        $(btn).find('i').removeClass(`fa-shopping-cart`)
        $(btn).find('i').addClass('fa-solid fa-check')

        setTimeout(() => {
            $(btn).find('span').text('Comprar')

            $(btn).find('i').removeClass('fa-solid fa-check')
            $(btn).find('i').addClass(`fa-shopping-cart`)
        }, 3000)

        var dropdown = '<div class="aviso-comprado" style="display: none;"><div id="open-modal-produto-adicionado" class="rnk-comp-modal rnk-comp-modal-navegacao in" tabindex="-1" aria-hidden="false"><div class="col-12"><div class="rnk-modal-main"><div class="rnk-modal-content"><div class="rnk-container-notificacao-produto-adicionado"><div class="text-group"><h2>Produto adicionado ao carrinho</h2><ul class="rnk-comp-lista rnk-comp-lista-produtos-associados"><li> <a href="#"> <img width="50" height="50" src="' +
            document.querySelector(".shopping .img-product img").getAttribute('src')
            + '" alt="' +
            document.querySelector(".shopping .produto-titulo").getAttribute('title')
            + '"><div><p class="text-truncate">' +
            document.querySelector(".shopping .produto-titulo h3").innerHTML
            + '</p><p class="rnk-produto-adicionado-preco-do-produto"><b>' +
            document.querySelector(".shopping .valor-por").innerHTML
            + '</b></p></div></a> </li></ul></div></div><div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div></div>'
        var inner = document.querySelector("#mini-cart .cp-dropdown").innerHTML + dropdown;
        document.querySelector("#mini-cart .cp-dropdown").innerHTML = inner

        document.querySelector(".shopping .pull-right").style.display = "flex";
        document.querySelector(".shopping").style.height = "450px";
        setTimeout(function () {
            var i = 0;

            if (i == 0) {
                i = 1;
                var elem = document.querySelector(".progress-bar");
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }


            document.querySelector(".bgDarkFocus").style.display = "block";
            document.querySelector("#header").style.position = "fixed";
            document.querySelector("#header").style.top = 0;
            document.querySelector("#header").style.width = "100%";
            document.querySelector("body").style.overflow = "hidden";
            document.querySelector("body").style.marginTop = "73px";
            document.querySelector(".aviso-comprado").style.display = "block"
            var x = document.querySelector(".cp-dropdown-menu.slide-right.drop-right")
            x.setAttribute('style', `${x.style.cssText} display : none !important;`);

            setTimeout(function () {
                document.querySelector(".shopping").style.setProperty('height', '')
                document.querySelector(".shopping .pull-right").style.setProperty('display', '')
                document.querySelector(".cp-dropdown-menu.slide-right.drop-right").style.display = "none"
                document.querySelector("body").style.marginTop = "0";
                document.querySelector("body").style.overflow = "auto";
                document.querySelector("#header").style.position = "relative";
                document.querySelector(".bgDarkFocus").style.display = "none";
                document.querySelector(".aviso-comprado").style.display = "none"
                $(".shopping").removeClass("shopping")
                document.querySelector(".aviso-comprado").remove()
            }, 3000);
        }, 2000);
        var elem = document.querySelector(".progress-bar");
        elem.style.width = "0%";
    }
}
})


// document.querySelector(".pay").addEventListener("click", teste);


// function teste(){
//     this.classList.add("bought")
//     setInterval(function(){
//         this.classList.add("a")
//     }, 5000);
// }

// .fadeIn(3000)
// .fadeOut(-2000)