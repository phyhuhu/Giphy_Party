class NewImages{
    constructor(data){
        this.data=data;
        this.addNew();
    }

    addNew(){
        let images=$("#images");
        let index=Math.floor(Math.random()*this.data.length);
        let newImage=`<div class="col-6 col-md-4">
        <img src=${this.data[index].images.original.url} class="img-thumbnail">
        </div>`;

        images.append(newImage);
    }
}

class DeleteImages{
    constructor(){
        this.deleteOld();
    }
    
    deleteOld(){
        $("#images").children().remove();
    }
}

$("#inputImages").on("submit", async function(event) {
    event.preventDefault();

    let res = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {params: {
        q: $("#name").val(),
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }});

    new NewImages(res.data.data);
    $("#inputImages").trigger("reset");
});

$("#delete").on("click", function(event) {
    event.preventDefault();
    new DeleteImages();
});