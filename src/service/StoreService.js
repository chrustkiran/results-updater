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
            //resultView.setState({results: results});
            //BLService.mapResultObjtoResultArray(this.dataSource, results);
            Object.keys(results).map(index => {
                //const resultsStr = BLService.objToString(results[index].results);
                //results[index].Results = resultsStr;
                resultsArray.push(results[index]);
            });
            resultView.setState({results : resultsArray});
        });
    }
};
