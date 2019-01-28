var dataset = [
    {
        color:"red", //dataset[0]['color']
        message:"I am a cool message!" //dataset[0]['message']
    },
    {
        color:"blue", //dataset[1]['color']
        message:"Living on the planet that is cool and blue as me!" //dataset[1]['message']
    },
    {
        color:"green", //dataset[2]['color']
        message:"The grass is always greener" //dataset[2]['message']
    }
]

var box = [];

function map(clr, msg) {

    var that = this;
    this.color = clr;
    this.message = msg;

    this.ele = document.createElement("div");

    this.ele.style.backgroundColor = this.color;

    this.ele.innerText = "Click to see a message!"

    this.ele.addEventListener("click",function(){
        that.ele.innerHTML = that.message;
    });

    document.body.appendChild(this.ele);
}

for (var i=0; i<dataset.length; i++){
    box.push(new
        map(dataset[i]['color'],dataset[i]['message'])
    );
}