const addToDb = id => {
    let obj = {};
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
        obj = JSON.parse(saved);
    }
    const quantity = obj[id];
    if (!quantity) {
        obj[id] = 1;
    }
    else {
        obj[id] = obj[id] + 1;
    }
    localStorage.setItem('savedJobs', JSON.stringify(obj));
}

export default addToDb;