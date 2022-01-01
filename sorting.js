//All of my imports go here


//Try to do a bubble sort
export function bubleSort(_inputArr, _showDebug = false){

    const _arrCopy = _inputArr;

    //Go through list;
    for(let i = 0; i < _arrCopy.length - 1; i++){
        let j = i + 1;

        if(_showDebug) { console.log(`Compare num1=${_arrCopy[i]}.....num2=${_arrCopy[j]}`); }

        //swap if needed
        if(_arrCopy[i] > _arrCopy[j]){
            let _newI = _arrCopy[j];
            let _newJ = _arrCopy[i];

            _inputArr[i] = _newI;
            _inputArr[j] = _newJ;

            if(_showDebug) { console.log(`!!!SWAPPED!!!`); }

            //start over
            i = 0;
        }
    }

    if(_showDebug) { console.log(`Swapped array working...`,_inputArr); }

    return _inputArr;
}