export default function formatSecond(seconds){
    if(seconds){
        let min=parseInt(seconds / 60)
        let sec=parseInt(seconds % 60)
        return (min>=10?`${min}`:`0${min}`)+":"+(sec>=10?`${sec}`:`0${sec}`)
    }
    else{
        return "00:00"
    }
    
}