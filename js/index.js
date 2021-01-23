
let button=document.getElementById('button')
console.log(button)



button.addEventListener('click',addCart)


function addCart(){
    console.log('click on button')
    let title=document.getElementById('title').value

    let description=document.getElementById('description').value

    let carddetail={
        'title':title,
        'description':description
    }
    let notes=localStorage.getItem('notes')
    console.log(notes)
    if(notes==null){
        notesobj=[]
    }else{
        notesobj=JSON.parse(localStorage.getItem('notes'))
    }
    notesobj.push(carddetail)
    
    localStorage.setItem('notes',JSON.stringify(notesobj))
    // console.log(notesobj)
    showCart(notesobj)



}




function showCart(notesobj){
 let raja =document.getElementById('new')
 console.log(raja)
 html=''
for(var item in notesobj){
    console.log(notesobj[item]['title'])
    html=html+` <div class="col-md-4">
    <div class="card my-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${notesobj[item]['title']}</h5>
          <p class="card-text">${notesobj[item]['description']}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`
}

raja.innerHTML=html
}