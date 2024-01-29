function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    let students = [];

    for (let i = 0; i < numberOfStudents; i++) {
        let seatNumber = i + 1;
        students.push(studentSeat(seatNumber));
    }
    return students;
}

const classRoom = createClassRoom(10); // createClassRoom return an array 

// if you use classRoom you need to call like this
// classRoom[9]() because classRoom is an array