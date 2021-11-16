//use d3 to read dataset and create dropdown menu

d3.json("samples.json").then(data =>{
    console.log(data);

    let select= document.getElementById("selDataset")
    let dropDown= data.names;

    console.log(dropDown);

    for (let i=0; i<dropDown.length; i ++){
        let options = dropDown[i];

        let element= document.createElement("option");
        element.text= options;
        element.value= options;

        select.add(element);
    };

});