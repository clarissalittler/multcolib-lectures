function outer () {
    var counter = 0;
    return function (){
        counter = counter + 1;
        console.log(counter);
    }
}

inc = outer();

inc();
inc();
inc();
