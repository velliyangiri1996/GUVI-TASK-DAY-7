// Write a “person” class to hold all the details.

class person {
    constructor(firstName, lastName, age, place,Education,collage,department,
        work,company_name,working_domain){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.place = place;
        this.Education = Education;
        this.collage = collage;
        this.department = department;
        this.work = work;
        this.company_name = company_name;
        this.working_domain = working_domain;
    }
    getDetails(){
        return (`The name of a person is ${this.firstName} ${this.lastName} 
        with age of ${this.age} and born at ${this.place} and he/she completed ${this.Education} at
         ${this.collage} collage and major of ${this.department} and working as a ${this.work} at 
         ${this.company_name} in role of ${this.working_domain}`)
    }
}
let person1 = new person ("Velliyangiri", "Rajaganesh", "27", "Gobi","B.E","KEC","ECE","IT-AI developer",
                            "Impiger","Artificial Intelligence");
let person2 = new person ("Vidya", "V", "30", "chennai","B.E","VIT","CSE","Technical Resource","GUVI",
                            "Full-Stack");

console.log("Person Details \n")
console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person2.firstName,person1.firstName);

//write a class to calculate the uber price.

class Uber {
    constructor(Person_Name,distance,Time,waitingperiod,person_count,service_duration,
        total_cost=0){
        this.Person_Name = Person_Name;
        this.distance = distance;
        this.Time = Time;
        this.waitingperiod = waitingperiod;
        this.person_count = person_count;
        this.service_duration = service_duration;
        this.total_cost = total_cost

        this.Waiting_cost = (this.distance) + (this.waitingperiod * 7);
        // console.log(this.Waiting_cost)
        this.vechile_cost = (this.person_count + this.distance) * 5;
        // console.log(this.vechile_cost)
        this.total_cost  = (this.Waiting_cost+this.vechile_cost) * this.service_duration

        this.total_cost = this.total_cost 
        console.log(this.total_cost)

//     if ((this.Time>8 || this.Time<10) || (this.Time>16 || this.Time<23)){

    if (7<=this.Time && 10>=this.Time){
        // console.log(this.Time)
        var Time_cost1 = this.Waiting_cost +100 ;
        var Time_cost2 = this.vechile_cost + 100;
        this.total_cost=(Time_cost1 + Time_cost2) * this.service_duration

        console.log("if",this.total_cost)

        return total_cost    }
    }
UpdateDistance(dist){
    this.distance = dist;
}

getRideDetails(){
        return (` Hi ${this.Person_Name} your distance of the ride is ${this.distance} K.M and time of the 
        travel is ${this.Time} and your team count is ${this.person_count} and service duration is 
        ${this.service_duration}day'a with waitingperiod of the day ${this.waitingperiod} minit's 
        for this services total cost is ${this.total_cost}`)
    }
       
} 
let uber1 = new Uber ("Velliyangiri",20,17,15,5,30);

console.log(uber1.getRideDetails());


class Circle {
    constructor(radius,colour){
        this.radius = radius;
        this.colour = colour;
    }
    
    getRadius(){
        return (`your circle Radius is ${this.radius}`)
    }
    setRadius(radius=30,colour){
        this.colour =colour
        this.radius = radius
        return (`your circle fixed Radius is ${this.radius} and you are given colour is ${this.colour}`)
    }
    getColour(){
        return (`your circle colour is ${this.colour}`)
    }
    setColour(radius,colour="Black"){
        this.colour = colour;
        this.radius = radius;
        return (`your circle fixed colour is ${this.colour} and you are given radius is ${this.radius}`)
    }

    getCircumference(radius){
        const pi = 3.14;
        let circum = (2*pi) * radius;
        this.circumference = circum 
        //   C = 2pi x r
        return (`you given radius is ${radius} based on radius your circle circumference is ${this.circumference}`)
    }
    getArea(radius){
        this.radius = radius;
        // this.colour = colour;
        const pi = 3.14;
        let Area = pi * (this.radius ** 2)
        this.Area = Area
        // console.log(this.Area, this.radius)
        //   Area = pi x r^2
        return (`you given radius is ${this.radius} based on radius your circle Area is ${this.Area}`)
    }
    getCircleDetails(){
        return (`your circle radious is ${this.radius}  and your circle colour is ${this.colour} `)
    }
       
}

let circle1 = new Circle (20,"Pink");

console.log(circle1.getCircleDetails());
console.log(circle1.getRadius())
console.log(circle1.getColour())
console.log(circle1.getCircumference(20))
console.log(circle1.getArea(20))
console.log(circle1.setColour())
console.log(circle1.setRadius())




class Movie {
    constructor(Movie_title,Movie_studio,Movie_rating){
        this.Movie_title = Movie_title;
        this.Movie_studio = Movie_studio;
        if (Movie_rating==null){
            return this.Movie_rating = "PG"
        }
        else{
            this.Movie_rating = Movie_rating;
        }
    }
getPG(movies){
    var pg_movies = movies.filter((flim)=>flim.Movie_rating=="PG")
    return pg_movies
}
    getMovies(){
    return (`this is you are given details about the movies like the movie name is ${this.Movie_title}
    and the movie was produced by ${this.Movie_studio} and the movie rating is ${this.Movie_rating} thankyou`)
}
}

let movie1 = new Movie("Giri","Giri Productions","PG")
let movie2 = new Movie("Vidhya","Vidhya Productions")
let movie3 = new Movie("KGF Chapter 2","Giri Productions","G")
let movie4 = new Movie("KGF Chapter 1","Vidhya Productions","G")
let movie5 = new Movie("Casino Royale","Eon Productions","PG13")

let movies = [movie1,movie2,movie3,movie4,movie5]

console.log(movie1.getMovies());
console.log(movie1.getPG(movies))

console.log(" \n All movie Deatails \n")

for (let m of movies){
    
    console.log(m.getMovies())
}














