export default class DateUtil{
    public static formate(date:Date,format?:string){
        let paddNum = function (num:number):string {
            let numStr="";
            numStr = num+"";
            return numStr.replace(/^(\d)$/, "0$1");
        };
        let getWeekDay = function (d:number):string {
            if (d == 1) {
                return "星期一";
            } else if (d == 2) {
                return "星期二";
            } else if (d == 3) {
                return "星期三";
            } else if (d == 4) {
                return "星期四";
            } else if (d == 5) {
                return "星期五";
            } else if (d == 6) {
                return "星期六";
            } else if (d == 0) {
                return "星期日";
            }
        };
        // 指定格式字符
        let cfg = {
            yyyy: date.getFullYear(), // 年 : 4位
            yy: date.getFullYear().toString().substring(2),// 年 : 2位
            M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
            MM: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
            d: date.getDate(), // 日 : 如果1位的时候不补0
            dd: paddNum(date.getDate()),// 日 , 如果1位的时候补0
            h: date.getHours(), // 时
            hh: paddNum(date.getHours()), // 时,如果1位的时候补0
            m: date.getMinutes(), // 分
            mm: paddNum(date.getMinutes()), // 分,如果1位的时候补0
            s: date.getSeconds(), // 秒
            ss: paddNum(date.getSeconds()), // 秒 ,如果1位的时候补0
            w: getWeekDay(date.getDay())
            // 周几
        };
        format || (format = "yyyy-MM-dd hh:mm:ss");
        return format.replace(/([a-z])(\1)*/ig, function (m) {
            return cfg[m];
        });
    }
}