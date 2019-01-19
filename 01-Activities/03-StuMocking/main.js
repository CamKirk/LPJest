/**
 * takes an array and applies an operation using a randomState object property
 * @param {Object[]} arr - array of objects with value properties
 * @param {number} arr[].value - values in the array
 * @callback cb
 */

 /**
  * callback given to applyOperatorTiny. Object arguments will be assigned a randomState property
  * @param {cb} cb - callback function to be executed.
  */
function applyOperatorTiny(arr, cb) {
    if (arr.length > 10) throw new Error("applyOperatorTiny array too large")

    return arr.filter((item)=>(typeof item ==="object")).map((item)=>{
        item.randomState = Math.ceil(2*Math.random());
        return cb(item);
    });
};


module.exports = applyOperatorTiny;