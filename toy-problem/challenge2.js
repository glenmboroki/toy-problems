//declare speed.
let speed;
//a function to determine the demerits.
function getSpeed() {
    //declare points.
    let points;

    //get speed from inner html.
    speed = parseInt(Speed.txtnum.value)
        //alerts ok if speed is <70.
    if (speed <= 70) {
        document.write("The Speed is Ok")
            //check if speed is >70 and by how many points
    } else if (speed > 70) {
        //calculate total demerits
        points = (speed - 70) / 5;
        //round down the demerits 
        points = Math.floor(points)

        //condition to suspend licence 
        if (points > 12) {
            document.write("You have accumulated  " + points + "points.  Your license has been suspended! ")
        } else {
            //alert of the demerits
            document.write("You have accumulated   " + points + " on your licence")
        }
    }
}