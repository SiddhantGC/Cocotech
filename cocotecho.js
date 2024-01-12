
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function generateRandomTasks() {
    const numTasks = getRandomNumber(10, 20);
    const tasks = [];
  
    for (let i = 1; i <= numTasks; i++) {
      tasks.push({
        taskNumber: i,
        progress: getRandomNumber(0, 100),
        expectedEndDate: new Date(Date.now() + getRandomNumber(1, 30) * 24 * 60 * 60 * 1000),
      });
    }
  
    return tasks;
  }
  
  function sortJobs(jobs) {
    return jobs.sort((a, b) => {
      const dateComparison = a.tasks[0].expectedEndDate - b.tasks[0].expectedEndDate;
      const progressComparison = calculateOverallProgress(a) - calculateOverallProgress(b);
  
      if (dateComparison !== 0) {
        return dateComparison;
      } else {
        return progressComparison;
      }
    });
  }
  
  const randomJobs = generateRandomJobs(10);
  
  const sortedJobs = sortJobs(randomJobs);
  
  sortedJobs.forEach((job) => {
    console.log(`${job.jobTitle}: Expected End Date - ${job.tasks[0].expectedEndDate.toDateString()}, Overall Progress - ${calculateOverallProgress(job)}%`);
  });
  