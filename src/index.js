module.exports = function reverse(n) {
    const ans = Math.abs(n).toString();
    let answer = "";
    for (let i = ans.length - 1; i >= 0; i--) {
        answer = answer + ans[i];
    }
    return parseInt(answer);
};
