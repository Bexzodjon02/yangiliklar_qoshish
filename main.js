
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
                <div class="card m-4 p-2">
                    <img borderRadius = "20px" height = "250px" src="${yangilik.imgSrc}">
                    <h4>${yangilik.id}</h4>
                    <h4>${yangilik.name}</h4>
                    <p>${yangilik.description}</p>
                    <button class = " btn btn-danger m-2 onclick="ochirish(this)" ">O'chirish</button>
                    
                    <button class ="  btn btn-success m-2 onclick="tahrirlash(this)" " >Tahrirlash </button>
                    
                </div>
            </div>
        `
        $(".row").append(col)
        

    })
 }
        //  img olish
 function takepic(val) {
     val.src = window.URL.createObjectURL(val.files[0])
     rasmManzili = val.src
 }
    //    bosh massivga push() qilish
    
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

// let searchResalt = []

function searchText(value) {
    // $('.searchText').on(searchText().val{})
    allCartons = allCartons.filter(element =>{
        return element.name.toLowerCase().includes(value.value.toLowerCase())
    })

    // render(allCartons)
    // render(allCartons)
    console.log(allCartons);
    
}       
    
// function ochirish(item) {
//     console.log(item);
// }