var canMakeSubsequence = function(str1, str2) {
    let Id = 0;
    const str2Len = str2.length;
    
    for (let i of str1) {
        if (Id < str2Len && ((str2.charCodeAt(Id) - i.charCodeAt(0) + 26) % 26 <= 1)) {
            Id++;
        }
    }
    return Id === str2Len;
};
console.log(canMakeSubsequence('abdc','cd'));