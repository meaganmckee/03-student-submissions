const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "John", 35, "test");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  if (index >= 0) {
    array.splice(index, 1);
  } else {
    console.log("Please select valid name.");
  }
};
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
};
editSubmission(submissions, 2, 59);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Joe"));

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((student) => {
    if (lowestScore.score > student.score) {
      lowestScore = student;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((score) => {
    return score.passed === true;
  });
};
console.log(filterPassing(submissions));

const filter90Above = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
console.log(filter90Above(submissions));

const createRange = (start, end) => {
  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};
console.log(createRange(1, 10));
