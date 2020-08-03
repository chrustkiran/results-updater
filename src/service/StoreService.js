import {db} from "../conf/FirebaseConfig";
import {BLService} from "./BLService";

const IndexNumber = 'Index Number';

export const StoreService = {
    saveObject: (obj) => {
        db.ref('/2020/' + obj[IndexNumber]).set(
            obj
        )
    },

    loadObject: (resultView) => {
        const resultsArray = [];
        return db.ref('/2020').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let results = {...data};
            Object.keys(results).map(index => {
                resultsArray.push(results[index]);
            });
            resultView.setState({results : resultsArray});
        });
    },

    loadSetting: (resultView) => {
        const resultsArray = [];
        return db.ref('/setting').on('value', querySnapShot => {
            let setting = querySnapShot.val() ? querySnapShot.val() : {};
            resultView.setState({...setting});
        });
    },

    saveSetting: (checked) => {
        db.ref('/setting/showResults').set(checked)
    }
};
