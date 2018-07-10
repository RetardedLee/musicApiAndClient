export default function formatSecond(seconds){
    if(seconds){
        let min=parseInt(seconds / 1000 / 60,10)
        let sec=parseInt(seconds / 1000 % 60,10)
        return (min>=10?`${min}`:`0${min}`)+":"+(sec>=10?`${sec}`:`0${sec}`)
    }
    else{
        return "00:00"
    }
    
}