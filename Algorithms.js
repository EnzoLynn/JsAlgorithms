var Algorithms = {};

/**
 * [insert_sort 插入算法] 
 * @param  {[type]} arr  [原始数组]
 * @param  {[type]} desc [排序类型]
 * @return {[type]}      [排序的数组]
 */
Algorithms.insert_sort = function(arr) {

    var nArr = arr,
        temp, j;
    for (var i = 1; i < nArr.length; i++) {
        temp = parseInt(nArr[i]);
        j = i - 1;

        while (j >= 0 && parseInt(nArr[j]) > temp) {
            nArr[j + 1] = nArr[j];
            j = j - 1;
        }
        nArr[j + 1] = temp;
    };
    return nArr;
};
/**
 * [merge_sort_iteration 归并排序——迭代]
 * @param  {[type]} arr [description]
 * @param  {[type]} p   [description]
 * @param  {[type]} r   [description]
 * @return {[type]}     [description]
 */
Algorithms.merge_sort_iteration = function(A) {
    if (A.length == 1) {
        return　 A;
    }

    var rel = [],
        rer = [];
    while (A.length > 0) {
        var L = A.shift();
        var R = A.shift();
        if (typeof R == 'undefined') {
            rel.push([L]);
            break;
        };
        if (parseInt(L) < parseInt(R)) {
            rel.push([L, R]);
        } else {
            rel.push([R, L]);
        }
    }
    var count = rel.length;
    var result = [],
        output = [];
    while (count > 1) {
        result = [];
        while (rel.length > 0) {
            rer = [];
            var L = rel.shift();
            var R = rel.shift();
            if (typeof R == 'undefined') {
                result.push(L);
                continue;
            };
            while (L.length > 0 && R.length > 0) {

                if (parseInt(L[0]) < parseInt(R[0])) {
                    rer.push(L.shift());
                } else {
                    rer.push(R.shift());
                }
            }
            rer = rer.concat(L).concat(R);
            result.push(rer);
        }
        count = result.length;
        rel = result;
    }

    return result;


}

/**
 * [merge_sort_recursion 归并排序——递归]
 * @param  {[type]} arr [description]
 * @param  {[type]} p   [description]
 * @param  {[type]} r   [description]
 * @return {[type]}     [description]
 */
//_recursion 数组过大时使用迭代版本
Algorithms.merge_sort_recursion = function(A) {

    function　 merge(left, right) {
        var　 result = [];
        while (left.length > 0 && right.length > 0) {
            if (parseInt(left[0]) < parseInt(right[0])) {
                /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }

        }
        return　 result.concat(left).concat(right);
    }

    function　 mergeSort(items) {
        if (items.length == 1) {
            return　 items;
        }
        var　 middle = Math.floor(items.length / 2),
            left = items.slice(0, middle),
            right = items.slice(middle);
        return　 merge(mergeSort(left), mergeSort(right));
    }
    return　 mergeSort(A);

};
//将两组已排序的数组合并排序
Algorithms.merge_sort_expir = function(A) {
    var p = 0,
        q = A.length / 2 - 1,
        r = A.length;

    return (function(A, p, q, r) {
        var n1 = q - p + 1;
        var n2 = r - q - 1;
        var L = A.slice(p, q + 1),
            R = A.slice(q + 1, r);

        // for (var i = 0; i < n1; i++) {
        //     L[i] = A[p + i];
        // };
        // for (var i = 0; i < n2; i++) {
        //     R[i] = A[q + i+1];
        // };
        //arr.slice(p,q)
        // arr.slice(q,r)
        L[n1] = 'null';
        R[n2] = 'null';
        var i = j = 0;
        for (var k = p; k < r; k++) {

            if (L[i] == 'null' || R[j] == 'null') {
                if (L[i] == 'null') {
                    A[k] = R[j];
                };
                if (R[j] == 'null') {
                    A[k] = L[i];
                };
                break;
            };


            L[i] = parseInt(L[i]);
            R[j] = parseInt(R[j]);
            if (L[i] <= R[j]) {
                A[k] = L[i];
                i = i + 1;
            } else {
                A[k] = R[j];
                j = j + 1;
            }
        };
        return A;
    })(A, p, q, r);
};
/**
 * [sel_sort 选择排序]
 * @param  {[type]} A [description]
 * @return {[type]}   [description]
 */
Algorithms.sel_sort = function(A) {
    // Array.prototype.max = function() { //max
    //     return Math.max.apply(null, this);
    // }
    // return A.max();
    // 
    var postion, temp;
    for (var i = 0; i < A.length; i++) {
        postion = i;
        for (var j = i + 1; j < A.length; j++) {
            if (parseInt(A[j]) < parseInt(A[postion])) {
                postion = j;
            };
        };
        temp = A[i];
        A[i] = A[postion];
        A[postion] = temp;
    };

    return A;
};



/**
 * [pop_sort 冒泡排序]
 * @param  {[type]} A [description]
 * @return {[type]}   [description]
 */
Algorithms.pop_sort = function(A) {
    var temp;
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length - i; j++) {
            if (parseInt(A[j]) < parseInt(A[j - 1])) {
                temp = A[j];
                A[j] = A[j - 1];
                A[j - 1] = temp;
            }
        };
    };

    return A;

};


$(function() {
    var randoms = [];
    for (var i = 1; i < 1001; i++) {
        randoms.push(i);
    };
    //从一个给定的数组arr中,随机返回num个不重复项
    function getArrayItems(arr, num) {
        //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
        var temp_array = arr; 
        //取出的数值项,保存在此数组
        var return_array = [];
        for (var i = 0; i < num; i++) {
            //判断如果数组还有可以取出的元素,以防下标越界
            if (temp_array.length > 0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random() * temp_array.length);
                //将此随机索引的对应的数组元素值复制出来
                return_array[i] = temp_array[arrIndex];
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                temp_array.splice(arrIndex, 1);
            } else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        return return_array;
    }
    var arr = getArrayItems(randoms,randoms.length);
    $('.input').val(arr.join());

    for (key in Algorithms) {
        var compent = $('.' + key + '>.go');
        compent.attr('key', key);
        compent.on('click', function() {
            var temp = $(this).attr('key');
            var arr = $('.' + temp + '>.input').val().split(',');
            var timeConsuming = $('.' + temp + '>.timeConsuming');
            var timeS = (new Date()).getTime();
            var text = Algorithms[temp](arr);
            var timeE = (new Date()).getTime();
            timeConsuming.text(" 耗时:" + (timeE - timeS) + " 毫秒");
            $('.' + temp + '>.result').text(text);
        });
    }

});
