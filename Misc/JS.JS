function forEachCopy(arr,fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i],i,arr);
    }
}

forEachCopy(["v","b","n","s","d","f"],(a) => {console.log(a);
    console.log((a+"B"));
})