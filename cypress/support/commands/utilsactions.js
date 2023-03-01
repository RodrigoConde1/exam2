/// <reference types="cypress"/>

class TextBoxACtions{

parseField($result){
    var fullText = $result;
    var pattern = /[0-9\.]+/g;
    var number = fullText.match(pattern);
    var value =  +number[0].replace(/\./g, '');
    console.log(value)
    return  value
    }
}

export default TextBoxACtions