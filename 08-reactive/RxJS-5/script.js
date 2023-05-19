// const {Observable} = rxjs;
const { interval, timer, of } = rxjs;
const { takeUntil, finalize, takeWhile } = rxjs.operators;

function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}
// 1. takeUntil emits until notifier notifies
// effectively unsubscribing while not calling unsubscribe

const intervalTick$ = interval(500);
const notifier$ = timer(3000);

intervalTick$.pipe(
    takeUntil(notifier$),
    finalize(() => print('Complete'))
).subscribe(num => print(num));

const namestakeWhile = of('Bob', 'Bjorn', 'Benny', 'Agnetha')
namestakeWhile.pipe(
    takeWhile(name => name != 'Benny'),
    finalize(() => print('Complete - stopped at Benny'))
).subscribe(name => print(name));