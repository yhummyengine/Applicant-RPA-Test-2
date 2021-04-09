// 3. Given an Array, of 0 and 1 write function to find maximum consecutive 1's

var nums = [1,0,1,1,1,,0,0,0,1,1,0,0,];
var MaxValue = function(nums) {
    let MaxNum = 0;
    let CurrentNum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            CurrentNum ++;
        } else {
            CurrentNum = 0;
        }
        if (CurrentNum > MaxNum) {
            MaxNum = CurrentNum
        }
    }
    return MaxNum
};
console.log(MaxValue(nums))
console.log(MaxValue([1,1,1,1,0,0,0,0,1,1,0,0,1,1,1]))
