
//第一版 问题是判断逻辑和最后整合结果逻辑耦合 应该设置bool型 如果真则在最后进行统一整合
function simplifyWeeks1(weeks) {
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


console.log(simplifyWeeks1([1,2,3,4,5,6,7,8]));
console.log(simplifyWeeks1([1,2,4,6,7,8]));
console.log(simplifyWeeks1([1]));
console.log("--------");

//第二版
function simplifyWeeks2(weeks) {
    // 如果输入的 weeks 数组为空，返回空字符串
    if (weeks.length === 0) {
        return "";
    }

    // 去重并排序
    const sortedWeeks = Array.from(new Set(weeks)).sort((a, b) => a - b);
    let result = "";
    let start = sortedWeeks[0]; // 初始化起始周
    let end = start; // 初始化结束周

    for (let i = 1; i < sortedWeeks.length; i++) {
        // 如果当前周是连续的，更新结束周
        if (sortedWeeks[i] === end + 1) {
            end = sortedWeeks[i];
        } else {
            // 处理并更新结果
            result = handle(start, end, result);
            // 更新起始和结束周
            start = end = sortedWeeks[i];
        }
    }

    // 处理最后一段
    result = handle(start, end, result);
    return result.endsWith(',') ? result.slice(0, -1) : result;
}

function handle(start, end, result) {
    // 处理范围或单个周的函数
    if (start === end) {
        result += start + ','; // 如果是单个周，直接加上周数
    } else {
        result += start + '-' + end + ','; // 如果是范围，格式为 start-end
    }
    return result;
}

console.log(simplifyWeeks2([2,1,3,4,5,6,7,8]));
console.log(simplifyWeeks2([1,2,4,6,9,7,8]));
console.log(simplifyWeeks2([1]));
console.log("-------");

//第三版 增加bool变量最后统一处理逻辑
function simplifyWeeks3(weeks) {
    // 如果输入的 weeks 数组为空，返回空字符串
    if (weeks.length === 0) {
        return "";
    }

    // 去重并排序
    const sortedWeeks = Array.from(new Set(weeks)).sort((a, b) => a - b);
    let result = "";
    let start = sortedWeeks[0]; // 初始化起始周
    let end = start; // 初始化结束周
    let isContinuous = true; // 布尔变量判断是否连续

    for (let i = 1; i <= sortedWeeks.length; i++) {
        // 判断当前周是否连续
        if (sortedWeeks[i] === end + 1) {
            end = sortedWeeks[i];
        } else {
            // 如果不连续，设置标志为 false
            isContinuous = false;
        }

        // 如果发现不连续，处理之前的范围并更新起始和结束周
        if (!isContinuous) {
            result = handle2(start, end, result);
            start = end = sortedWeeks[i];
            isContinuous = true; // 重置为连续状态
        }
    }

    // 处理最后一段
    // result = handle2(start, end, result);

    // 去掉最后一个逗号
    return result.endsWith(',') ? result.slice(0, -1) : result;
}

function handle2(start, end, result) {
    // 处理范围或单个周的函数
    if (start === end) {
        result += start + ','; // 如果是单个周，直接加上周数
    } else {
        result += start + '-' + end + ','; // 如果是范围，格式为 start-end
    }
    return result;
}

console.log(simplifyWeeks3([2,1,3,4,5,6,7,8]));
console.log(simplifyWeeks3([1,2,4,6,9,7,8]));
console.log(simplifyWeeks3([1]));