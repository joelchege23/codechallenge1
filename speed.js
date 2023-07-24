function detectSpeed( speed) {
    const speedLimit =70; 
    const kmAboveSpeedLimit =5;
    // calculate the points
        const points = Math.floor((speed-speedLimit)/ kmAboveSpeedLimit)
        if (speed>0 && speed < speedLimit) {
            return "ok"
        }
            else if (speed>speedLimit){
                if (points >=12){
                    return "Lincense suspended"
                }else{
                    return ("Points: ", points)
                }
    
        }
                else {
                    return "invalid input"
                }
    
                 }
                console.log(detectSpeed(89))