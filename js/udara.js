task = ['o', 's', 'an'];
sec = ['s', 'o', 'an'];

obj = shuffle(task);
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function isIdentical(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] == arr2[i]){
            return true;
        }
    }
    return false; 
}
function isClone(arr1, val){
    // if (arr1.length !== arr2.length) return false;
    var str = '';
    for (var i = 0, len = arr1.length; i < len; i++)
    {
    	str += arr1[i];
    }
    if (str === val)
    {
    	return 1; 
    }
    console.log(val);
    console.log("Track: ."+val);
    return 0; 
}
// var is_same = isIdentical(task, obj);
// console.dir(is_same);

$(document).ready(function(){
	var s = "100$";
	(function(){
		console.log()
		var s = "44$";
		alert(s);
	})();
	var foo = function bar() {
		console.log(typeof bar());
	};
	var x = { company: 'xyz'};
	var em = Object.create(x);
	delete em.company
	alert(em.company);
	// var obj = shuffle(task);

	// var is_same = (task.length === obj.length) && task.every(function(element, index) {
	//     return element === obj[index]; 
	// });
	// ss = obj
	// var is_same = isIdentical(task, ss);
	// alert('Track: '+is_same);
	// if (task == obj)
	// {
	// 	// alert('Track: equals');
	// }
	// console.dir(obj);
	// console.dir(is_same);

	// Draw grid
    var row = $('<tr></tr>');
    var counter = 0;
	$.each(sec,function(i){
    	// $(row).append('<td class="square empty"></td>');
    	$(row).append('<td>'
    		+'<button class="btn btn-default" id="val'+counter+'" class="square letter" data-number="'+sec[i]+'" contenteditable="false">'+sec[i]+'</button></td>');
    	counter ++;
    });
    $("#puzzle").append(row);

    count_answer = 0;
    ans_str = '';
    $('button').on('click', function() {
    	var id = $(this).attr('id');
    	var ans = $(this).attr('data-number');
    	ans_str += ans;
    	$('#answer').append(ans);
    	$(this).attr('disabled', true);

    	count_answer ++;
    	if (count_answer == sec.length)
    	{
    		// ans_str = $('#answer').text();
    		var is_correct = isClone(task, ans_str);
    		// console.log(ans_str);
    		if (is_correct == 1)
    		{
    			alert('Corrcect! Move to Level 2');
    			$('td button').attr('disabled', false);
    			$('#answer').text('');
    			count_answer = 0;
    			ans_str = '';
    		}
    		else
    		{
    			alert('Incorrcect! Try again');
    			$('td button').attr('disabled', false);
    			$('#answer').text('');
    			count_answer = 0;
    			ans_str = '';
    		}
    	}
    });

    $('#reset').on('click', function() {
    	$('td button').attr('disabled', false);
    	$(this).attr('disabled', false);
    	$('#answer').text('');
    	count_answer = 0;
    	ans_str = '';
    });

});