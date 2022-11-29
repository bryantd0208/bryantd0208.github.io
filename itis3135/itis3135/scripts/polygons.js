//Figure out polygon name
function executePolygon()
{
    /* Gets shape for given input and stores it */
    shape = getShape();
    document.getElementById("polygonResponse").innerHTML = shape;
    /* Uses shape name to change image */
    document.getElementById("polygonImage").src="images/polygonShapes/" + shape + ".png"
}
function getShape()
{
    /* Polygons Dictionary */
    const polygons =
    {
        "1": "Monogon",
        "2": "Bigon",
        "3": "Triangle",
        "4": "Tetragon",
        "5": "Pentagon",
        "6": "Hexagon",
        "7": "Septagon",
        "8": "Octagon",
        "9": "Nonagon",
        "10": "Decagon"
    }
    var polygonsMax = Object.keys(polygons).length
    // loop until data is valid
    do
    {
        sides = parseFloat(prompt("Breathtaking Dalmadoodle would like to know how many sides your shape has?"));
        sides = Math.round(Math.abs(sides));
        if(validateEntry(sides, polygonsMax))
        {
            return polygons[sides];
        }
        alert("Not a number between 1 and 10 inclusive")
    } while(true)
}

function validateEntry(sides, maxEdges)
{
    // Validates number of sides
    if((sides >= 1 && sides <= maxEdges)) {return true;}
        else{return false;}
}