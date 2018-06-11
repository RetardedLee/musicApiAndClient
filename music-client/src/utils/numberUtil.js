export function formatNumber(str, n, unit) {
        n = !isNaN(n * 1) ? n * 1 : 1;
       
            str = str * 1 || 0;
            let  _ext = str >= 0 ? '' : '-';
            str = Math.abs(str);
            if (str >= 100000000) {
                str = Math.round(str / 100000000 * Math.pow(10, n)) / Math.pow(10, n) + (typeof unit != 'undefined' ? unit : '亿');
            } else if (str >= 10000) {
                str = Math.round(str / 10000 * Math.pow(10, n)) / Math.pow(10, n) + (typeof unit != 'undefined' ? unit : '万');
            } else if (str >= 1000) {
                str = Math.round(str);
            } else {
                str = parseInt(str, 10);
            }
        return _ext + str;
    }
