// // jQuery => JavaScript Query
// // AJAX => Acinxron JavaScript And XML





// // let tugmacha = document.querySelector("button")
// // tugmcha.addEvenLister('click', () {

// // })

// // $("button").on("click", function() { 
// //     console.log("Salom")
// // })

// // $(document).ready(function(){
    
// // })


// // $("button").on("click", function() { 
//     // $("p").addClass("d-none")
//     // $("p").removeClass("d-none")
//     // this.classList.add("d-none")

//     // $("p").toggleClass("d-none")
//     // $("p").toggleClass("bg-secondary")

//     // let h3 = document.createElement("h3")
//     // h3.innerText = "Assalomu alaykum"

//     // let h3 = "<h3>Assalomu alaykum</h3>"

//     // $("body").append(h3)

//     // let deleteValue = "<del>salom nima gap?</del>"

//     // $("body").append(deleteValue)

// // })




// // daryoYangiliklari.map(yangilik => {
// //     let title = `<h4>${yangilik.title}</h4>`

// //     $("body").append(title)
// // })


// $(".getData").on("click", function () {  
//     $.ajax("https://myjson.dit.upm.es/api/bins/fsxf", {
//         beforeSend: function () { 
//             $(".loading_icon").removeClass("d-none")
//          },
//         success: function (res) { 
//             console.log(res)
//             reRender(res)
//          },
//         timeout: 100,
//         error: function (errorMessage) { 
//             // console.log(errorMessage.statusText)
//             $(".error").removeClass("d-none")
//             $(".error").html(errorMessage.statusText)
//          },
//         complete: function () {
//             $(".loading_icon").addClass("d-none")
//         }
//     })
// })

// function reRender(data) { 
//     data.map(yangilik => {
//         let card = `
//             <div class="card">
//                 <h4>${yangilik.title}</h4>
//             </div>
//         `
//         $("body").append(card)
//     })
//  }

let rasmManzili = ""
let allCartons = []
$(".mybutton").on("click", function () { 
    $.ajax("https://myjson.dit.upm.es/api/bins/apdx", {
        success: function (ress) { 
            console.log(ress)
            allCartons = ress
            render() 
         }
    })
 })

function render() { 
    $(".row").html("")
    allCartons.map(yangilik => {
        let col = `
            <div class="col-3">
                <div class="card">
                    <img src="${yangilik.imgSrc}">
                    <h4>${yangilik.id}</h4>
                    <h4>${yangilik.name}</h4>
                    <h4>${yangilik.description}</h4>
                </div>
            </div>
        `
        $(".row").append(col)

    })
 }


$("form").on("submit", function(e) {
    e.preventDefault()
    let ID  = $(".number").val()
    let name  = $(".text").val()
    let description  = $(".textarea").val()

    allCartons.push({
        id: ID,
        name: name,
        description: description,
        imgSrc: rasmManzili
    })
    render()
})



function takepic(val) {
    val.src = window.URL.createObjectURL(val.files[0])
    rasmManzili = val.src
}


