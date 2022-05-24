var dropdown = '<div class="aviso-comprado" style="display: none;"><div id="open-modal-produto-adicionado" class="rnk-comp-modal rnk-comp-modal-navegacao in" tabindex="-1" aria-hidden="false"><div class="col-12"><div class="rnk-modal-main"><div class="rnk-modal-content"><div class="rnk-container-notificacao-produto-adicionado"><div class="text-group"><h2>Produto adicionado ao carrinho</h2><ul class="rnk-comp-lista rnk-comp-lista-produtos-associados"><li> <a href="#"> <img width="50" height="50" src="http://connectparts.vteximg.com.br/arquivos/ids/1653541-450-450/image-220dd2796fcd429ebcd2e58f606758b7.jpg?v=637685971820100000" alt="Capacete Moto Fechado Pro Tork R8 Pro Speed Fosco Vermelho  Tamanho 56"><div><p class="text-truncate">Capacete Moto Fechado Pro Tork R8 Pro Speed Fos...</p><p class="rnk-produto-adicionado-preco-do-produto"><b>R$92,99</b></p></div></a> </li></ul></div></div><div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div></div>'
var inner = document.querySelector("#mini-cart .cp-dropdown").innerHTML + dropdown;
document.querySelector("#mini-cart .cp-dropdown").innerHTML = inner

$(".ad-btn-comprar").on("click", function () {
    this.parentNode.parentNode.parentNode.parentNode.classList.add("shopping");
    var shoppingcard = $(".shopping .variation-list select  :selected").data('id')

    if (shoppingcard == '' || !shoppingcard) {
        alert("por favor ne irmão seleciona o bagulho");
        $(".shopping").removeClass("shopping")
    } else {
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
                document.querySelector(".shopping").style.height = "400px";
                document.querySelector(".shopping").style.display = "none";
                document.querySelector(".cp-dropdown-menu.slide-right.drop-right").style.display = "none"
                document.querySelector("body").style.marginTop = "0";
                document.querySelector("body").style.overflow = "auto";
                document.querySelector("#header").style.position = "relative";
                document.querySelector(".bgDarkFocus").style.display = "none";
                document.querySelector(".aviso-comprado").style.display = "none"
                $(".shopping").removeClass("shopping")
            }, 3000);
        }, 2000);
        var elem = document.querySelector(".progress-bar");
        elem.style.width = "0%";
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