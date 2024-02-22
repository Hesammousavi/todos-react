let localStates = [];

export default function customEffect(callback , states = []) {

    if( localStates != states) {
        localStates = states;
        console.log(states);
    }

    console.log(localStates)

}
