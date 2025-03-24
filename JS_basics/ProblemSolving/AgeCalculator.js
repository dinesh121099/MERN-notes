function findAge(birthday){
    birthday = birthday.trim();
    if(/^\d{2}[./-]\d{2}[./-]\d{4}$/.test(birthday)){
        const [_, day, month, year] = birthday.match(/^(\d{2})[./-](\d{2})[./-](\d{4})$/);
        const today = new Date();
        
        // 1st approach
        const DOB = new Date(year,month - 1,day);
        console.log(DOB);
        const diff = today - DOB;
        console.log(diff/1000/60/60/24/365.25);

        // 2nd approach
        diffYear = today.getFullYear() - year;
        diffMonth = today.getMonth()+1 - month;
        diffDay = today.getDate() - day;
        if(diffMonth < 0){
            diffYear--;
            diffMonth = diffMonth + 12;
        }
        if(diffDay<0){
            diffMonth--;
            diffDay = diffDay + 31;
        }

        return `${diffYear} years,${diffMonth} months,${diffDay} days old`;
    }
    else{
      return "Invalid Date Format";
    }
}

const bday = '18.04.1982'; 
//const bday = '1982.04.18';
const age = findAge(bday);
console.log(age);