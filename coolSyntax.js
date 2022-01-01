

export function lookAtTheSpread(){

    let stuff = [1,2,3,4,5,6];

    let things = ["How","Now","Brown","Cow"];

    let items = {
        name : "Jordan",
        race : "black",
        gender : "male",
        age : 28,
        occupation : "engineer"
    };

    sumThreeNumbers(stuff);
    sumThreeNumbers(...stuff);
    takeThreeStrings(things);
    takeThreeStrings(...things);

    mergeObjectProperties(items);

    try{
        takeObjectProperties(items);
    }catch(err){
        console.error(`This does not work as intended. It shows the spreaderator does not behave the same on objects as it does arrays when passing them into multi-arg functions. ERROR: ${err}.`)
    }

    function sumThreeNumbers(x,y,z){
        console.log(`${x} + ${y} + ${z} = ${x+y+z}`);
    }

    function takeThreeStrings(x,y,z){
        console.log(`${x} ... ${y} ... ${z}`);
    }

    function mergeObjectProperties(x){

        let artifacts = {
            punctuation : ".",
            favoritePoem : "'Don't Quit'",
        };

        let newObj = {...x, ...artifacts};

        console.log(`${newObj.name} is a ${newObj.race} ${newObj.gender} aged ${newObj.age} who works as an ${newObj.occupation}${newObj.punctuation} One of his favorite poems is ${newObj.favoritePoem}`);
    }

    function takeObjectProperties(w,x,y,z){
        console.log(`${w.name} is a ${x.race} ${y.gender} aged ${z.age}.`);
    }
}