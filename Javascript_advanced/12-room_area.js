const roomDimensions = {
    width: 50,
    height: 100,

    getArea: function(){
        return this.width * this.height;
    }
}

// Utilisation de la méthode bind pour lier la méthode getArea à l'objet roomDimensions
const boundGetArea = roomDimensions.getArea.bind(roomDimensions)

console.log(boundGetArea());