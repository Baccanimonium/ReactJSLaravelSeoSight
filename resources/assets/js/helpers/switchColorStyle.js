export const meterColorStyle = (i) =>{
    const k= i%4
    switch(k){
        case 1:
            return '#fcb03b'
        case 2:
            return '#3cb878'
        case 3:
            return '#f15b26'
        case 4:
            return '#4cc2c0'
        default:
            // const letters = '0123456789ABCDEF'.split('')
            // let color = '#'
            // for (var i = 0; i < 6; i++ ) {
            //     color += letters[Math.round(Math.random() * 15)]
            // }
            // return color
            return '#4cc2c0'
    }
}