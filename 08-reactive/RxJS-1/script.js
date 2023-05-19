const {Observable} = rxjs;

function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}
print('paragraph');

// create a simple Observable from method observer.next()
// think of an Observable as an array that is built over time...

const observable$ = Observable.create(observer => {
    // send  value
    observer.next('Hello');
    observer.next('How Are you');
    observer.next('Goodbye');
    observer.complete();
})

// call subscribe to start emitting
observable$.subscribe(value => {
    print(value);
},
err => print('Error: ' + err.message),
() => print('Complete')
);