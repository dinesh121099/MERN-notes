// similar to 'type' but interface is only used for object
interface rectangle{
    length: number;
    width: number;
}

interface moreInfo extends rectangle{ //inheritance from rectangle to moreInfo
    colour: string;
    ratio: () => string;
}

let box: moreInfo = {
    length: 4,
    width: 3,
    colour: "red",
    ratio: function() {
        return `${this.length} : ${this.width}`;
    }
}

console.log(box, box.ratio());