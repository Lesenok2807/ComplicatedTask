const str = ' Свобода - это выбор и его нужно делать ежедневно';

const changeStr = function(str) {    

    const checkString = function() {

        if (typeof str != 'string') {
            return 'str - не строка';
         } else {
            return 'str - строка';
        }
    };

    const deleteItem = function() {  

        const firstString = str.slice(1);
        const callback = delElem();

        function delElem() {        
            if (str[0] !== ' ') {
                return str;
            } else {
                return firstString;
            }
        } 
          

        if (str.charAt(str.length - 1) !== ' ') {
            return callback;
        } else {
            return callback.slice(0, str.length - 1);
        }
    };    

    const deleteElement = function() {
        if (str.length > 30) {
            return str.slice(0, str.length - 31).concat('(...)');
        }
    };  

    console.log(checkString());
    console.log(deleteItem());
    console.log(deleteElement());
  
};

changeStr(str);
