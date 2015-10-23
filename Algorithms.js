var Algorithms = {};

/**
 * [insert_sort 插入算法] 
 * @param  {[type]} arr  [原始数组]
 * @param  {[type]} desc [排序类型]
 * @return {[type]}      [排序的数组]
 */
Algorithms.insert_sort = function(arr, desc) { 
        var nArr = arr,
            temp, j;
        for (var i = 1; i < nArr.length; i++) {
            temp = parseInt(nArr[i]);
            j = i - 1;
            if (desc) {
                while (j >= 0 && nArr[j] < temp) {
                    nArr[j + 1] = parseInt(nArr[j]);
                    j = j - 1;

                }
            } else {
                while (j >= 0 && nArr[j] > temp) {
                    nArr[j + 1] = nArr[j]
                    j = j - 1;

                }
            }

            nArr[j + 1] = temp;
        };
        return nArr;
    }
    /**
     * [merge_sort 归并排序]
     * @param  {[type]} arr [description]
     * @param  {[type]} p   [description]
     * @param  {[type]} r   [description]
     * @return {[type]}     [description]
     */
Algorithms.merge_sort = function(A) { 
	var p=0,q=A.length/2-1,r=A.length;
	
    return (function (A, p, q, r) {
        var n1 = q - p + 1;
        var n2 = r - q -1;
        var L = A.slice(p,q+1),
            R = A.slice(q+1,r+1); 
        // for (var i = 0; i < n1; i++) {
        //     L[i] = A[p + i];
        // };
        // for (var i = 0; i < n2; i++) {
        //     R[i] = A[q + i+1];
        // };
        //arr.slice(p,q)
        // arr.slice(q,r)
        //L[n1] = 'null';
        //R[n2] = 'null';
        var i = j = 0;
        for (var k = p; k <= r; k++) { 
        	if (L[i] != 'null') {L[i] = parseInt(L[i])};
        	if (R[j] != 'null') {R[j] = parseInt(R[j])};
            if (L[i] <= R[j]) {
                A[k] = L[i];
                i = i + 1;
            } else { 
                A[k] = R[j];
                j = j + 1;
            }
        }; 
        return A.slice(0,A.length-1);
    })(A, p, q, r);
};





$(function() { 
    for (key in Algorithms) { 
    	var compent = $('.' + key + '>.go');
    	compent.attr('key',key); 
        compent.on('click', function() {  
        	var temp = $(this).attr('key');  
        	var arr = $('.' + temp + '>.input').val().split(',');
        	var text = Algorithms[temp](arr);
            $('.' + temp + '>.result').text(text); 
        }); 
    }

});
