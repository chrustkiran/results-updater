export const BLService = {
   objToString : (obj) => {
       let resultStr = '';
       Object.keys(obj).map(subject => {
           resultStr += subject + ':' + obj[subject] + '  |  '
       });
       return resultStr.substr(0, resultStr.length-3);
   }
};
