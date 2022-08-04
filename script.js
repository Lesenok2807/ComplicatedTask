const str = ' Свобода - это выбор и его нужно делать ежедневно ';

const changeStr = function(str) {    

    const checkString = function() {
        if (typeof str != 'string') {
            return 'str - не строка';
         } else {
            return 'str - строка';
        }
    };

    const deleteItem = function() {        
        if (str[0] === ' ' || str.charAt(str.length - 1) === ' ') {
            return str.trim();
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
