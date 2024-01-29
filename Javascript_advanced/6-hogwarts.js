const studentHogwarts = function() {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = function(points) {
        privateScore += points;
    };

    return {
        setName: function(newName) {name = newName;},
        rewardStudent: function() {changeScoreBy(1);},
        penalizeStudent: function() {changeScoreBy(-1);},
        getScore: () => `${name}: ${privateScore}`,
    };
};

const messi = studentHogwarts();
messi.setName("messi");
messi.rewardStudent();
messi.rewardStudent();
messi.rewardStudent();
messi.rewardStudent();
messi.rewardStudent();
messi.rewardStudent();
messi.rewardStudent();
messi.rewardStudent();
console.log(messi.getScore());

const ronaldo = studentHogwarts();
ronaldo.setName("ronaldo");
ronaldo.rewardStudent();
ronaldo.penalizeStudent();
ronaldo.penalizeStudent();
ronaldo.penalizeStudent();
console.log(ronaldo.getScore());