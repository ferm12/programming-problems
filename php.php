<?php

    // declare(strict_types=1);

    // function sum(int ...$ints): int{

    //     return array_sum($ints);

    // };

//    print(sum(2, 1, 4.1));



// function findLastKey(array $array, $value)
// {
//     return array_search($value, $array);
// }

// echo findLastKey(
//     array( 
//         'Hello' => 'Green', 
//         'World' => 'Blue'
//     ), 
//     'Blue'
// );
// output: World

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function sortByPriceAscending(string $jsonString) : string
// function exch($i, $j, &$ar)
// {
//     $temp = $ar[$i];
//     $ar[$i] = $ar[$j];
//     $ar[$j] = $temp;
// }
// function sortByPriceAscending($jsonString)
// {
//     $ars = json_decode($jsonString, true);
//     for ($i = 0; $i < count($ars); $i++){
//         $lower_price = $i;
//         for ($j = $i + 1; $j < count($ars); $j++){
//             if ($ars[$j]['price'] < $ars[$lower_price]['price']){
//                 $lower_price = $j;
//             }
//         }
//         exch($i, $lower_price, $ars);
//     }
//     var_dump(json_encode($ars));
//     // return json_encode($ars);
// }

// echo sortByPriceAscending('
//     [
//         {"name":"eggs","price":1},
//         {"name":"coffee","price":9.99},
//         {"name":"rice","price":4.04}
//     ]
// ');

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 

// function solution($num) {

//   // write your code in PHP7.0
  
//   if ($num == 0){
//       return (5 * 10);
//   }
  
//   $negative = $num / abs ($num);
  
//   $num = abs($num);
//   $n = $num;
  
//   $maxVal = PHP_INT_MIN;
//   $counter = 0;
//   $position = 1;

//           // count the number of digits in the given number.
//   while ($n > 0){
//       $counter++;
//       $n = $n / 10;
//   }

//           // loop to place digit at every possible position in the number,
//           // and check the obtained value.
//   for ($i = 0; $i <= $counter; $i++){

//     $newVal = (($num / $position) * ($position * 10)) + (5 * $position) + ($num % $position);

//               // if new value is greater the maxVal
//     if ($newVal * $negative > $maxVal){
//       $maxVal = $newVal * $negative;
//     }

//     $position = $position * 10;
//   }

//   return $maxVal;
// }

function solution($N) {

$stringvalue = strval($N);

  $maximumvalue = PHP_INT_MIN;

for ($i = ($N < 0) ? 1 : 0; $i <= strlen($stringvalue); ++$i) {

  $testvalue= substr_replace($stringvalue, '5', $i, 0);

    if ($maximumvalue < $testvalue){
      $maximumvalue = $testvalue;
    }

}

return $maximumvalue ;

}  

echo solution(0);

?>