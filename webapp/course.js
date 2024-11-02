function simplifyWeeks(weeks) {
    if (weeks.length === 0) {
        return "";
    }
    weeks.sort((a, b) => a - b);
    // console.log(weeks)
    let result = "";
    let start = weeks[0];
    let end = start;
    for (let i = 1; i < weeks.length; i++) {
        if (weeks[i] === end + 1) {
            end = weeks[i];
        } else {
            if (start === end) {
                result += start + ", ";
            } else {
                result += start + '-' + end + ", ";
            }
            start = end = weeks[i];
        }
    }
    if (start === end) {
        result += start;
    } else {
        result += start + '-' + end;
    }
    return result;
}
//
console.log(simplifyWeeks([1,2,3,4,5,6,7,8]));
// console.log(simplifyWeeks([1,2,4,6,7,8]));
console.log(simplifyWeeks([1]));