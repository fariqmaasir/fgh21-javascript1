const biodata = {
    name : "Fariq Maasir",
    age : 18,
    hobbies : "Reading Book, Watching Coach Justin, listening to Coki preaching",
    isMarried : false,
    schoolList : [
        {
            name : "SDN 16 Lubuklinggau",
            yearIn : 2010,
            yearOut : 2016,
            major : null,
        },
        {
            name : "SMPN 1 Lubuklinggau",
            yearIn : 2016,
            yearOut : 2019,
            major : null,
        },
        {
            name : "SMA YADIKA Lubuklinggau",
            yearIn : 2019,
            yearOut : 2022,
            major : null,
        }
    ],
    skill : [
        {
            skillName : "Javascript",
            advanced : "Beginner",
        },
        {
            skillName : "CSS",
            advanced : "Beginner",
        }
    ],
    interestOfCoding : true,
}
console.log("Name : " + biodata.name)
console.log("Age : " + biodata.age)
console.log("Hobbies : " + biodata.hobbies)
console.log("Am i Married : " + biodata.isMarried)
console.log("Im school in  : " + biodata.schoolList[2].name)
console.log("My skill : " + biodata.skill[1].skillName)
console.log("Am i interset in coding : " + biodata.interestOfCoding)
